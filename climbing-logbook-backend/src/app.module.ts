import { Module } from '@nestjs/common';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RoutesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
