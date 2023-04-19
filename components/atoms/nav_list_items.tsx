import NextLink from 'next/link';
import { LinkBox, LinkOverlay, ListItem, ListIcon } from "@chakra-ui/layout";


const NavListItems = ({ name, icon, route }: any) => {
    const hasIcon = icon === null || icon === 'undefined' ? false : true;
    return (
        <ListItem paddingX={'20px'} fontSize={'16px'} key={name}>
            <LinkBox>
                <LinkOverlay as={NextLink} href={route === null || route === undefined ? '' : route} passHref>
                    {hasIcon && <ListIcon as={icon} color={'white'} marginRight={'20px'} />}
                    {name}
                </LinkOverlay>
            </LinkBox>
        </ListItem>
    );
}

export default NavListItems;