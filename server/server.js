const express = require('express');
const cors = require('cors');
const app = express();
const usersRoute = require('./routes/users'); // route file

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRoute); // connect route

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});