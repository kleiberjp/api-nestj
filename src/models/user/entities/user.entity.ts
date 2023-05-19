import { Role } from '@prisma/client';
import { MortgageProcess } from '../../mortgage-process/entities/mortgage-process.entity';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  loanProcess?: MortgageProcess[];
  verified: boolean;
  enabled: boolean;
  roles: Role[];
  createdAt: Date | null;
  createdBy: string | null;
  updatedAt: Date | null;
  updatedBy: string | null;
}
