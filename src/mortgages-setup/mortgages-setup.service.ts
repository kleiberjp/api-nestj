import { Injectable, NotFoundException } from '@nestjs/common';
import { MortgageSetupEntity } from 'src/models/mortgage-setup/entities/mortgage-setup.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MortgagesSetupService {
  constructor(private prisma: PrismaService) {}

  public findOneByCountry(value: string): Promise<MortgageSetupEntity> {
    return this.prisma.mortgageSetup
      .findFirstOrThrow({
        where: { country: { contains: value, mode: 'insensitive' } },
      })
      .catch(() => {
        throw new NotFoundException(
          `💀💔 - no se encontro dato alguno para la configuracion en ${value}`,
        );
      });
  }
}
