import { Product } from "@prisma/client"
import prisma from "../../global/prisma"

interface IUpdateProduct {
    id: string;
    name: string;
}

const updateProduct = async (
    { id, name }: IUpdateProduct
): Promise<Product | null> => {
    try {
        const product = await prisma.product.update({
            where: {
                id
            },
            data: {
                name
            }
        })
    
        return product
    } catch {
        return null
    }
}

export default updateProduct