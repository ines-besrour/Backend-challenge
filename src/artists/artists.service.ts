import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { createObjectCsvWriter } from 'csv-writer';
import * as path from 'path';

@Injectable()
export class ArtistsService {
  private readonly LAST_FM_API_KEY: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.LAST_FM_API_KEY = this.configService.get<string>('LAST_FM_API_KEY');
  }

  async searchArtist(name: string): Promise<any[]> {
    const response = await this.httpService.get('https://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'artist.search',
        artist: name,
        api_key: this.LAST_FM_API_KEY,
        format: 'json',
      },
    }).toPromise();

    return response.data.results.artistmatches.artist;
  }

  async writeResultsToCSV(artists: any[], filename: string): Promise<void> {
    const filePath = path.join(__dirname, `../../${filename}`);
    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: [
        { id: 'name', title: 'NAME' },
        { id: 'mbid', title: 'MBID' },
        { id: 'url', title: 'URL' },
        { id: 'image_small', title: 'IMAGE_SMALL' },
        { id: 'image', title: 'IMAGE' },
      ],
    });

    const records = artists.map(artist => ({
      name: artist.name,
      mbid: artist.mbid,
      url: artist.url,
      image_small: artist.image[0]['#text'],
      image: artist.image[1]['#text'],
    }));

    await csvWriter.writeRecords(records);
  }
}
