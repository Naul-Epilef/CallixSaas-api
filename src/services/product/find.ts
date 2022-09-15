import { Product } from "@prisma/client"
import prisma from "../../global/prisma"

interface IFindProduct {
    id: string
}

const findProduct = async ({ id }: IFindProduct): Promise<Product | null> => {
    const product = await prisma.product.findFirst({
        where: {
            id
        }
    })

    return product
}

export default findProduct