import NextImage from 'next/image';
import NextLink from 'next/link';
import {
    Box,
    List,
    ListIcon,
    ListItem,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
    Text,
    Spacer
} from '@chakra-ui/layout';

import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite,
} from 'react-icons/md';
import NavListItems from '../atoms/nav_list_items';
import { usePlaylist } from '@/lib/hooks';

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search'
    },
    {
        name: 'My Library',
        icon: MdLibraryMusic,
        route: '/library'
    },
];

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: 'My Favorites',
        icon: MdFavorite,
        route: '/favorites'
    },
];

const myPlaylist = [
    {
        id: 1,
        name: "Afrobeates 2023🎊✨",
        route: ''
    },
    {
        id: 2,
        name: "Raggae Classic",
        route: '/'
    },
    {
        id: 3,
        name: "Best Rhumba",
        route: '/'
    },
    {
        id: 4,
        name: "Amy Winehouse Mix",
        route: '/'
    },
    {
        id: 5,
        name: "Roots Raggae",
        route: '/'
    },
    {
        id: 6,
        name: "Arabic Instrumental",
        route: '/'
    },
    {
        id: 7,
        name: "No Pain No Gain",
        route: '/'
    },
    {
        id: 8,
        name: "Dj Jacob Jolij - Feel Good",
        route: '/'
    },
    {
        id: 9,
        name: "Music 1",
        route: '/'
    },
    {
        id: 10,
        name: "Music 10",
        route: '/'
    },
    {
        id: 11,
        name: "Music 11",
        route: '/'
    },
    {
        id: 12,
        name: "Music 12",
        route: '/'
    },
];


const Sidebar = () => {
    const { playlists } = usePlaylist();

    return (
        <Box width={'100%'} height={'calc(100vh - 100px)'} bg={'black'} paddingX={'5px'} color={'grey'}>
            <Box paddingY={'20px'} height={'100%'}>
                <Box width={'120px'} marginBottom={'20px'} paddingX={'20px'} display={'flex'} alignItems={'center'}>
                    <NextImage src={'/logo.svg'} alt={''} height={60} width={120} />
                    <Spacer />
                    <Text>Dylinx</Text>
                </Box>

                <Box marginBottom={'20px'}>
                    <List spacing={2}>
                        {navMenu.map((menu) => (<NavListItems name={menu.name} icon={menu.icon} route={menu.route} key={menu.name} />))}
                    </List>
                </Box>

                <Box marginBottom={'20px'}>
                    <List spacing={2}>
                        {musicMenu.map((menu) => (<NavListItems name={menu.name} icon={menu.icon} route={menu.route} key={menu.name} />))}
                    </List>
                </Box>

                <Divider color="gray.800" />

                <Box height={'55%'} overflowY={'auto'} paddingY={'20px'}>
                    <List spacing={2}>
                        {playlists.map((playlist: { name: any; id: any; }) => (
                            <ListItem paddingX={'20px'} key={playlist.id}>
                                <LinkBox>
                                    <LinkOverlay as={NextLink} href={{ pathname: '/playlist/[id]', query: { id: playlist.id } }} passHref>
                                        {playlist.name}
                                    </LinkOverlay>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>

                </Box>


            </Box>
        </Box>
    );
}

export default Sidebar;