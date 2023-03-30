import { Module } from '@nestjs/common';
import { LeadModule } from './lead/lead.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [LeadModule, UploadModule],
})
export class AppModule {}
