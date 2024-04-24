import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name:"tb_produto"})
export class Produto{

    @PrimaryGeneratedColumn() 
    id: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({nullable: false})
    preco: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria; 

}