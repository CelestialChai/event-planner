# Tie Your Knot - Event Planner Application

**Tie Your Knot** is a modern event planning application designed to help users organize and manage events seamlessly. From creating unforgettable moments to booking venues and managing guest lists, this app simplifies the process for both planners and attendees.

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
   - [Frontend](#frontend)  
   - [Backend](#backend)  
   - [Authentication](#authentication)  
   - [Deployment](#deployment)  
- [Installation](#installation)  
   - [Prerequisites](#prerequisites)  
   - [Steps](#steps)  
- [API Endpoints](#api-endpoints)  
   - [Authentication](#authentication-endpoints)  
   - [Events](#events-endpoints)  
- [Application Workflow](#application-workflow)  
- [Contributing](#contributing)  
   - [Reporting Issues](#reporting-issues)  
   - [Pull Requests](#pull-requests)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)  
- [Screenshots](#screenshots)  
   - [Landing Page](#landing-page)  
   - [Event Management](#event-management)  
- [Contact](#contact)  

## Features
- User Authentication
    - Sign up and log in securely with unique usernames and email addresses.
    - Persistent sessions using JWT tokens.

- Event Management
    - Create, update, and delete events.
    - Assign roles to users (planner and customer).
    - View all events associated with a user.

- Event Services
    - Venue selection.
    - Catering management.
    - Photography booking.

- UI/UX
    - Responsive design powered by Material UI and Tailwind CSS.
    - Real-time feedback for user actions (e.g., form validation, error handling).

- Database
    - PostgreSQL database for storing user and event data.
    - Sequelize ORM for managing models and relationships.

## Technologies Used
### Frontend
- React with TypeScript
- Material UI for component design
- Tailwind CSS for custom styling
- React Router for navigation

### Backend
- Node.js with Express
- Sequelize ORM
- PostgreSQL

### Authentication
- JWT (JSON Web Tokens) for secure authentication

### Deployment
- Hosted on Render (frontend and backend)

## Installation
### Prerequisites
Node.js (v16+ recommended)
PostgreSQL database

### Steps
1. Clone the repository:

    ```bash
    git clone https://github.com/CelestialChai/event-planner.git
    cd event-planner
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the server .env file:
    - Create a .env file in the server directory:
    ```bash
    DB_NAME='event_planner_db'
    DB_USER=''
    DB_PASSWORD=''
    JWT_SECRET_KEY=''
    ```

4. Seed the database (*optional*):
    ```bash
    npm run seed
    ```

5. Run the application:

    - Start the application
    ```bash
    npm run start:dev
    ```

    Alternatively:
    - Start the backend:
    ```bash
    cd server
    npm run dev
    ```
    - Start the frontend:
    ```bash
    cd client
    npm run dev
    ```

6. Access the app in your browser:

    http://localhost:3000

## API Endpoints
### Authentication
- POST /auth/login: Authenticate a user and return a JWT token.
- POST /auth/signup: Register a new user.

### Events
- GET /api/events: Get all events for the logged-in user.
- POST /api/events: Create a new event.
- PUT /api/events/:id: Update an existing event.
- DELETE /api/events/:id: Delete an event.

### License
This project is licensed under the [MIT License](./MIT%20License).

## Screenshots
### Landing Page

### Event Management

## Contact
For inquiries or support, contact:

| Name             | Email               | GitHub Profile                          |
|------------------|---------------------|-----------------------------------------|
| Anthony Gillespie     | jordan@example.com  | [UnknownKonflikt](https://github.com/UnknownKonflikt) |
| Amanda Gipson       | alex@example.com    | [CelestialChai](https://github.com/CelestialChai)     |
| Meyer Cohen     | casey@example.com   | [NeoTriBaal](https://github.com/NeoTriBaal) |
| Larry Hamilton   | taylor@example.com  | [TheOnlyOneOriginalGenius](https://github.com/TheOnlyOneOriginalGenius) |
| Owen Kenne       | okenne.devworks@gmail.com  | [O-KenneDevWorks](https://github.com/O-KenneDevWorks)   |