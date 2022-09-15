import { Sell } from "@prisma/client"
import prisma from "../../global/prisma"

interface IFindSellByClient {
    clientId: string
}

const findSellByClient = async (
    { clientId }: IFindSellByClient
): Promise<Sell | null> => {
    const sell = await prisma.sell.findFirst({
        where: {
            clientId
        }
    })

    return sell
}

export default findSellByClient