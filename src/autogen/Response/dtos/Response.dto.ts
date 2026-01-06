
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


export class ResponseCreate {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    question_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    value?: string;

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
    questionId?: number;

}

export class ResponseUpdate {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    question_id?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    value?: string;

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
    questionId?: number;

}

export class Response {
    @ApiProperty()
    id: number;

    @ApiPropertyOptional()
    question_id?: string;

    @ApiPropertyOptional()
    value?: string;

    @ApiPropertyOptional()
    created_at?: Date;

    @ApiPropertyOptional()
    updated_at?: Date;

    @ApiPropertyOptional()
    questionId?: number;

}
