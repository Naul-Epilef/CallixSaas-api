import { Sell } from "@prisma/client";
import prisma from "../../global/prisma"

interface ICreateSell {
    userId: string;
    clientId: string;
    productId: string;
}

const createSell = async ({ userId, clientId, productId }: ICreateSell): Promise<Sell> => {
    const newSell = await prisma.sell.create({
        data: {
            userId,
            clientId,
            productId
        }
    })

    return newSell
}

export default createSell