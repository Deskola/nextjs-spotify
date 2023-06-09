import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { validateRoute } from "@/lib/auth";


export default validateRoute(async (req: NextApiRequest, res: NextApiResponse, user: { id: any; }) => {

    const playlists = await prisma.playList.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            name: 'asc',
        }
    });

    res.json(playlists);
});