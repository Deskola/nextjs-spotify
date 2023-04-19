import { Box, Flex, Text } from '@chakra-ui/layout';
import { Table, Thead, Td, Tr, Tbody, Th, TableContainer } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import AvatarImage from '../atoms/avatar_image';
import { formatDate, formatTime } from '@/lib/formatters';
import { useState } from 'react';
import CustomIconButton from '../atoms/icon_button';
import AlbermSongArtist from './alberm_song_artist';

const SongTable = ({ songs }: any) => {
    const [rowId, setRowId] = useState(0);

    return (
        <Box bg={'transparent'} color={'white'}>
            <Box padding={'10px'} marginBottom={'20px'}>
                <CustomIconButton
                    icon={<BsFillPlayFill fontSize={'30px'} />}
                    aria-label={'play'}
                    colorScheme={'green'}
                    size={'lg'}
                    isRound
                />
                {/* <IconButton
                    icon={<BsFillPlayFill fontSize={'30px'} />}
                    aria-label={'play'}
                    colorScheme={'green'}
                    size={'lg'}
                    isRound
                /> */}
            </Box>

            <TableContainer>
                <Table variant={'unstyled'}>
                    <Thead borderBottom={'1px solid'} borderColor={'rgba(255,255,255,0.2)'}>
                        <Tr>
                            <Th>#</Th>
                            <Th>Title</Th>
                            <Th>Album</Th>
                            <Th>Date Added</Th>
                            <Th><AiOutlineClockCircle /></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {songs.map((song) => (
                            <Tr
                                sx={{
                                    transition: 'all .3s',
                                    '&:hover': {
                                        bg: 'rgba(255,255,255,0.1)',
                                    }
                                }}
                                key={song.id}
                                cursor={'cursor'}
                                onMouseOver={() => setRowId(song.id)}
                                onMouseOut={() => setRowId(0)}
                            >
                                <Td>{rowId === song.id ? <CustomIconButton
                                    icon={<BsFillPlayFill fontSize={'30px'} />}
                                    aria-label={'play'}
                                    colorScheme={'transparent'}
                                    color={'white'}
                                    size={'xs'}
                                /> : song.id}</Td>
                                <Td>
                                    <AlbermSongArtist
                                        id={song.id}
                                        songName={song.name}
                                        artistName={song.artist.name}
                                    />
                                    {/* <Flex>
                                        <Box marginRight={'10px'}>
                                            <AvatarImage
                                                image={`https://picsum.photos/400?random=${song.id}`}
                                                width={'40px'}
                                                height={'40px'}
                                            />
                                        </Box>
                                        <Box>
                                            <Text>{song.name}</Text>
                                            <Text fontSize={'sm'} color={'gray.500'}>{song.artist.name}</Text>
                                        </Box>
                                    </Flex> */}
                                </Td>
                                <Td>{'Jungle'}</Td>
                                <Td>{formatDate(song.createdAt)}</Td>
                                <Td>{formatTime(song.duration)}</Td>

                            </Tr>
                        ))}
                    </Tbody>

                </Table>
            </TableContainer>

        </Box>
    );
}

export default SongTable;