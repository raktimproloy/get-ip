const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Get the IP address of the user from the request object
  const ipAddress = req.ip || req.connection.remoteAddress;
  console.log('User IP Address:', ipAddress);
  
  // Pass the IP address to the next middleware or route handler
  req.userIP = ipAddress;

  next();
});

// Your routes and other middleware go here...

app.get('/', (req, res) => {
    // Access the user's IP address from the req object
    const userIP = req.userIP;
    res.send(`User IP Address: ${userIP}`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
