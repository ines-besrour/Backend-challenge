# Backend-challenge

## Overview

This project is a NestJS-based API for searching artists using the Last.fm API and exporting search results to a CSV file. The project is structured using the NestJS framework with modules, controllers, and services.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ines-besrour/Backend-challenge.git
   cd Backend-challenge

2. Install the dependencies:

   ```bash
   npm install


3. Create a .env file in the root of the project and add the Last.fm API key and the port:

   ```bash
   LAST_FM_API_KEY=your_actual_api_key
   PORT=8080

4. run the application
   ```bash
   npm run start

## Endpoints

1. Search for Artists
  URL: /artists/search

  Method GET:
  Query Parameters: name (string) - The name of the artist to search for.
  
  Example:
   "localhost:8080/artists/search?name=the weekend"
   

  Response: A JSON array of artists matching the search criteria.

2. Export Artists to CSV
  URL: /artists/export

  Method POST:
  Body: 
  
  name (string) - The name of the artist to search for.
  
  filename (string) - The name of the CSV file to create.
  
  Example:
   "localhost:8080/artists/export" 
   {
     "name": "the weekend",
     "filename": "output.csv"
   }'

  Response: A message indicating the CSV file has been created successfully.
