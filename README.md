# 3D T-shirt Designer with  AI Integration

## Introduction

This project showcases a dynamic *React* website that combines the power of *ThreeJS* for 3D graphics with artificial intelligence. It's designed to provide an immersive and interactive experience for users while also demonstrating the integration of image generating AI technology.

Cutting-edge technologies and features used to create a dynamic and engaging web experience:

  *`ThreeJS`   `React Three Fiber`    `TailwindCSS`  `Framer Motion`*    

## Key Features

1. Customize t-shirt designs with a color picker.
2. Personalize t-shirts by uploading images.
3. Generate t-shirt designs through AI prompts using DALLE AI.
4. Download an image of resulting T-shirt.

## Usage

To explore and interact with this project, follow these steps:

1. Clone this repository to your local machine or simply download the zip file:

   ```bash
   git clone https://github.com/Alimzade/ai_threejs_designer.git
   ```

2. Open this project in VS Code or other IDE.

3.  Create an `.env` file under the `server/` directory and include your OpenAI API key for image generation. Here's an example of what your `.env` file should contain:

    ```bash
    OPENAI_API_KEY=your-api-key-here
    ```

4. Open terminal, change directory to `server` folder, install dependencies and run backend server, using these commands:
    
    ```bash
    cd server
    npm install
    npm start
    ```

5. In a separate terminal, change directory to `client` folder, install dependencies and run website:

    ```bash
    cd client
    npm install
    npm run dev
    ```
Now, the website should be up and running locally, allowing you to explore the ThreeJS-powered 3D graphics and AI integration in action.

## Conclusion
This project demonstrates the integration of cutting-edge technology into web design, allowing users to personalize t-shirts through color selection, image uploads, and AI-generated designs. By following the steps outlined in this repository, you can explore the capabilities of this dynamic website.

## Acknowledgments & Attribution
This project was built following the architectural patterns and guidance provided by Adrian Hajdin (JS Mastery).
