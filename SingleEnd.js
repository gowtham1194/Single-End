const express = require('express');
const app = express();


const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

// Define the /users endpoint
app.get('/users', (req, res) => {
  res.status(200).json(users); 
});



const port = 9000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
