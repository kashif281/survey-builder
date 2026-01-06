/* eslint @typescript-eslint/no-unused-vars: "off" */

import {
    Column,
    Entity,
ManyToOne,
OneToMany,    PrimaryGeneratedColumn,
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
import {Survey} from '../Survey/Survey.entity';
import {Response} from '../Response/Response.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('question')
export class Question {
    // Fields
        @PrimaryGeneratedColumn()
    id!: number;
    




@IsOptional({ groups: [UPDATE] })
@IsNotEmpty({ groups: [CREATE] })

@Column({ type: "text", nullable: false  })

text: string;


@IsOptional({ groups: [UPDATE] })
@IsNotEmpty({ groups: [CREATE] })
@Column({ type: "varchar", length: 255, nullable: false  })

type: string; 

@Column({ type: 'timestamp', nullable: false })
created_at: Date;


@Column({ type: 'timestamp', nullable: true })
updated_at: Date;


// Associations    

            
                    @ManyToOne(() => Survey, survey => survey.questions)
        @JoinColumn({ name: 'surveyId' })
        survey: Survey;

                @Column({ type: "integer", })
        surveyId: number;
        
    
            
    
        @OneToMany(
            () => Response,
            response => response.question        )
        responses: Response[];

    }