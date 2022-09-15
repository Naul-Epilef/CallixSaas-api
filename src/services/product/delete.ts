import { Product } from "@prisma/client"
import prisma from "../../global/prisma"
import findSellByProduct from "../sell/findByProduct";

interface IDeleteProduct {
    id: string;
}

const deleteProduct = async ({ id }: IDeleteProduct): Promise<Product | null> => {
    try {
        const sellWithThisProduct = await findSellByProduct({productId: id})
        if (sellWithThisProduct != null) return null
        
        const product = await prisma.product.delete({
            where: {
                id
            }
        });
    
        return product
    } catch {
        return null
    }
}

export default deleteProduct