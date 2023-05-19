import { ApiExtraModels } from '@nestjs/swagger';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { CreatePropertyDto } from '../../property/dto/create-property.dto';

class UpdateMortgageProcessMortgageeRelationInputDto {
  create: CreateUserDto;
}
class UpdateMortgageProcessPropertyRelationInputDto {
  create: CreatePropertyDto;
}

@ApiExtraModels(
  CreateUserDto,
  UpdateMortgageProcessMortgageeRelationInputDto,
  CreatePropertyDto,
  UpdateMortgageProcessPropertyRelationInputDto,
)
export class UpdateMortgageProcessDto {
  mortgagee?: UpdateMortgageProcessMortgageeRelationInputDto;
  property?: UpdateMortgageProcessPropertyRelationInputDto;
  createdAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}
