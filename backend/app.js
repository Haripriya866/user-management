const express = require("express");
const cors = require("cors");
const axios = require('axios');

// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

app.options("*", cors()); // Enable CORS for all routes

const port = 5000;

// const path = require("path");


app.get('/users', async (request, response) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      response.json(response.data);  // Send posts to the frontend
    } catch (error) {
      response.status(500).json({ message: 'Error fetching data' });
    }
  });

  app.put('/users/:id', async (request, response) => {
    try {
      const { id } = request.params; 
      const updatedUser = request.body; 
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser);
      response.json(response.data); // Return updated user data
    } catch (error) {
      response.status(500).json({ message: 'Error updating user' });
    }
  });

//   app.put('/users/:id', async (request, response) => {
//     const { id } = request.params; // Extract the user ID
//     const updatedUser = request.body; // Get updated user details from the request body
  
//     try {
//       // Make a PUT request to JSONPlaceholder
//       const result = await axios.put(
//         `https://jsonplaceholder.typicode.com/users/${id}`,
//         updatedUser
//       );
  
//       // Return the response from JSONPlaceholder to the client
//       return response.status(200).json(result.data);
//     } catch (error) {
//       console.error('Error updating user:', error.message);
//       return response
//         .status(500)
//         .json({ message: 'Failed to update user.', error: error.message });
//     }
//   });
  

  

  app.delete('/users/:id', async (request, response) => {
    const { id } = request.params;
    try {

      const deletedUser = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      // Send a response with the deleted user data or a success message
      response.json({ message: 'User deleted successfully', data: deletedUser.data });
    } catch (err) {
      response.status(500).json({ message: 'Error deleting user', error: err });
    }
  });

  app.post("/users", async(request, response) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        response.json(response.data);  // Send posts to the frontend
      } catch (error) {
        response.status(500).json({ message: 'Error adding data' });
      }
  });





//PUT API
// app.put("https://jsonplaceholder.typicode.com/users/",(request,response)=>{

// })




app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });