import { getCustomRepository } from "typeorm"
import { createParameter } from "typescript"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

class ListUsersReceiveComplimentsService {
    async execute(user_id) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })
        return compliments
    }
}

export { ListUsersReceiveComplimentsService }