import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
    email: string
    password: string
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const userRespositories = getCustomRepository(UsersRepositories)

        // verifica se o email existe
        const user = await userRespositories.findOne({email})

        if(!user) {
            throw new Error('Email/Password incorrect')
        }

        // verifica se a senha esta correta
        const passwordMatch  = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error('Email/Password incorrect')
        }

        // Gerar token
        const token = sign(
            {
                email: user.email
            }, 
            '3d0f3b9ddcacec30c4008c5e030e6c13a478cb4f', // md5: daniel
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return token
    }
}

export { AuthenticateUserService }