import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MortgagesSetupModule } from './mortgages-setup/mortgages-setup.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MortgagesSetupModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
