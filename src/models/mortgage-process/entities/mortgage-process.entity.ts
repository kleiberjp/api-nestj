import { LoanStatus } from '@prisma/client';
import { User } from '../../user/entities/user.entity';
import { Property } from '../../property/entities/property.entity';

export class MortgageProcess {
  id: string;
  mortgagee?: User;
  mortgageeId: string;
  property?: Property;
  propertyId: string;
  status: LoanStatus;
  createdAt: Date | null;
  createdBy: string | null;
  updatedAt: Date | null;
  updatedBy: string | null;
}
