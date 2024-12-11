# Developer Manual

## Getting started 

### System Requirements 
- Git
- Node.js
- NPM (Node Package Manager, comes with Node.js)
- An IDE or text editor of your choice (e.g., Visual Studio Code)

### Installaions

####Clone the repository
- Clone the repository to your local machiene using your Git:
- git clone https://github.com/your-repository-url/event-horizon cd event-horizon

#### Install dependencies
- Install Node.js dependencies specified in the package.json file:
- npm install

### Running the application 

#### Local Server
- Start the application on a local development server: npm start
- The application will be accessible at http://localhost:3000.

#### Environment Configuration
- Configure environment variables (if necessary) in a .env file in the project root. Include API keys and any other sensitive data here.

### API Documentation
#### Ticketmaster API
- Base URL: https://app.ticketmaster.com/discovery/v2/
- Endpoints:
- - /events.json: Retrieves events based on search criteria such as location, date, and genre.
- --  Method: GET
- --  Parameters: apikey, locale, size, page
- --  Example: https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&locale=en-US

#### Eventbrite API
- Base URL: https://www.eventbriteapi.com/v3/
- Endpoints:
- - /events/search/: Searches for events based on user preferences.
- -- Method: GET
- -- Authorization: Bearer Token
- -- Example: https://www.eventbriteapi.com/v3/events/search/?token=YOUR_TOKEN&q=music

#### Running Tests
- Test Suite
- - Run automated tests to ensure that the application behaves as expected: npm test

### Known Bugs and Roadmap
- Known Bugs
- - Delay in data refresh from APIs causing temporary display of outdated event information.
- - Compatibility issues with older versions of Safari on mobile devices.
- Roadmap
- - Integration of additional APIs to enhance event data.
  - Implementation of user authentication and personalized event recommendations.
  - Optimization for mobile devices and introduction of a native mobile app.
 
### Additional Documentation
- Further documentation, including detailed API descriptions and data models, can be found in the docs/ directory. This includes:
- - api_details.md: Detailed descriptions of all APIs used.
  - data_model.md: Descriptions of the data structures and database schema.


