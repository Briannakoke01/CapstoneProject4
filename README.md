
# Capstone Meme Generator

## Description

Our website is a Meme Generator that lets you create custom memes easily. You can choose a meme image from our collection, add your own top and bottom text, and generate a unique meme. If you prefer, you can also upload your own image and add personalized text to it. Once your meme is ready, you can download it to share with friends or use it however you like. You can also regenerate the text on the same image if you want to try different captions, making it easy to create multiple versions of your meme.

## Features and Functionalities

1. **Select a Meme Image:** Choose any meme image from a collection displayed on website to add your own text.
2. **Upload Custom Image:** Upload an image from your PC and add custom text to create a meme.
3. **Generate Meme Image:** After entering the top and bottom text, click the "Generate" button to create the meme.
4. **Download Meme:** Once your meme is generated, you can download the image for future use or sharing.

## Test Cases
   First, run this command in the terminal to install Cypress globally:

   ```bash
   npm install -g cypress
   ```

   Then, open the terminal in your client folder and run the following command:

   ```bash
   npx cypress open
   ```
   Once Cypress is open then following the following steps, 
   
   1. Click on E2E Testing and then select a browser of your choice.
   2. Click on Start E2E Testing.
   3. Then, click on any test case to run it and check the results.
   

   You can also run the tests automatically by using the following command after completing the initial setup
   1. Test to check Image upload functionality

   ```bash   
   npx cypress run --headed checkUploadImage.cy.js.cy.js
   ```
   
   2. Test to Check Fields Validity
   
   ```bash   
   npx cypress run --headed checkValidity.cy.js
   ```

   3. Test to check Generate Meme
   ```bash
   npx cypress run --headed memeGenerator.cy.js
   ```

  
      

## User Workflow of Website
   1. Enter top text
   2. Enter bottom text
   3. Select or upload any image
   4. Click on genrate button to generate meme
   5. Click on download button to download meme image

## Backend Api process
   1. Fetch Memes images data from api
   2. Filter out only required data from all comes html format data
   3. Return memes images data to show it to frontend

## Technologies Stacks
   1. Nodejs 
   2. Reactjs
   3. Cypress for unit testing

## How to Run the Project

### Backend Setup

To set up the backend, follow these steps:

1. Navigate to the `server` folder and open the terminal.
2. Run the following command to install dependencies:

   ```bash
   npm install
   node server.js

### Frontend Setup

To set up the Frontend, follow these steps:

1. Navigate to the `client` folder and open the terminal.
2. Run the following command to install dependencies:

   ```bash
   npm install
   npm start

