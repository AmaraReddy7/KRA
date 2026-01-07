import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PatientService],
})
export class AppModule {}
