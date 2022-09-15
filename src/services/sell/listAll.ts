import { Sell } from "@prisma/client"
import prisma from "../../global/prisma"

const listAllSells = async (): Promise<Sell[]> => {
    const allSells = await prisma.sell.findMany()

    return allSells
}

export default listAllSells