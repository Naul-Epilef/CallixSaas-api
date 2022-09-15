import prisma from "../../global/prisma"

interface ICloseSupport {
    id: string
}

const closeStatus = "closed"

const closeSupport = async ({ id }: ICloseSupport): Promise<Boolean> => {
    const support = await prisma.support.update({
        where: {
            id
        },
        data: {
            status: closeStatus
        }
    })

    if (support.status == closeStatus) return true
    return false
}

export default closeSupport