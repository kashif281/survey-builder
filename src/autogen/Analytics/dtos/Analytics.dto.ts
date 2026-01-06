
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


export class AnalyticsCreate {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    survey_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    question_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    response_id?: string;

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

export class AnalyticsUpdate {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    survey_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    question_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    response_id?: string;

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

export class Analytics {
    @ApiProperty()
    id: number;

    @ApiPropertyOptional()
    survey_id?: string;

    @ApiPropertyOptional()
    question_id?: string;

    @ApiPropertyOptional()
    response_id?: string;

    @ApiPropertyOptional()
    created_at?: Date;

    @ApiPropertyOptional()
    updated_at?: Date;

    @ApiPropertyOptional()
    surveyId?: number;

}
