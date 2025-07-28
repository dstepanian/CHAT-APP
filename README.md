# Chat Application

A full-stack real-time chat application built with React, Node.js, Express, and MongoDB. Features user authentication, messaging, and profile management with a modern, responsive UI.

## 🚀 Features

- **User Authentication**: Secure signup, login, and logout functionality
- **Real-time Messaging**: Send and receive messages instantly
- **Profile Management**: Update user profiles with profile pictures
- **Image Sharing**: Upload and share images in chat conversations
- **Responsive Design**: Modern UI built with Tailwind CSS and DaisyUI
- **Protected Routes**: Middleware-based route protection
- **Cloud Storage**: Image upload with Cloudinary integration

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS components
- **Zustand** - State management
- **Axios** - HTTP client
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage and management
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── lib/           # Utility functions
│   │   └── index.js       # Server entry point
│   ├── .gitignore
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── store/        # State management
│   │   ├── lib/          # Utilities
│   │   └── main.jsx      # App entry point
│   ├── public/
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account for image storage

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database
MONGO_URI=mongodb://localhost:27017/chat-app

# JWT
JWT_SECRET_KEY=your-super-secret-jwt-key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Server
PORT=5000
NODE_ENV=development
```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📚 API Endpoints

### Authentication Routes
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `PUT /auth/update-profile` - Update user profile (protected)
- `GET /auth/check` - Check authentication status (protected)

### Message Routes
- `GET /users` - Get all users for sidebar (protected)
- `GET /:id` - Get messages with specific user (protected)
- `POST /send/:id` - Send message to user (protected)

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- Tokens are stored in HTTP-only cookies for security
- Protected routes use middleware to verify tokens
- Passwords are hashed using bcryptjs

## 📱 Frontend Features

### Pages
- **Home Page**: Main chat interface
- **Login Page**: User authentication
- **Sign Up Page**: New user registration
- **Profile Page**: User profile management
- **Settings Page**: Application settings

### State Management
- Uses Zustand for lightweight state management
- Centralized auth store for user authentication state
- Persistent authentication across page reloads

### Styling
- Tailwind CSS for utility-first styling
- DaisyUI for pre-built components
- Responsive design for mobile and desktop

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Linting
```bash
cd frontend
npm run lint
```

### Building for Production
```bash
cd frontend
npm run build
```

## 🚀 Deployment

### Backend Deployment
1. Set environment variables on your hosting platform
2. Ensure MongoDB connection string is configured
3. Set `NODE_ENV=production`
4. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to platforms like Netlify, Vercel, or GitHub Pages
3. Update API base URL in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- Real-time messaging with Socket.io is not yet implemented (marked as TODO)
- Image upload in message sending needs bug fixes
- Profile picture update has some inconsistencies

## 🔮 Future Enhancements

- [ ] Real-time messaging with Socket.io
- [ ] Message status indicators (sent, delivered, read)
- [ ] Group chat functionality
- [ ] Message search and filtering
- [ ] Push notifications
- [ ] Dark/Light theme toggle
- [ ] Message encryption
- [ ] File sharing (documents, videos)
- [ ] Voice messages
- [ ] Video calling

## 📞 Support

For support, email [david.stepanian@outlook.com] or create an issue in the GitHub repository.

---

Built with ❤️ using React and Node.js