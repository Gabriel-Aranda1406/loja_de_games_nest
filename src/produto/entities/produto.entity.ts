import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string
    
    @OneToMany(() => Categoria, (categoria) => categoria.produto)
    categoria: Categoria[]
}