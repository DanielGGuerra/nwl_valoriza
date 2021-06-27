import { Request, Response } from "express";
import { ListUsersReceiveComplimentsService } from "../service/ListUsersReceiveComplimentService.ts";

class ListUserReceiverComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request

        const listUsersReceiverComplimentsService = new ListUsersReceiveComplimentsService()
        
        const compliments = await listUsersReceiverComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}

export { ListUserReceiverComplimentsController }