# Node.js Backend for Menu Management

## Overview
This project is a Node.js backend server for menu management. The menu is structured as follows:
1. **Category**
2. **Sub-Category** (A category can have multiple sub-categories)
3. **Items** (A sub-category can have multiple items)

The API allows for creating, retrieving, updating, and searching for categories, sub-categories, and items.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** 
- **Postman** (for API testing)

## Setup Requirements
Ensure you have the following installed:
- Node.js 
- Postman (for API testing)
- MongoDB (local or cloud-based like MongoDB Atlas)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Guestara-Internship-Assignment-NodeJs-Backend.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   modify `.env` file in the root directory :
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server should be running on `http://localhost:5000`

## API Endpoints
### Category Endpoints
- **Create a Category**: `POST /api/categories`
- **Get all Categories**: `GET /api/categories`
- **Get a Category by ID/Name**: `GET /api/categories/:id`
- **Edit a Category**: `PUT /api/categories/:id`

### Sub-Category Endpoints
- **Create a Sub-Category**: `POST /api/categories/:categoryId/subcategories`
- **Get all Sub-Categories**: `GET /api/subcategories`
- **Get Sub-Categories under a Category**: `GET /api/categories/:categoryId/subcategories`
- **Get a Sub-Category by ID/Name**: `GET /api/subcategories/:id`
- **Edit a Sub-Category**: `PUT /api/subcategories/:id`

### Item Endpoints
- **Create an Item**: `POST /api/subcategories/:subCategoryId/items`
- **Get all Items**: `GET /api/items`
- **Get Items under a Category**: `GET /api/categories/:categoryId/items`
- **Get Items under a Sub-Category**: `GET /api/subcategories/:subCategoryId/items`
- **Get an Item by ID/Name**: `GET /api/items/:id`
- **Edit an Item**: `PUT /api/items/:id`

### Search Endpoint
- **Search for an Item by Name**: `GET /api/items/search?name={item_name}`

## Project Structure
```
nodejs-menu-management/
├── models/            # Mongoose models
├── routes/            # Express routes
├── controllers/       # Route handlers
├── middleware/        # Custom middleware
├── config/            # Database connection
├── .env               # Environment variables
├── server.js          # Entry point
└── README.md          # Documentation
```

## Additional Requirements
- **Inline comments** for better code understanding
- **Loom Video**: A short video demonstrating API operations
- **GitHub Repository**: Public repo link for submission

## Short Answers
### 1. Which database did you choose and why?
I chose **MongoDB** because it is a NoSQL database that provides flexibility in storing hierarchical data structures like categories, subcategories, and items. It allows easy scalability and fast query performance for this type of menu management system.

### 2. Three things I learned from this assignment:
- Handling MongoDB ObjectId references properly (e.g., ensuring subcategories reference valid category IDs).
- How to structure a database schema efficiently to maintain relationships between categories, subcategories, and items.
- The importance of data structuring to ensure smooth linking between categories, subcategories, and items.

### 3. Most difficult part of the assignment:
Nothing was particularly difficult, but ensuring proper schema relationships (e.g., referencing category in subcategory and subcategory in item) required attention to avoid ObjectId casting errors.

### 4. What would I have done differently with more time?
Include authentication & role-based access control (RBAC) to restrict who can modify menu items.


