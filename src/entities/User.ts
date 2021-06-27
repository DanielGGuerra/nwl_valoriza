import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string // somente leitura

    @Column()
    name: string

    @Column()
    email: string

    @Exclude()
    @Column()
    password: string

    @Column()
    admin: boolean

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { User }