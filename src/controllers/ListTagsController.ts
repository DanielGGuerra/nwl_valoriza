import { Request, Response } from "express";
import { ListTagServices } from "../service/ListTagsService";

class ListTagsController {
    async handle(request: Request, response: Response) {
        const listTagsServices = new ListTagServices()

        const tags = await listTagsServices.execute()
        
        return response.json(tags)
    }
}

export { ListTagsController } 