import { Box, Flex, Text } from "@chakra-ui/layout";
import AvatarImage from "../atoms/avatar_image";


const AlbermSongArtist = ({ id, songName, artistName }: any) => {
    return (
        <Flex>
            <Box marginRight={'10px'}>
                <AvatarImage
                    image={`https://picsum.photos/400?random=${id}`}
                    width={'40px'}
                    height={'40px'}
                />
            </Box>
            <Box>
                <Text>{songName}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>{artistName}</Text>
            </Box>
        </Flex>
    );
}

export default AlbermSongArtist;