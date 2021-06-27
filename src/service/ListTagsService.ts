import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagServices {
    async execute() {
        const repositoriesTags = getCustomRepository(TagsRepositories)

        const tags = repositoriesTags.find()

        return classToPlain(tags)
    }
}

export { ListTagServices }