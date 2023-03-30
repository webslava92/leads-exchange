import { Module } from '@nestjs/common';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { DatabaseModule } from 'src/database.module';
import { leadsProviders } from './lead.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LeadController],
  providers: [LeadService, ...leadsProviders],
})
export class LeadModule {}
