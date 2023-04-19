import {
    ButtonGroup,
    Box,
    IconButton,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb,
    Center,
    Flex,
    Text,
} from '@chakra-ui/react';

import ReactHowler from 'react-howler';
import { useEffect, useRef, useState } from 'react';
import {
    MdShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat
} from 'react-icons/md';
import { useStoreActions } from 'easy-peasy';


const Player = ({ songs, activeSong }) => {
    const [playing, setPlaying] = useState(true);
    const [index, setIndex] = useState(0);
    const [seek, setSeek] = useState(0.0);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [duration, setDuration] = useState(0.0);


    const setPlayState = (value) => {
        setPlaying(value);
    }


    return (
        <Box>
            <Box>
                {/* <ReactHowler
                    src={activeSong?.url}
                    playing={playing}
                /> */}
            </Box>
            <Center color={'gray.600'}>
                <ButtonGroup>
                    <IconButton
                        aria-label={'shuffle'}
                        outline={'none'}
                        variant={'link'}
                        fontSize={'24px'}
                        icon={<MdShuffle />} />
                    <IconButton
                        aria-label={'previous'}
                        outline={'none'}
                        variant={'link'}
                        fontSize={'24px'}
                        icon={<MdSkipPrevious />} />
                    {playing
                        ? (<IconButton
                            aria-label={'pause'}
                            outline={'none'}
                            variant={'link'}
                            color={'white'}
                            fontSize={'40px'}
                            icon={<MdOutlinePauseCircleFilled />}
                            onClick={() => setPlayState(false)}
                        />)
                        : (<IconButton
                            aria-label={'play'}
                            outline={'none'}
                            variant={'link'}
                            color={'white'}
                            fontSize={'40px'}
                            icon={<MdOutlinePlayCircleFilled />}
                            onClick={() => setPlayState(true)}
                        />)
                    }


                    <IconButton
                        aria-label={'next'}
                        outline={'none'}
                        variant={'link'}
                        fontSize={'24px'}
                        icon={<MdSkipNext />} />
                    <IconButton
                        aria-label={'repeat'}
                        outline={'none'}
                        variant={'link'}
                        fontSize={'24px'}
                        icon={<MdOutlineRepeat />} />
                </ButtonGroup>
            </Center>

            <Box color={'gray.600'}>
                <Flex justify={'center'} align={'center'}>
                    <Box width={'10%'}>
                        <Text fontSize={'xs'}>1:21</Text>
                    </Box>

                    <Box width={'80%'}>
                        <RangeSlider
                            aria-label={['min', 'max']}
                            step={0.1}
                            min={0}
                            max={321}
                            id='player-range'
                        >
                            <RangeSliderTrack bg={'gray.800'}>
                                <RangeSliderFilledTrack bg={'gray.600'} />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                        </RangeSlider>
                    </Box>

                    <Box width={'10%'} textAlign={'right'}>
                        <Text fontSize={'xs'}>321</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default Player;