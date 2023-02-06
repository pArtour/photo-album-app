# PhotoAlbum

## Folder structure

I tried to implement the photo album application with the following architecture:

- app directory contains the main app module and the main app component. Also it contains other building blocks of the application (albums, users) with shader utils (components, pipes, directives). Basically I would consider each module is like a standalone application.
- each building block of the application (album or users) has pages, components, services and utils folder. Pages folder contains the routing parts of the app, the components that are used in the routing and the services that are used in the components (smart components). Components folder contains the dumb components that are used in the features. Services folder contains services that are used in smart components. They are used to fetch data from the server. Also might contain stores (like ngrx) or other data management tools. Utils folder contains the utilities that are used in the module.
- shared folder contains the components, pipes, directives and services that are used all over the app. For example capitalize pipe. Each shared module (component, pipe, directive, service) has its own folder and its own module. This way we can import only the modules that we need in the app.
- app directory also contains core folder. This folder contains the core features of the application. They are used all over the app. For example the logs service and photos service.

Application module (albums or users) are lazy loaded. This way we can load only the modules that we need. For example if we need only the albums module we can load only the albums module and not the users module.

## State management

There is no state management tool in the application. I did my best to implement the application with the best practices that I know. The services were used as stores. I tried to use the services as the only source of truth. Data could only be retrieved from the services, since I used them as the only source.

However, I think that the application could be improved by using a state management tool like ngrx. I think that it would be a good idea to use ngrx to manage the state of the application. This way we can have a single source of truth and we can have a better control of the state of the application.

## Styles

P.S I used tailwind css to create the styles of the app. I used it because it is very easy to use and it is very fast to create the styles.

P.S It might think that it looks ugly and you are probably right. I am not a designer. I just wanted to create the app with the best architecture that I could think of.

### Logs and metrics

You might notice that I did a hack to implement logs and metrics features in the application. But in the real world I would not do the same. I would use a logging service that would send the logs to the server and the same with metrics. If there's no such feature implemented on the server then I would definitely go to the manager in the company to inform about the issue or would implement it myself. I would not implement a hack like this one.
I did this hack because I did not want to use a logging service in the app. I wanted to keep the app as simple as possible.

I hope you like it and I am glad to discuss the application on the call.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
