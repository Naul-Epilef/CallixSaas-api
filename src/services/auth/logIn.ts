import { User } from "@prisma/client"
import prisma from "../../global/prisma"

import updateToken from "./updateToken";

interface ILogIn {
    email: string;
    password: string;
}

const logIn = async ({ email, password }: ILogIn): Promise<Boolean> => {
    const user: User | null = await prisma.user.findFirst(
        { 
            where: { 
                email, 
                password 
            } 
        }
    );

    await updateToken({ id: user?.id })

    return user != null;
}

export default logIn;