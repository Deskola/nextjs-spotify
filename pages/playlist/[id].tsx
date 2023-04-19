import { useRouter } from "next/router";
import prisma from "@/lib/prisma";
import { validateToken } from "@/lib/auth";
import GradientLayout from "@/components/organisms/gradient_layout";
import SongTable from "@/components/molecules/songs_table";

const getBGColor = (id) => {
    const colors = [
        'red',
        'pink',
        'green',
        'blue',
        'orange',
        'purple',
        'gray',
        'teal',
        'yellow'
    ];

    return colors[id - 1] || colors[Math.floor(Math.random()) * colors.length];
}

const Playlist = ({ playlist }) => {
    const color = getBGColor(playlist.id);

    return (
        <GradientLayout
            color={color}
            title={playlist.name}
            subtitile="Public Playlist"
            description={`${playlist.songs.length} songs`}
            image={`https://picsum.photos/400?random=${playlist.id}`}
        >
            <SongTable songs={playlist.songs} />
        </GradientLayout>
    );
}

export const getServerSideProps = async ({ req, query }) => {

    let user;
    try {

        user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);

    } catch (error) {
        return {
            redirect: {
                parmanent: false,
                destination: '/signin',
            }
        }
    }

    const [playlistData] = await prisma.playList.findMany({
        where: {
            id: +query.id,
            userId: user.id,
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            }
        }
    });

    return {
        props: { playlist: JSON.parse(JSON.stringify(playlistData)) }
    }

}

export default Playlist;