import { Column } from 'typeorm/decorator/columns/Column';
import { CreateDateColumn } from 'typeorm/decorator/columns/CreateDateColumn';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column({ nullable: false })
    name!: string;

    @Column({ nullable: false })
    email!: string;

    @Column({ nullable: false })
    password!: string;

    @Column({ default: 'user' })
    role!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
