import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { DatabaseModule } from 'src/database.module';
import { uploadProviders } from './upload.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UploadController],
  providers: [UploadService, ...uploadProviders],
})
export class UploadModule {}
