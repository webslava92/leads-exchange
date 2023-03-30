/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from './lead.schema';

@Injectable({})
export class LeadService {
  constructor(
    @Inject('LEADS_REPOSITORY')
    private leadModel: typeof Lead,
  ) {}

  async create(dto: CreateLeadDto): Promise<Lead> {
    const lead = await this.leadModel.create({ ...dto });
    return lead;
  }

  async getAll(): Promise<Lead[]> {
    const leads = await this.leadModel.findAll();
    return leads;
  }

  async getOne(id: number): Promise<Lead> {
    const lead = await this.leadModel.findByPk(id);
    return lead;
  }

  async delete(id: number): Promise<number> {
    const lead = await this.leadModel.destroy({
      where: {
        id,
      },
    });
    return lead;
  }
}
