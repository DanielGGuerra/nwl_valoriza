import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction){

        // receber o token
        const authToken = request.headers.authorization

        // validar se o token esta preenchido
        if(!authToken) {
            return response.status(401).end()
        }

        const [, token] = authToken.split(' ')

        try {
            // validar token
            const { sub } = verify(token, '3d0f3b9ddcacec30c4008c5e030e6c13a478cb4f') as IPayload

            request.user_id = sub

            return next()
        } catch(err) {
            return response.status(401).end()
        }
}