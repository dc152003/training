<h1>Shopping App — MEAN Stack Project</h1>
This is a full-stack shopping application built using the MEAN stack:
- MongoDB for the database
- Express.js and Node.js for the backend
- Angular for the frontend
The app allows users to view a list of products and perform full CRUD operations (Create, Read, Update, Delete).

<hr>

**Project Structure**

             
        MEAN project/  
          ├── shoppingdb/       # Backend server and database setup    
          └── shoppingapp/      # Angular frontend application






**Getting Started**

Follow these steps to clone and run the project locally:
1. Clone the Repository
   
       git clone https://github.com/dc152003/project2.git

   
3. Open the project in VS Code:
   
        code .

<hr>


**Running the Application**

Open two terminals in VS Code from the same project directory.

<h3>Terminal 1 — Backend Setup</h3>    
          
        cd "MEAN project/shoppingdb"
        node server.js
<br><br>

⚠️ Ensure MongoDB is running and a database named shopping exists.


To verify the database:
        
        use shopping
        db.productlist.find()


Example data:

        [
          {
            "_id": ObjectId("68a6f16b1e4e6e9ca5eec4aa"),
            "id": 101,
            "pName": "shirt",
            "pPrice": 300,
            "pBrand": "pantaloons",
            "pIsInStock": true
          },
          {
            "_id": 1,
            "pName": "picture frame",
            "pPrice": 100,
            "pBrand": "wood",
            "pIsInStock": true
          }
        ]



<h3>Terminal 2 — Frontend Setup</h3>
        
        cd "MEAN project/shoppingapp"
        npm install
        ng serve

Open the app in your browser:
<b>http://localhost:4200/</b>

<hr>

**Features**
- View product list from MongoDB
- Add new products
- Edit existing products
- Delete products
- Real-time updates via Angular frontend
<hr>

**Notes**
- Ensure MongoDB is installed and running locally.
- The backend server listens for requests and connects to the shopping database.
- The frontend communicates with the backend via RESTful APIs.
