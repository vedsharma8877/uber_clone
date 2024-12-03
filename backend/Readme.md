# Backend API Documentation

## Endpoint: `/users/register`

### Description:
This endpoint is used to register a new user by providing the necessary details. The data includes the user's full name, email address, and password. If the registration is successful, the server will respond with a JSON object containing a generated authentication token and the user's data.

### Request Method:
- `POST`

### Request Body:

The request body must be a JSON object with the following fields:

- `fullname` (object):
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. This is an optional field but must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and unique across the system.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Example Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Example Response:

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): The first name of the user. Must be at least 3 characters long.
        - `lastname` (string): The last name of the user. This is an optional field but must be at least 3 characters long if provided.
    - `email` (string): The email address of the user. Must be a valid email format and unique across the system.
    - `password` (string): The password for the user. Must be at least 6 characters long.
- `token` (string): JWT Token