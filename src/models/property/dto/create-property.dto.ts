import { Prisma } from '@prisma/client';
import { ApiExtraModels } from '@nestjs/swagger';
import { ConnectMortgageSetupDto } from '../../mortgage-setup/dto/connect-mortgage-setup.dto';

class CreatePropertyMortageTypeRelationInputDto {
  connect: ConnectMortgageSetupDto;
}

@ApiExtraModels(
  ConnectMortgageSetupDto,
  CreatePropertyMortageTypeRelationInputDto,
)
export class CreatePropertyDto {
  address?: string;
  cost: Prisma.Decimal;
  term: number;
  mortageType: CreatePropertyMortageTypeRelationInputDto;
}
