# About
This project make an integration with the TMDb's Api.
The API is a REST api, responsable to make the request on database and send to the webApp. The project was my first using Typescript, but this was necessary to make a better structure than using just JavaScript.
As the project doesn't have own database, the TMDB's api was defined as an integration. This way, all the project was delevoped 
assuming this premise.

# Techs and Frameworks
- **[Express](https://www.npmjs.com/package/express "express")** -> Used to make the server (Simple and high performance server).

- **[Typescript](https://www.npmjs.com/package/typescript "typescript")** -> Main Language.

- **[Axios](https://www.npmjs.com/package/axios "axios")** -> Used to do requests.

- **[EsLint](https://www.npmjs.com/package/eslint)** -> Used to make the code clean and standardized.

- **[Cors](https://www.npmjs.com/package/cors)** -> Used to make as middleware.

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
