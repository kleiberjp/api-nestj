import { ApiExtraModels } from '@nestjs/swagger';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { ConnectUserDto } from '../../user/dto/connect-user.dto';
import { CreatePropertyDto } from '../../property/dto/create-property.dto';
import { ConnectPropertyDto } from '../../property/dto/connect-property.dto';

class CreateMortgageProcessMortgageeRelationInputDto {
  create?: CreateUserDto;
  connect?: ConnectUserDto;
}
class CreateMortgageProcessPropertyRelationInputDto {
  create?: CreatePropertyDto;
  connect?: ConnectPropertyDto;
}

@ApiExtraModels(
  CreateUserDto,
  ConnectUserDto,
  CreateMortgageProcessMortgageeRelationInputDto,
  CreatePropertyDto,
  ConnectPropertyDto,
  CreateMortgageProcessPropertyRelationInputDto,
)
export class CreateMortgageProcessDto {
  mortgagee: CreateMortgageProcessMortgageeRelationInputDto;
  property: CreateMortgageProcessPropertyRelationInputDto;
  createdAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}
