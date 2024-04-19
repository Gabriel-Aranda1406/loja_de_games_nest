import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_categoria"})
export class Categoria{

    @PrimaryGeneratedColumn() //Define a chave primária e auto incremento
    id: number;

    @IsNotEmpty()//Sem espaços em branco
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) 
    texto: string;

    @UpdateDateColumn()
    data: Date;

    @ManyToOne(() => Produto, (produto) => produto.categoria, {
        onDelete: "CASCADE"
    })
    produto: Produto
}