/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { Upload } from './upload.schema';

@Injectable({})
export class UploadService {
  constructor(
    @Inject('UPLOADS_REPOSITORY')
    private uploadModel: typeof Upload,
  ) {}

  async create(dto: CreateUploadDto): Promise<Upload> {
    const Upload = await this.uploadModel.create({ ...dto });
    return Upload;
  }

  async getAll() {}

  async getOne() {}
}
