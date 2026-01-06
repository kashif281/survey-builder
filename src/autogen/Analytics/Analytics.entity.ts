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
import {Survey} from '../Survey/Survey.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('analytics')
@Index(["survey_id", "question_id", "response_id"])
export class Analytics {
    // Fields
        @PrimaryGeneratedColumn()
    id!: number;
    




@Column({ "type": "bigint" })

survey_id: string; 


@Column({ "type": "bigint" })

question_id: string; 


@Column({ "type": "bigint" })

response_id: string; 

@Column({ type: 'timestamp', nullable: false })
created_at: Date;


@Column({ type: 'timestamp', nullable: true })
updated_at: Date;


// Associations    

            
                    @ManyToOne(() => Survey, survey => survey.analytics)
        @JoinColumn({ name: 'surveyId' })
        survey: Survey;

                @Column({ type: "integer", })
        surveyId: number;
        
    }