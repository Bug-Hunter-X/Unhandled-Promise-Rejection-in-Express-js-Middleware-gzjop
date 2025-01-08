# Unhandled Promise Rejection in Express.js Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware.  The application lacks proper error handling, causing it to crash silently without providing helpful error messages.

## Bug

The `bug.js` file contains an Express.js application with an asynchronous middleware function that throws an error.  The application lacks a `catch` block to handle this error, leading to a crash.

## Solution

The `bugSolution.js` file shows how to fix this issue by implementing proper error handling. The solution uses a `try...catch` block to handle potential errors within the asynchronous operation and a centralized error handler using `app.use()` to handle errors that propagate through the middleware chain.