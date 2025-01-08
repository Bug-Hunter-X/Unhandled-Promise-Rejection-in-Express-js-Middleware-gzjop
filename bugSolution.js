const express = require('express');
const app = express();
app.get('/', async (req, res, next) => {
  try {
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (error) {
    next(error); // Pass error to the error handler
  }
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 100));
  throw new Error('Something went wrong!');
} 