
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { QueryOptions, CrudRequest } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { Repository, DeepPartial } from 'typeorm';

import {Survey} from './Survey.entity'

@Injectable()
export class SurveyService extends TypeOrmCrudService<Survey> {
  constructor(@InjectRepository(Survey) repo: Repository<Survey>) {
    super(repo);
  }

  /**
   * Solves https://github.com/nestjsx/crud/issues/777
   */
  getSelect(query: ParsedRequestParams, options: QueryOptions) {
    return [...new Set(super.getSelect(query, options))]
  }

  /**
   * Override updateOne to fix NestJS CRUD bug where PATCH causes INSERT instead of UPDATE.
   * This properly fetches the existing entity, merges with the DTO, then saves.
   */
  async updateOne(req: CrudRequest, dto: DeepPartial<Survey>): Promise<Survey> {
    const id = req.parsed.paramsFilter?.find(f => f.field === 'id')?.value;
    if (!id) {
      throw new NotFoundException('Survey ID not provided');
    }

    const existing = await this.repo.findOne({ where: { id } as any });
    if (!existing) {
      throw new NotFoundException('Survey not found');
    }

    // Merge existing entity with DTO and save
    const merged = this.repo.merge(existing, dto as any);
    return this.repo.save(merged);
  }

  /**
   * Override replaceOne to fix NestJS CRUD bug where PUT causes INSERT instead of UPDATE.
   * This properly fetches the existing entity, replaces it with the DTO, then saves.
   */
  async replaceOne(req: CrudRequest, dto: DeepPartial<Survey>): Promise<Survey> {
    const id = req.parsed.paramsFilter?.find(f => f.field === 'id')?.value;
    if (!id) {
      throw new NotFoundException('Survey ID not provided');
    }

    const existing = await this.repo.findOne({ where: { id } as any });
    if (!existing) {
      throw new NotFoundException('Survey not found');
    }

    // Replace with DTO (keeping the ID) and save
    const replaced = { ...dto, id: existing.id } as Survey;
    return this.repo.save(replaced);
  }
}
  