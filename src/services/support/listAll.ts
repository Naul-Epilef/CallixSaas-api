import { Support } from "@prisma/client"
import prisma from "../../global/prisma"

const listAllSupports = async (): Promise<Support[]> => {
    const allSupport = await prisma.support.findMany()

    return allSupport
}

export default listAllSupports