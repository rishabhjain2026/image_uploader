# Image Uploader with Cloudinary

A simple full-stack project to upload images from a web frontend to Cloudinary using Node.js, Express, and Multer. The uploaded image URL is printed in the terminal and displayed as a preview in the browser.

---

## Features

- Upload images from a web frontend (HTML + JavaScript)
- Backend built with Node.js and Express
- Image storage on **Cloudinary**
- Uploaded image URL printed in terminal
- Image preview displayed in browser
- Supports multiple image formats (JPG, PNG, GIF)

---

## Folder Structure

image_uploader/
│-- server.js
│-- cloudinary.js
│-- routes/
│ └── uploadRoute.js
│-- index.html
│-- package.json
│-- .env


Install dependencies:

npm install

PORT=5000
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
Replace your_cloud_name, your_api_key, your_api_secret with your Cloudinary credentials.


Start Backend Server
npm start


You should see in terminal:

Server running on port 5000

