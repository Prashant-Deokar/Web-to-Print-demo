# PrintweetPicthPrint

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

# Web-to-Print-Demo

This repository demonstrates a **Web-to-Print** application built using **PitchPrint**, a powerful tool for creating customizable products. The demo showcases how users can design and personalize printable items like business cards, t-shirts, and more through an interactive interface, and then proceed to print their customized products.

## Features

- **Product Customization**: Users can upload their designs, add text, choose colors, and apply various other customizations to products.
- **Interactive Design Interface**: The demo utilizes PitchPrint's drag-and-drop interface for easy and intuitive product personalization.
- **Real-Time Preview**: Users can see a live preview of their customized product before proceeding to print.
- **Integration with Print Services**: Demonstrates how the custom-designed product can be prepared for printing after the user is satisfied with the design.

## Getting Started

Clone this repository to your local system:

bash
git clone https://github.com/Prashant-Deokar/Web-to-Print-demo.git
cd Web-to-Print-demo

## Replace API Key and Design ID
Before running the application, make sure to replace the API Key and Design ID in the configuration file. Open the configuration file (src/app/config.ts or wherever the API key and Design ID are stored) and update the following:

javascript
apiKey: 'key123Dummy', // Replace with your API Key
designId: 'bed81027a6c31c8ca1e84372247009fa223', // Replace with your Design ID
Install Dependencies
Install the required dependencies for the project:

bash
npm install
Run the Application
Start the development server:

bash
ng serve
The application will be available at: http://localhost:4200.

How It Was Built
This demo application was created using the PitchPrint API and integrated with an Angular project for smooth customization and printing functionalities.

Learn More
PitchPrint Documentation: PitchPrint Docs
Angular CLI Documentation: https://angular.io/cli
Support
PitchPrint Support: For assistance with PitchPrint API, visit their support page.
Bug Reports: Report issues in the repository's Issues Section.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
