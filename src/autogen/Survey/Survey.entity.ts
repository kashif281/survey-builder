/* eslint @typescript-eslint/no-unused-vars: "off" */

import {
    Column,
    Entity,
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
import {Question} from '../Question/Question.entity';
import {Analytics} from '../Analytics/Analytics.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('survey')
export class Survey {
    // Fields
        @PrimaryGeneratedColumn()
    id!: number;
    




@IsOptional({ groups: [UPDATE] })
@IsNotEmpty({ groups: [CREATE] })
@Column({ type: "varchar", length: 255, nullable: false  })

title: string; 


@IsOptional({ groups: [UPDATE] })

@Column({ type: "text", nullable: true  })

description: string;


@IsOptional({ groups: [CREATE, UPDATE] })
@IsBoolean({ always: true })

@Column({ type: 'boolean', default: true })

is_active!: boolean;


@IsOptional({ groups: [UPDATE] })
@IsNotEmpty({ groups: [CREATE] })
@Column({ type: "varchar", length: 255, nullable: false  })

created_by: string; 

@Column({ type: 'timestamp', nullable: false })
created_at: Date;


@Column({ type: 'timestamp', nullable: true })
updated_at: Date;


// Associations    

            
    
        @OneToMany(
            () => Question,
            question => question.survey        )
        questions: Question[];

    
            
    
        @OneToMany(
            () => Analytics,
            analytics => analytics.survey        )
        analytics: Analytics[];

    }