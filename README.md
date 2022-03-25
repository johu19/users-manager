# users-manager

This project is an API developed in Node.js with Express.
The API provides the following services:
  - Register user
  - Login
  - Logout
  - Look for recipes (logged user only)
  - Get all queries

Theres a series of improvements that can be done to improve the API. For example, better middleware usage for security, error handling, etc..

In the future it would be nice to use an actual database to store information.

# Important note
This project is integrated with the spoontacular API, directly for the put query endpoint.
A recipe name is passed and multiple recipes are fetched from the spoontacular API.
