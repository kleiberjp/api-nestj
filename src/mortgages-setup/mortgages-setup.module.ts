import { Module } from '@nestjs/common';
import { MortgagesSetupService } from './mortgages-setup.service';
import { MortgagesSetupController } from './mortgages-setup.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MortgagesSetupController],
  imports: [PrismaModule],
  providers: [MortgagesSetupService],
})
export class MortgagesSetupModule {}
