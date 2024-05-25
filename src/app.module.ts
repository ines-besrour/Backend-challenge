import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the ConfigModule available globally
    }),
    ArtistsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
