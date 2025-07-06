# 🚆 IRCTC Train Booking API – WorkIndia Assignment  
**Developed by Janya Jaiswal**

---

## 🧩 Overview

This project is a RESTful API for a train booking system, built as part of the WorkIndia backend assignment. It features user registration, JWT-based authentication, train seat availability checking, booking with race condition handling, and admin functionalities such as adding/updating trains.

---

## ✨ Key Features Implemented

### ✅ 1. User Registration
- Users can register using name, email, and password.
- Passwords are securely hashed using `bcrypt`.

### ✅ 2. JWT-based Authentication
- Users receive a JWT token upon login.
- Protected routes require the token via the `Authorization` header.

### ✅ 3. Seat Availability Search
- Users can check available trains between a source and destination.
- Returns train details along with available seats.

### ✅ 4. Train Seat Booking with Race Condition Handling
- Booking logic ensures atomic seat updates to prevent overbooking.
- Only available seats can be booked.

### ✅ 5. Admin Functionalities
- **Add New Train**: Admins can add trains with total seat count.
- **Update Seat Availability**: Admins can modify seat details.
- Admin-only access via secure `x-api-key` header.

### ✅ 6. Booking History
- Users can fetch all their booking details.

### ✅ 7. Robust Error Handling & Validation
- Graceful handling of invalid inputs, missing data, and edge cases.
- Clear, descriptive error messages returned.

---

## ⚙️ Project Setup

### 🛠 Requirements
- Node.js
- MySQL
- Postman

---

### 🧪 Installation & Configuration

```bash
# Clone the repository
git clone https://github.com/arvindk2025/IRCTC_Backend_WorkIndia.git
cd IRCTC_Backend_WorkIndia
```

#### 📄 Environment Variables

Create a `.env` file in the root directory with:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=irctc_db
JWT_SECRET=your_own_jwt_secret
API_KEY=your_admin_api_key
```

#### 📦 Install Dependencies

```bash
npm install
```

#### 🗄️ Set Up MySQL Database

```sql
CREATE DATABASE irctc_db;
USE irctc_db;

CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(255) NOT NULL,
   role ENUM('user', 'admin') DEFAULT 'user',
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trains (
   id INT AUTO_INCREMENT PRIMARY KEY,
   train_number VARCHAR(50) NOT NULL,
   source VARCHAR(255) NOT NULL,
   destination VARCHAR(255) NOT NULL,
   total_seats INT NOT NULL,
   available_seats INT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
   id INT AUTO_INCREMENT PRIMARY KEY,
   user_id INT,
   train_id INT,
   seats INT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(id),
   FOREIGN KEY (train_id) REFERENCES trains(id)
);
```

---

### ▶️ Run the Server

```bash
npm start
```

API will be available at: **http://localhost:3000**

---

## 🔌 API Endpoints

### 👤 User Routes

#### 1. Register
- `POST /user/register`
```json
{
  "name": "janya_jaiswal",
  "email": "janya@example.com",
  "password": "securePassword123"
}
```

#### 2. Login
- `POST /user/login`
```json
{
  "email": "janya@example.com",
  "password": "securePassword123"
}
```

#### 3. Check Seat Availability
- `GET /user/availability?source=Banglore&destination=Hyderabad`

#### 4. Book Seats _(JWT Required)_
- `POST /user/book`
```json
{
  "trainId": 1,
  "seatsToBook": 2
}
```

#### 5. Get User Bookings _(JWT Required)_
- `GET /user/getAllbookings`

---

### 🔐 Admin Routes _(x-api-key Required)_

#### 6. Add New Train
- `POST /admin/addTrain`
```json
{
  "trainNumber": "12345",
  "source": "Banglore",
  "destination": "Hyderabad",
  "totalSeats": 400
}
```

Use header:
```http
x-api-key: your_admin_api_key
```

#### 7. Update Train Seats
- `PUT /admin/update-seats/:trainId`
```json
{
  "totalSeats": 200,
  "availableSeats": 150
}
```

Use header:
```http
x-api-key: your_admin_api_key
```

---

## 🛠️ Tech Stack

| Technology  | Usage                    |
|-------------|--------------------------|
| Node.js     | Backend runtime          |
| Express.js  | Web framework            |
| MySQL       | Relational database      |
| JWT         | Secure authentication    |
| bcrypt      | Password hashing         |
| dotenv      | Manage environment vars  |
| Postman     | API testing              |


---

## 👩‍💻 Author

**Janya Jaiswal**  