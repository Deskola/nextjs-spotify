import { Box, Flex } from '@chakra-ui/layout';
import AlbermSongArtist from '../molecules/alberm_song_artist';
import Player from '../molecules/player';

const PlayerBar = () => {
    return (
        <Box height={'100px'} width={'100vw'} bg={'gray.900'} padding={'10px'}>
            <Flex align={'center'}>
                <Box padding={'20px'} color={'white'} width={'30%'}>
                    <AlbermSongArtist id={1} songName={'Song1'} artistName={'Amy'} />
                </Box>

                <Box width={'40%'}>
                    <Player />
                </Box>
            </Flex>
        </Box>
    );
}

export default PlayerBar;