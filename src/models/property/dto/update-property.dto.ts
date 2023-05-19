import { Prisma } from '@prisma/client';
import { ApiExtraModels } from '@nestjs/swagger';
import { ConnectMortgageSetupDto } from '../../mortgage-setup/dto/connect-mortgage-setup.dto';
import { CreateMortgageProcessDto } from '../../mortgage-process/dto/create-mortgage-process.dto';
import { ConnectMortgageProcessDto } from '../../mortgage-process/dto/connect-mortgage-process.dto';

class UpdatePropertyMortageTypeRelationInputDto {
  connect: ConnectMortgageSetupDto;
}
class UpdatePropertyLoanProcessRelationInputDto {
  create?: CreateMortgageProcessDto;
  connect?: ConnectMortgageProcessDto;
}

@ApiExtraModels(
  ConnectMortgageSetupDto,
  UpdatePropertyMortageTypeRelationInputDto,
  CreateMortgageProcessDto,
  ConnectMortgageProcessDto,
  UpdatePropertyLoanProcessRelationInputDto,
)
export class UpdatePropertyDto {
  address?: string;
  cost?: Prisma.Decimal;
  term?: number;
  mortageType?: UpdatePropertyMortageTypeRelationInputDto;
  loanProcess?: UpdatePropertyLoanProcessRelationInputDto;
}
