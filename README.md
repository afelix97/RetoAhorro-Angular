# Retoahorro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Pasos para instalacion
instruciones de instalación son las siguientes:

1.- Ir al servidor productivo de Node Js y posicionarse en la ruta /sysx/progs/api/
2.- nvm ls(listar las versiones de Node Js instaladas)
3.- nvm use v12.. asegurarnos de usar la versión 12 de Node Js
4.- nvm ls para corroborar que usamos la versión 12
5.- git clone URL_REPOSITORIO_GITLAB DEL PROYECTO
6.- npm install
7.- npm start para asegurarse que se levante correctamente el microservicio Node Js
8.- pm2 start npm --name "NOMBRE PROYECTO" -- start -1 2 --run start
9.- pm2 save para guardar la aplicación
10.- pm2 log AccessToken par monitorear logs del microservicio recien creado

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
