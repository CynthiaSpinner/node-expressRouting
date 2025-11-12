# Express User Management API

A full-stack Node.js application built with Express.js that provides a RESTful API for user management with a modern, responsive web interface. This project demonstrates Express routing, CRUD operations, and serves both API endpoints and static web pages.

## 🎥 Demo Video

Watch the application in action:

<video width="100%" controls style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 20px 0;">
  <source src="./public/videos/Recording 2025-11-12 142844.mp4" type="video/mp4">
  Your browser does not support the video tag. 
  [Download the video](./public/videos/Recording%202025-11-12%20142844.mp4) to view it.
</video>

## ✨ Features

- **RESTful API** - Complete CRUD operations for user management
- **Modern Web Interface** - Beautiful, responsive UI with gradient design and smooth animations
- **Modular Routing** - Organized Express routes with separate route files
- **Mock Database** - In-memory data storage for development and testing
- **ES6 Modules** - Modern JavaScript syntax with Babel transpilation
- **Error Handling** - Centralized error handling middleware
- **Static File Serving** - Serves HTML, CSS, and media files
- **Development Tools** - Hot reload with nodemon for faster development

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd node-expressRouting
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_SCHEMA=your_database
```

### Running the Application

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## 📖 Usage

### Web Interface

- **Home Page**: `http://localhost:5000/` - API documentation and navigation
- **Users Page**: `http://localhost:5000/users` - Visual display of all users in a card-based layout

### API Endpoints

All API endpoints are prefixed with `/api`.

#### Get All Users
```http
GET /api/users
```

**Response:**
```json
[
  {
    "id": 1,
    "firstName": "Frodo",
    "lastName": "Baggins",
    "role": "admin",
    "_created": "Wed Nov 12 2025 14:28:44 GMT-0500"
  },
  ...
]
```

#### Get User by ID
```http
GET /api/users/:id
```

**Example:**
```http
GET /api/users/1
```

#### Create User
```http
POST /api/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "role": "member"
}
```

**Response:**
```json
{
  "insertedRow": {
    "id": 5,
    "firstName": "John",
    "lastName": "Doe",
    "role": "member",
    "_created": "Wed Nov 12 2025 14:28:44 GMT-0500"
  },
  "success": true
}
```

#### Update User
```http
PUT /api/users/:id
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Doe",
  "role": "admin"
}
```

**Example:**
```http
PUT /api/users/1
```

#### Delete User
```http
DELETE /api/users/:id
```

**Example:**
```http
DELETE /api/users/1
```

**Response:**
```json
{
  "removedRowId": 1,
  "success": true
}
```

## 📁 Project Structure

```
node-expressRouting/
├── config/
│   └── index.js              # Environment configuration loader
├── mockdb/
│   └── index.js              # Mock database service with CRUD methods
├── public/
│   ├── css/
│   │   └── style.css         # Application stylesheet
│   ├── videos/
│   │   └── Recording 2025-11-12 142844.mp4
│   ├── index.html            # Home page
│   └── users.html            # Users display page
├── routes/
│   ├── index.js              # Main router (mounts user routes)
│   └── users.routes.js       # User CRUD routes
├── server.js                 # Express server setup and configuration
├── .babelrc                  # Babel configuration
├── .env                      # Environment variables (create from .env.template)
├── .env.template             # Environment variables template
├── package.json
└── README.md
```

## 🛠️ Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Babel** - JavaScript compiler for ES6+ syntax
- **Nodemon** - Development tool for auto-restarting server
- **dotenv** - Environment variable management
- **HTML5/CSS3** - Modern web standards for the frontend

## ⚙️ Configuration

### Environment Variables

The application uses the following environment variables (defined in `.env`):

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | `5000` |
| `DB_HOST` | Database host address | `localhost` |
| `DB_USER` | Database username | `root` |
| `DB_PASS` | Database password | - |
| `DB_SCHEMA` | Database schema name | - |

### Mock Database

The `mockdb` service provides an in-memory database with the following methods:

- `getAll()` - Returns all users as an array
- `getOne(id)` - Returns a single user by ID (returns `null` if not found)
- `add(newUser)` - Adds a new user and returns the inserted user with success status
- `update(id, updatedUser)` - Updates an existing user and returns the updated user
- `remove(id)` - Removes a user by ID and returns success status

**User Object Structure:**
```javascript
{
  id: Number,
  firstName: String,
  lastName: String,
  role: String, // 'admin', 'member', or 'guest'
  _created: String // ISO date string
}
```

## 🎨 Features in Detail

### Web Interface

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Gradient purple theme with card-based layouts
- **Interactive Elements** - Hover effects, smooth transitions, and animations
- **Color-Coded Methods** - Visual indicators for HTTP methods (GET, POST, PUT, DELETE)
- **Role Badges** - Visual distinction for user roles (admin, member, guest)
- **Real-time Updates** - JavaScript-powered dynamic content loading

### API Features

- **RESTful Design** - Follows REST principles for clean, predictable endpoints
- **JSON Format** - All requests and responses use JSON
- **Error Handling** - Centralized error middleware for consistent error responses
- **Async Operations** - Uses async/await for database operations
- **Modular Architecture** - Separated route files for better organization

## 🔧 Development

### Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm test` - Run tests (currently not configured)

### Code Style

- ES6+ JavaScript syntax
- ES6 modules (import/export)
- Async/await for asynchronous operations
- Express Router for route organization

## 📝 API Documentation Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/test` | Test endpoint |
| `GET` | `/api/users` | Retrieve all users |
| `GET` | `/api/users/:id` | Retrieve a single user by ID |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update an existing user |
| `DELETE` | `/api/users/:id` | Delete a user |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License

## 👤 Author

Ben Bryant

---

**Built with ❤️ using Express.js and Node.js**
