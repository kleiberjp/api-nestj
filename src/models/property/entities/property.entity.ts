import { Prisma } from '@prisma/client';
import { MortgageSetupEntity } from '../../mortgage-setup/entities/mortgage-setup.entity';
import { MortgageProcess } from '../../mortgage-process/entities/mortgage-process.entity';

export class Property {
  id: string;
  address: string | null;
  cost: Prisma.Decimal;
  term: number;
  mortageType?: MortgageSetupEntity;
  mortageTypeId: string;
  loanProcess?: MortgageProcess | null;
}
