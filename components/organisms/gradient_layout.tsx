import { Box, Text, Flex } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/react'
import AvatarImage from '../atoms/avatar_image';

const GradientLayout = ({ color, children, image, subtitile, title, description, roundImage }: any) => {
    return (
        <Box
            height={'100%'}
            overflow={'auto'}
            bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
        >
            <Flex bg={`${color}.600`} padding={'10px'} align={'end'}>
                <Box padding={'20px'}>
                    {roundImage ? <AvatarImage image={image} roundImage /> : <AvatarImage image={image} />}
                </Box>

                <Box padding={'20px'} lineHeight={'40px'} color={'white'}>
                    <Text fontSize={'sm'} fontWeight={'bold'} casing={'uppercase'}>
                        {subtitile}
                    </Text>
                    {title === true ? <Skeleton height='20px' /> : (<Text fontSize={'6xl'}>{title}</Text>)}

                    <Text fontSize={'sm'} fontWeight={'100'}>{description}</Text>
                </Box>
            </Flex>

            <Box padding={'10px'}>{children}</Box>

        </Box>
    );
}

export default GradientLayout;