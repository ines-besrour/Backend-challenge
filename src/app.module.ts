import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsService } from './artists/artists.service';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [ArtistsModule],
  controllers: [AppController],
  providers: [AppService, ArtistsService],
})
export class AppModule {}
