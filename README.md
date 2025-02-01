# Menu Management Backend

This is a Node.js backend server for managing a menu with categories, sub-categories, and items.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/menu-management.git
   cd menu-management




Answer to the following questions

Q: Which database have you chosen and why?

ans: MongoDB because it is a NoSQL database that provides flexibility in storing hierarchical data structures like categories, subcategories, and items. It allows easy scalability and fast query performance for this type of menu management system.

Q: Three things you learned from this assignment?

ans:
- Handling MongoDB ObjectId references properly (e.g., ensuring subcategories reference valid category IDs).
- How to structure a database schema efficiently to maintain relationships between categories, subcategories, and items.
- The importance of data structuring to ensure smooth linking between categories, subcategories, and items.

Q: What was the most difficult part of the assignment?

ans: Nothing was particularly difficult, but ensuring proper schema relationships (e.g., referencing category in subcategory and subcategory in item) required attention to avoid ObjectId casting errors.

Q: What would you have done differently given more time?

ans: Include authentication & role-based access control (RBAC) to restrict who can modify menu items.