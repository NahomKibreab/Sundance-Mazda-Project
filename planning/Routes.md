### Routes

#### Users
- GET /users                - Browse users
- GET /users/:user_id       - Read specific user
- POST /users               - Create new user
- PUT /users/:user_id       - Edit a specific user
- DELETE /users/:user_id/   - Delete a user

#### Inventory
- GET /cars                 - Browse cars
- GET /cars/:car_id         - Read specific car

#### Garage
- GET /garage/:user_id      - Browse specific users garage
- POST /garage/:user_id/    - Add a car to a users garage
- DELETE /garage/:user_id/  - Delete a specific order

#### Login
- GET /login                - Browse login page
- POST /login               - Login a user

### Checkout

- GET /checkout/:car_id     - Purchase a specific car

#### Home 
- GET /                     - Home page