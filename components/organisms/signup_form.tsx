import { Box, Flex, Input, Button, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr'
import { signup } from '@/lib/mutations';
import { useState } from 'react';
import NextImage from 'next/image';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const toast = useToast()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setIsLoading(true);

        const user = await signup({ name, email, password });
        if (user.ok === false) {
            setIsLoading(false);
            toast({
                title: user.statusText,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });

        } else {

            setIsLoading(false);
            router.push('/');

        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Box height={'100vh'} width={'100vw'} bg={'black'}>
            <Flex justify={'center'} align={'center'} height={'100px'} borderBottom={'white 1px solid'}>
                <NextImage src={'/logo.svg'} alt={'Logo'} height={60} width={60} />
            </Flex>

            <Flex justify={'center'} align={'center'} height={'calc(100vh - 100px)'}>
                <Box padding={'50px'} bg={'gray.900'} borderRadius={'8px'}>
                    <form onSubmit={handleSubmit}>
                        <Input type='text' placeholder='Full Name' onChange={(e) => setName(e.target.value)} color={'white'} />
                        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} color={'white'} />
                        <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={(e) => setPassword(e.target.value)} color={'white'} />
                            <InputRightElement >
                                <Button h='1.75rem' size={'sm'} onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button type='submit' bg={'green.500'} isLoading={isLoading} sx={{ '&:hover': { bg: 'green.300' } }}>
                            Signup
                        </Button>
                    </form>
                </Box>
            </Flex>

        </Box>
    );
}

export default SignUpForm;