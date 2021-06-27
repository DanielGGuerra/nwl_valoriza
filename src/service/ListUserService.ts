import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserService {
    async execute() {
        const repositoriesUser = getCustomRepository(UsersRepositories)
        
        const users = repositoriesUser.find()
        
        return classToPlain(users)
    }
}

export { ListUserService }