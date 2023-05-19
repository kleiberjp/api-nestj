import { ApiExtraModels } from '@nestjs/swagger';
import { CreateMortgageProcessDto } from '../../mortgage-process/dto/create-mortgage-process.dto';
import { ConnectMortgageProcessDto } from '../../mortgage-process/dto/connect-mortgage-process.dto';

class CreateUserLoanProcessRelationInputDto {
  create?: CreateMortgageProcessDto[];
  connect?: ConnectMortgageProcessDto[];
}

@ApiExtraModels(
  CreateMortgageProcessDto,
  ConnectMortgageProcessDto,
  CreateUserLoanProcessRelationInputDto,
)
export class CreateUserDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  loanProcess?: CreateUserLoanProcessRelationInputDto;
  createdBy?: string;
  updatedBy?: string;
}
