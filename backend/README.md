# Backend

This is the backend for the project, built with Node.js and Express.

## Features

- User authentication (signup, login, logout, profile update)
- Protected routes using middleware
- Messaging system (send and retrieve messages)
- RESTful API endpoints

## Project Structure

- `src/routes/` — API route definitions
- `src/controllers/` — Route handler logic
- `src/middleware/` — Authentication and other middleware
- `.env` — Environment variables (not committed)

## Setup

1. Install dependencies:2. Create a `.env` file based on `.env.example` and set your environment variables.

3. Start the server:## API Endpoints

### Auth

- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/login` — Login
- `POST /api/auth/logout` — Logout
- `PUT /api/auth/update-profile` — Update user profile (protected)
- `GET /api/auth/check` — Check authentication (protected)

### Messages

- `GET /api/message/users` — Get users for sidebar (protected)
- `GET /api/message/:id` — Get messages with a user (protected)
- `POST /api/message/send/:id` — Send a message (protected)

## License

MIT