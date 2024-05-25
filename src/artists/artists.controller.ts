import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { SearchArtistDto } from './dto/search-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get('search')
  async searchArtist(@Query('name') name: string) {
    return this.artistsService.searchArtist(name);
  }

  @Post('export')
  async exportArtists(@Body() searchArtistDto: SearchArtistDto) {
    const artists = await this.artistsService.searchArtist(searchArtistDto.name);
    await this.artistsService.writeResultsToCSV(artists, searchArtistDto.filename);
    return { message: 'CSV file created successfully' };
  }
}
