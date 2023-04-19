import { IconButton } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";


const CustomIconButton = ({ icon, label, color, colorScheme, size, isRound }: any) => {
    return (
        <IconButton
            icon={icon}
            aria-label={label}
            colorScheme={colorScheme}
            color={color}
            size={size}
            borderRadius={isRound ? '100%' : '3px'}
        />
    );
}

export default CustomIconButton;