import { User } from "@prisma/client"
import prisma from "../../global/prisma"

interface ISignIn {
    name: string;
    email: string;
    password: string;
}

const signIn = async ({ name, email, password }: ISignIn): Promise<User | null> => {

    const user: User | null = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (user != null) return null;

    const newUser: User = await prisma.user.create(
        { 
            data: { 
                name,
                email, 
                password 
            } 
        }
    );

    return newUser;
}

export default signIn;