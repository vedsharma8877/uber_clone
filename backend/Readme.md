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

## Endpoint: `/users/login`

### Description:
This endpoint allows an existing user to log in by providing their email address and password. Upon successful authentication, the server will respond with a JSON Web Token (JWT) and the user's data. If the login attempt fails due to incorrect credentials, an appropriate error message is returned.

### Request Method:
- `POST`

### Request Body:

The request body must be a JSON object with the following fields:

- `email` (string): The email address of the user. It must be a valid email format.
- `password` (string): The password of the user.

#### Example Request Body:

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```


### Endpoint: `/users/profile`

#### Description:
This endpoint retrieves the authenticated user's profile information. The user must be authenticated to access this endpoint.

### Request Method:
- `GET`

### Headers:
- `Authorization`: `Bearer <jwt_token>` (required)

#### Example Request:
```http
GET /users/profile HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

### Example Response:

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): The first name of the user. Must be at least 3 characters long.
        - `lastname` (string): The last name of the user. This is an optional field but must be at least 3 characters long if provided.
    - `email` (string): The email address of the user. Must be a valid email format and unique across the system.


### Endpoint: `/users/logout`

#### Description:
This endpoint logs out the authenticated user by invalidating the current token and clearing the cookies containing the token.

### Request Method:
- `GET`

### Headers:
- `Authorization`: `Bearer <jwt_token>` (required)

#### Example Request:
```http
GET /users/logout HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

### Endpoint: `/captains/register`

#### Description:
This endpoint registers a new captain by collecting their personal and vehicle information. It performs validation to ensure all fields are correctly filled.

### Request Method:
- `POST`

### Request Body:
The request body must be a JSON object with the following fields:

#### Personal Information:
- `email` (string, required): The email address of the captain. Must be in a valid email format.
- `fullname` (object, required):
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain.
- `password` (string, required): The captain's password. Must be at least 6 characters long.

#### Vehicle Information:
- `vehicle` (object, required):
  - `color` (string, required): The vehicle's color. Must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. Must be at least 3 characters long.
  - `capacity` (integer, required): The vehicle's seating capacity. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of the following values: `car`, `motorcycle`, `auto`.

#### Example Request Body:
```json
{
  "email": "john.captain@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword123",
  "vehicle": {
    "color": "Red",
    "plate": "AB123CD",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response:

- `captain` (object):
    - `fullname` (object):
        - `firstname` (string): The first name of the captain.
        - `lastname` (string): The last name of the captain.
    - `email` (string): The email address of the captain.
    - `password` (string): The password for the captain.
    - `vehicle` (object):
        - `color` (string): Vehicle color.
        - `capacity` (number): Vehicle capacity.
        - `vehicleType` (string): Vehicle type.
        - `plate` (string): Vehicle number plate.
- `token` (string): JWT Token