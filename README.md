# VIN Express

VIN Express is a full stack web application that retrieves vehicle data based on Vehicle Identification Number (VIN) by leveraging the NHTSA API (https://vpic.nhtsa.dot.gov/api/). The frontend is built with Vite and React, while the backend is a Node.js/Express server.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

## Features

- Retrieve detailed vehicle information using VINs
- Vite Frontend
- Backend routing and API handling via Express
- Proxy setup in Vite for local development

## Tech Stack

- **Frontend:** Vite, React
- **Backend:** Node.js, Express
- **External API:** NHTSA API for VIN lookups

## Installation

To run VIN Express locally for development, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dgostin/vin-express.git
   cd vin-express
   ```

2. **Install Dependencies:**  
   Run `npm install` in the root directory to install both backend and frontend dependencies.

   ```bash
   npm install
   ```

3. **Environment Variables:**  
   Create a `.env` file in the root directory for backend configuration (see [Environment Variables](#environment-variables) below).

## Development

**Start Development Servers:**  
 Run the development servers for both frontend and backend with:

```bash
npm run dev
```

By default:

- The backend runs on port `5000`
- The frontend proxies to the backend via the `server.proxy` setting in `vite.config.js`

## Environment Variables

Environment variables are required to configure the backend. Add the following to a `.env` file in the root directory:

```env
PORT=5000
```

> _Replace `5000` with your desired port if needed._

Ensure the `target` port in `vite.config.js` matches the backend port.

## Deployment

There is a vercel.json in the root of the project for deployment on [Vercel](https://vercel.com/)

When adding as a new Vercel project, use default settings with one excpetion:

- Set **Output Directory** to `client/dist`. This is where Vite places the build output.
