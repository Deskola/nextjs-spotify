import { Image } from "@chakra-ui/react";

const AvatarImage = ({ image, roundImage, width, height }: any) => {
    return (
        <Image boxSize={'160px'} boxShadow={'2xl'} src={image} borderRadius={roundImage ? '100%' : '3px'} width={width} height={height} />
    );
}

export default AvatarImage;