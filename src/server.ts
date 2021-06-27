import "reflect-metadata"
import express from 'express'
import { Response, Request } from "express"
import 'express-async-errors'

import './database'
import { router } from "./router"
import { NextFunction } from "express-serve-static-core"

const app = express() 

app.use(express.json())
app.use(router)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message 
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log('Server is runner'))