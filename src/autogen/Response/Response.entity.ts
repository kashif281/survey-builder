/* eslint @typescript-eslint/no-unused-vars: "off" */

import {
    Column,
    Entity,
ManyToOne,    PrimaryGeneratedColumn,
    Generated,
    JoinColumn,
    JoinTable,
    Index,
    Unique,
    PrimaryColumn
} from "typeorm";
import {
  IsOptional,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CrudValidationGroups } from '@nestjsx/crud';
import {Question} from '../Question/Question.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('response')
@Index(["question_id"])
export class Response {
    // Fields
        @PrimaryGeneratedColumn()
    id!: number;
    




@Column({ "type": "bigint" })

question_id: string; 


@IsOptional({ groups: [UPDATE] })

@Column({ type: "text", nullable: true  })

value: string;

@Column({ type: 'timestamp', nullable: false })
created_at: Date;


@Column({ type: 'timestamp', nullable: true })
updated_at: Date;


// Associations    

            
                    @ManyToOne(() => Question, question => question.responses)
        @JoinColumn({ name: 'questionId' })
        question: Question;

                @Column({ type: "integer", })
        questionId: number;
        
    }