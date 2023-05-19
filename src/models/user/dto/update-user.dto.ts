import { ApiExtraModels } from '@nestjs/swagger';
import { CreateMortgageProcessDto } from '../../mortgage-process/dto/create-mortgage-process.dto';
import { ConnectMortgageProcessDto } from '../../mortgage-process/dto/connect-mortgage-process.dto';

class UpdateUserLoanProcessRelationInputDto {
  create?: CreateMortgageProcessDto[];
  connect?: ConnectMortgageProcessDto[];
}

@ApiExtraModels(
  CreateMortgageProcessDto,
  ConnectMortgageProcessDto,
  UpdateUserLoanProcessRelationInputDto,
)
export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  loanProcess?: UpdateUserLoanProcessRelationInputDto;
  createdBy?: string;
  updatedBy?: string;
}
