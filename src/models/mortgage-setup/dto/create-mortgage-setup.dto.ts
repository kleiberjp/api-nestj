export class CreateMortgageSetupDto {
  country: string;
  yearsTerms: number[];
  interestRate: number;
  formulaInterest: string;
  createdBy?: string;
  updatedBy?: string;
}
