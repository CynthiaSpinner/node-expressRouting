# Express User & Employee Management API

A full-stack Node.js application built with Express.js that provides RESTful APIs for managing users and employees with a modern, responsive web interface. Features include complete CRUD operations, MySQL database integration, and an intuitive frontend with search and inline editing capabilities.

## ✨ Features

- **Dual Data Management** - Manage both users (mock data) and employees (MySQL database)
- **Full CRUD Operations** - Create, Read, Update, and Delete functionality for both entities
- **Modern Web Interface** - Beautiful, responsive UI with gradient design and smooth animations
- **MySQL Database Integration** - Real database connectivity for employee data persistence
- **Search Functionality** - Real-time search and filtering for employees
- **Inline Editing** - Edit employees directly on their cards without separate forms
- **Modular Routing** - Organized Express routes with separate route files
- **Error Handling** - Comprehensive error handling middleware
- **Static File Serving** - Serves HTML, CSS, and media files
- **Development Tools** - Hot reload with nodemon for faster development

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MySQL Server (for employee data)

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

3. Create a `.env` file in the root directory with your configuration values.

4. Start the MySQL service and ensure your database is set up.

### Running the Application

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your configuration).

## 📖 Usage

### Web Interface

- **Home Page**: `http://localhost:5000/` - API documentation and navigation
- **Users Page**: `http://localhost:5000/users` - Full CRUD interface for users (mock data)
- **Employees Page**: `http://localhost:5000/employees` - Full CRUD interface for employees (MySQL database) with search and inline editing

### API Endpoints

All API endpoints are prefixed with `/api`.

#### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/:id` | Get user by ID |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update a user |
| `DELETE` | `/api/users/:id` | Delete a user |

#### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/employees` | Get all employees |
| `GET` | `/api/employees/:id` | Get employee by ID |
| `POST` | `/api/employees` | Create a new employee |
| `PUT` | `/api/employees/:id` | Update an employee |
| `DELETE` | `/api/employees/:id` | Delete an employee |

## 📁 Project Structure

```
node-expressRouting/
├── config/
│   └── index.js              # Environment configuration loader
├── controllers/
│   └── employees.controller.js  # Employee database controllers
├── db/
│   ├── index.js              # MySQL connection pool
│   └── utils.js              # Database query utility
├── mockdb/
│   └── index.js              # Mock database service for users
├── public/
│   ├── css/
│   │   └── style.css         # Application stylesheet
│   ├── index.html            # Home page
│   ├── users.html            # Users management page
│   └── employees.html        # Employees management page
├── routes/
│   ├── index.js              # Main router
│   ├── users.routes.js       # User CRUD routes
│   └── employees.routes.js   # Employee CRUD routes
├── server.js                 # Express server setup
├── .babelrc                  # Babel configuration
├── package.json
└── README.md
```

## 🛠️ Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MySQL** - Relational database management system
- **Babel** - JavaScript compiler for ES6+ syntax
- **Nodemon** - Development tool for auto-restarting server
- **dotenv** - Environment variable management
- **HTML5/CSS3** - Modern web standards for the frontend

## 🎨 Features in Detail

### Web Interface

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Gradient purple theme with card-based layouts
- **Interactive Elements** - Hover effects, smooth transitions, and animations
- **Color-Coded Methods** - Visual indicators for HTTP methods (GET, POST, PUT, DELETE)
- **Role Badges** - Visual distinction for user roles (admin, member, guest)
- **Real-time Search** - Instant filtering of employees by name or title
- **Inline Editing** - Edit employees directly on their cards without page navigation
- **Dynamic Content** - JavaScript-powered real-time updates

### API Features

- **RESTful Design** - Follows REST principles for clean, predictable endpoints
- **JSON Format** - All requests and responses use JSON
- **Error Handling** - Centralized error middleware for consistent error responses
- **Async Operations** - Uses async/await for database operations
- **Modular Architecture** - Separated route and controller files for better organization
- **Database Integration** - MySQL connection pooling for efficient database access

### Data Management

- **Users** - Managed via in-memory mock database (resets on server restart)
- **Employees** - Managed via MySQL database (persistent storage)
- **Full CRUD** - Complete Create, Read, Update, Delete operations for both entities

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
- Controller pattern for database operations

## 📝 API Documentation Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/test` | Test endpoint |
| `GET` | `/api/users` | Retrieve all users |
| `GET` | `/api/users/:id` | Retrieve a single user by ID |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update an existing user |
| `DELETE` | `/api/users/:id` | Delete a user |
| `GET` | `/api/employees` | Retrieve all employees |
| `GET` | `/api/employees/:id` | Retrieve a single employee by ID |
| `POST` | `/api/employees` | Create a new employee |
| `PUT` | `/api/employees/:id` | Update an existing employee |
| `DELETE` | `/api/employees/:id` | Delete an employee |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License

## 👤 Author

Ben Bryant

---

**Built with ❤️ using Express.js, Node.js, and MySQL**
