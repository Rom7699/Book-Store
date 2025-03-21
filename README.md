# Book Store Application

A modern web application for managing and browsing a collection of books. This full-stack application allows users to create, read, update, and delete books in a visually appealing interface.

## Features

* **Book Management**: Create, view, update, and delete books
* **Responsive Design**: Works on desktop and mobile devices
* **Real-time UI Updates**: State management ensures UI updates without page refreshes
* **User-friendly Notifications**: Toast notifications for operation status

## Technologies Used

### Frontend
* **React**: JavaScript library for building user interfaces
* **Zustand**: Lightweight state management solution
* **Chakra UI**: Component library for creating accessible and responsive UI
* **React Router**: For navigation and routing
* **Vite**: Fast build tool and development server

### Backend
* **Express.js**: Web application framework for Node.js
* **Express Router**: For organizing API routes and endpoints
* **RESTful API**: Backend service with CRUD operations for books
* **JSON**: Data exchange format

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Book-Store.git
cd Book-Store
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Start the development servers:
```bash
# Start backend server (in backend directory)
npm start

# Start frontend development server (in frontend directory)
npm run dev
```

4. The application should now be running:
   * Frontend: http://localhost:5174
   * Backend: http://localhost:5000 (adjust if your port is different)

## Usage

* **View Books**: Navigate to the home page to see all available books
* **Add a Book**: Click "Create a product" to add a new book
* **Update a Book**: Click the edit icon on a book card to update book details
* **Delete a Book**: Click the delete icon on a book card to remove the book

## Project Structure

```
Book-Store/
├── frontend/                # React frontend application
│   ├── public/              # Static files
│   │   ├── index.html       # HTML entry point
│   │   └── assets/          # Images, fonts, etc.
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable UI components
│   │   │   ├── BookCard.jsx # Component for displaying a book
│   │   │   └── ...          # Other components
│   │   ├── pages/           # Application pages
│   │   │   ├── HomePage.jsx # Home page showing all books
│   │   │   ├── CreatePage.jsx # Page for creating new books
│   │   │   └── ...          # Other pages
│   │   ├── store/           # State management
│   │   │   └── book.js      # Zustand store for book operations
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Entry point for React
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── ...                  # Other config files
│
├── backend/                 # Node.js backend application
│   ├── controllers/         # Request handlers
│   │   └── bookController.js # Book CRUD operations
│   ├── models/              # Data models
│   │   └── Book.js          # Book model schema
│   ├── routes/              # API routes
│   │   └── bookRoutes.js    # Book API endpoints
│   ├── config/              # Configuration files
│   │   └── db.js            # Database connection
│   ├── server.js            # Entry point for the server
│   ├── package.json         # Backend dependencies
│   └── ...                  # Other files
│
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
└── package.json             # Root package.json (if any)
```

## Future Enhancements

* User authentication and authorization
* Advanced search and filtering capabilities
* Book categories and tags
* User reviews and ratings
* Shopping cart functionality

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request
