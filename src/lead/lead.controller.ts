/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { LeadService } from './lead.service';

@Controller('/leads')
export class LeadController {
  constructor(private leadService: LeadService) {}
  @Post()
  create(@Body() dto: CreateLeadDto) {
    return this.leadService.create(dto);
  }

  @Get()
  getAll() {
    return this.leadService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.leadService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.leadService.delete(id);
  }
}
