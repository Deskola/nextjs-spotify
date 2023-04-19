import { Inter } from 'next/font/google';
import GradientLayout from '@/components/organisms/gradient_layout';
import prisma from '@/lib/prisma';
import { Box, Flex, Text } from '@chakra-ui/layout';
import AvatarImage from '@/components/atoms/avatar_image';
import { useMe } from '@/lib/hooks';

const inter = Inter({ subsets: ['latin'] })

const Home = ({ artists }: any) => {
  const { user, isLoading } = useMe();
  //console.log(user);

  return (
    <GradientLayout
      color="green"
      roundImage
      title={isLoading ? true : user.name}
      subtitile="Profile"
      description={`${user?.playlistsCount}  Public Playlist`}
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?id=33f9771b-0e6f-4a72-832c-69ed2d41f290&table=block&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
    >
      <Box color={'white'} paddingX={'20px'}>
        <Box marginBottom={'40px'}>
          <Text fontSize={'2xl'} fontWeight={'bold'}>Top tracks this month</Text>
          <Text fontSize={'sm'}>Only visible to you</Text>
        </Box>

        <Flex display={{ md: 'flex' }}>
          {artists.map((artist: any) => (
            <Box paddingX={'10px'} width={'20%'} flexShrink={0} key={artist.id}>
              <Box bg={'gray.900'} borderRadius={'4px'} padding={'15px'} width={'100%'} >
                <AvatarImage
                  roundImage
                  image={`https://picsum.photos/400?random=${artist.id}`}
                  width="80px"
                  height="80px"
                />
                <Box marginTop={'20px'}>
                  <Text fontSize={'large'}>{artist.name}</Text>
                  <Text fontSize={'x-small'}>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artistsData = await prisma.artist.findMany({});
  //console.log(artists)

  return {
    props: { artists: JSON.parse(JSON.stringify(artistsData)) }
  }
}

export default Home;
