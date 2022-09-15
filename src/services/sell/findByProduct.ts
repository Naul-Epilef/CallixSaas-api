import { Sell } from "@prisma/client"
import prisma from "../../global/prisma"

interface IFindSellByProduct {
    productId: string
}

const findSellByProduct = async (
    { productId }: IFindSellByProduct
): Promise<Sell | null> => {
    const sell = await prisma.sell.findFirst({
        where: {
            productId
        }
    })

    return sell
}

export default findSellByProduct