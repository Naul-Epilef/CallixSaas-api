import { Product } from "@prisma/client";
import prisma from "../../global/prisma";

interface ICreateProduct {
    name: string;
}

const createProduct = async ({ name }: ICreateProduct): Promise<Product> => {
    const newProduct = await prisma.product.create({
        data: {
            name
        }
    })

    return newProduct
}

export default createProduct