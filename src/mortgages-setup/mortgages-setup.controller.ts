import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { MortgagesSetupService } from './mortgages-setup.service';
import { MortgageSetupEntity } from 'src/models/mortgage-setup/entities/mortgage-setup.entity';

@Controller('mortgages-setup')
export class MortgagesSetupController {
  constructor(private readonly mortgagesSetupService: MortgagesSetupService) {}

  @Get('setup/:country')
  @UseInterceptors(ClassSerializerInterceptor)
  async findByCountry(
    @Param('country') country: string,
  ): Promise<MortgageSetupEntity> {
    const setup = await this.mortgagesSetupService.findOneByCountry(country);
    const value = new MortgageSetupEntity(setup);
    return value;
  }
}
