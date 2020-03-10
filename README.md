# About
This project make an integration with the TMDb's Api, with the objective to do a challenge made by ArcTouch.
The API is a REST api, responsable to make the request on database and send to the webApp. The project was my first using Typescript, but this was necessary to make a better structure than using just JavaScript.

# Techs and Frameworks
- **[Express](https://www.npmjs.com/package/express "express")**

- **[Typescript](https://www.npmjs.com/package/typescript "typescript")**

- **[Axios](https://www.npmjs.com/package/axios "axios")**

- **[EsLint](https://www.npmjs.com/package/eslint)**

## How to run

***Clone the project

***Create .env file and put all the global variables values

```
yarn
```
```
yarn dev:server
```
***The project will be running on http://localhost:3333

### Directory Structure

```
├── /src/               # Source code and logic of RestAPI Server,
│   |── /services/      # Services necessary to make api works, like api conection
│   ├── /controllers/   # The routes call the controllers to make the requests
│   ├── /modules/       # Modules contain the structure needed to show the data to frontend
│   ├── /integration/   # Contain all integration from third part api's.
│   │   │── /tmdb/      # Contain all the interface, and logic necessary to do requests and transform data
```

### Considerations
As the first project using Typescript, some structures could be better implemented. I choose to keep separeted the integration with TMDb's API, from the modules which would be used from webApp. The next step would be implement redis, to make faster requests, use jest to make tests and make an error handling.
