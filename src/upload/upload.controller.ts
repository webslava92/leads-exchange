/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UploadService } from './upload.service';

@Controller('/uploads')
export class UploadController {
  constructor(private uploadService: UploadService) {}
  @Post()
  create(@Body() dto: CreateUploadDto) {
    return this.uploadService.create(dto);
  }

  @Get()
  getAll() {
    return 'WORK';
  }

  getOne() {}
}
