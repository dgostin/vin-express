# VIN Express

VIN Express is a full stack web application that retrieves vehicle data based on Vehicle Identification Number (VIN) by leveraging the [NHTSA API](https://vpic.nhtsa.dot.gov/api/). The frontend is built with Vite and React, while the backend is a Node.js/Express server.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Retrieve detailed vehicle information using VINs
- Fast frontend setup with Vite
- Efficient backend routing and API handling via Express
- Proxy setup in Vite for smooth local development

## Tech Stack

- **Frontend:** Vite, React
- **Backend:** Node.js, Express
- **External API:** NHTSA API for VIN lookups

## Installation

To run VIN Express locally for development, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/VIN-Express.git
   cd VIN-Express
   ```

2. **Install Dependencies:**  
   Run `npm install` in the root directory to install both backend and frontend dependencies.

   ```bash
   npm install
   ```

3. **Environment Variables:**  
   Create a `.env` file in the root directory for backend configuration (see [Environment Variables](#environment-variables) below).

## Development

1. **Start Development Servers:**  
   Run the development servers for both frontend and backend with:

   ```bash
   npm run dev
   ```

   By default:

   - The backend runs on port `5000`
   - The frontend proxies to the backend via the `server.proxy` setting in `vite.config.js`

2. **Backend Port Configuration:**  
   The backend port can be modified in `.env`:
   ```env
   PORT=5001
   ```
   Ensure the `target` port in `vite.config.js` matches the backend port.

## Environment Variables

VIN Express requires environment variables to configure the backend. Add the following to a `.env` file in the root directory:

```env
PORT=5000
```

> _Replace `5000` with your desired port if needed._

## Deployment

VIN Express is set up for deployment on [Vercel](https://vercel.com/):

1. **Deploy to Vercel:** When adding VIN Express as a new Vercel project, use default settings.
2. **Set Output Directory:**
   - Set **Output Directory** to `client/dist`, where Vite places the build output.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues/) for anything you'd like to work on or discuss.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
