import { MortgageSetup } from '@prisma/client';
import { Property } from '../../property/entities/property.entity';
import { Exclude } from 'class-transformer';

export class MortgageSetupEntity implements MortgageSetup {
  id: string;
  country: string;
  yearsTerms: number[];
  interestRate: number;
  formulaInterest: string;

  @Exclude()
  properties?: Property[];
  @Exclude()
  createdAt: Date | null;
  @Exclude()
  createdBy: string | null;
  @Exclude()
  updatedAt: Date | null;
  @Exclude()
  updatedBy: string | null;

  constructor(partial: Partial<MortgageSetupEntity>) {
    Object.assign(this, partial);
  }
}
