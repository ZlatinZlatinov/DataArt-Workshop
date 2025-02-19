# Joke Application

A full-stack application for managing and interacting with jokes using React, Node.js, and MongoDB.

![Project Screenshot](https://github.com/ZlatinZlatinov/DataArt-Workshop/blob/main/images/votingGame.png)

## Technologies Used

### Frontend
- React
- TypeScript
- TailwindCSS
- Vite (for development and building)

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB

### External APIs
- [TeeHee Joke API](https://www.freepublicapis.com/teehee-joke-api) - Used for additional joke content

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/joke-application.git
cd joke-application
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/joke-app
```

## Running the Application

### Start the Backend Server
```bash
cd server
npm start
```

### Start the Frontend Development Server
```bash
cd client
npm run dev
```

### Seed the Database
To populate the database with initial jokes:
```bash
cd server
npm run seed_db
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/joke | Fetch a random joke |
| POST | /api/joke/:id | Submit a vote for a joke |
| DELETE | /api/joke/:id | Delete a specific joke |
| PUT | /api/joke/:id | Update the content of a specific joke |

## Project Structure

```
joke-application/
├── client/                  # Frontend React application
│   ├── public/              # Static files
│   ├── src/                 
│   │   ├── components/      # React components
│   │   ├── services/        # API service functions
│   │   ├── types/           # TypeScript type definitions
│   │   └── App.tsx          # Main application component
│   └── vite.config.ts       # Vite configuration
│
├── server/                  # Backend Node.js application
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── seeds/               # Database seed scripts
│   └── server.js            # Main server file
│
└── README.md                # Project documentation
```

## Features

- Random joke generation
- Vote on jokes
- Add, edit, and delete jokes
- Integration with TeeHee Joke API for extended joke content

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- TeeHee Joke API for providing additional joke content
- All contributors who have helped improve this project
