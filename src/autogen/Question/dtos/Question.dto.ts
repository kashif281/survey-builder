
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsString,
    IsNumber,
    IsBoolean,
    IsOptional,
    IsNotEmpty,
    IsUUID,
    IsDate,
    IsArray,
    IsEnum,
    IsObject,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';


export class QuestionCreate {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    text?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    type?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    created_at?: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    updated_at?: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    surveyId?: number;

}

export class QuestionUpdate {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    text?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    type?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    created_at?: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    updated_at?: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    surveyId?: number;

}

export class Question {
    @ApiProperty()
    id: number;

    @ApiPropertyOptional()
    text?: string;

    @ApiPropertyOptional()
    type?: string;

    @ApiPropertyOptional()
    created_at?: Date;

    @ApiPropertyOptional()
    updated_at?: Date;

    @ApiPropertyOptional()
    surveyId?: number;

}
