import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendFeaturesParkModule } from '@client-nx-her/backend/features';

@Module({
  imports: [BackendFeaturesParkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
