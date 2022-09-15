import prisma from "../../global/prisma"

interface IOpenSupport {
    id: string
}

const openStatus = "open"

const openSupport = async ({ id }: IOpenSupport): Promise<Boolean> => {
    const support = await prisma.support.update({
        where: {
            id
        },
        data: {
            status: openStatus
        }
    })

    if (support.status == openStatus) return true
    return false
}

export default openSupport