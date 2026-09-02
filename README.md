# Reflex Delivery System

A delivery coordination system designed to help small electronics and accessories retailers manage deliveries without relying on scattered WhatsApp messages and phone calls.

## Overview

Reflex provides a structured way for retailers, dispatchers, and riders to coordinate deliveries and track their progress from request to confirmation.

The system is designed around a simple delivery workflow:

**Requested → Assigned → Picked Up → Delivered → Confirmed**

Each delivery maintains a history of status changes, making it easier to track what happened and when.

## Problem

Small retailers often coordinate customer deliveries through WhatsApp, phone calls, and informal communication.

This can lead to:

* Lost delivery information
* Poor visibility of delivery status
* Difficulty tracking assigned riders
* Lack of delivery history
* Communication gaps between retailers, dispatchers, and riders

Reflex aims to provide a centralized system for managing these delivery operations.

## Key Features

* Create and manage delivery requests
* Assign deliveries to riders
* Track delivery status
* Maintain delivery status history
* Separate user roles for retailers, dispatchers, and riders
* Store customer and delivery information
* REST API for interacting with the delivery system
* PostgreSQL database for persistent data storage

## User Roles

### Retailer

Retailers can initiate delivery requests and monitor their deliveries.

### Dispatcher

Dispatchers coordinate deliveries and assign available riders.

### Rider

Riders handle assigned deliveries and update delivery progress.

## Technology Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | Backend runtime                 |
| Express.js | REST API framework              |
| PostgreSQL | Database                        |
| Prisma     | Database ORM                    |
| JavaScript | Backend programming language    |
| CORS       | Cross-origin request handling   |
| dotenv     | Environment variable management |
| Nodemon    | Development server utility      |

## Project Structure

```text
reflex-delivery-system/
│
├── prisma/
│   └── schema.prisma
│
├── routes/
│   └── deliveryRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Database Models

The Prisma database schema contains three main models:

### User

Stores system users and their roles.

Supported roles:

* `RETAILER`
* `DISPATCHER`
* `RIDER`

### Delivery

Stores delivery information including:

* Retailer
* Assigned rider
* Customer name
* Customer phone
* Delivery address
* Item description
* Delivery status
* Creation date

### DeliveryLog

Records delivery status changes, including:

* Previous status
* New status
* User who made the change
* Timestamp

This provides an audit trail for delivery activity.

## Delivery Status Flow

```text
REQUESTED
    ↓
ASSIGNED
    ↓
PICKED_UP
    ↓
DELIVERED
    ↓
CONFIRMED
```

## API

The backend exposes API routes under:

```text
/api/v1
```

The root endpoint can be used to confirm that the server is running:

```text
GET /
```

Expected response:

```text
Reflex Delivery API Server Running
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Joy-Kavata/reflex-delivery-system.git
cd reflex-delivery-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="your_postgresql_database_url"
PORT=5000
```

Replace the database URL with your PostgreSQL connection string.

### 4. Set up Prisma

Generate the Prisma client:

```bash
npx prisma generate
```

Run the database migration when migrations are configured:

```bash
npx prisma migrate dev
```

### 5. Start the server

```bash
node server.js
```

The API will run on:

```text
http://localhost:5000
```

## Development

For development with automatic server restarts, use Nodemon:

```bash
npx nodemon server.js
```

## Example

Once the server is running, visit:

```text
http://localhost:5000
```

You should receive:

```text
Reflex Delivery API Server Running
```

## Project Goals

The Reflex Delivery System focuses on:

* Simplifying delivery coordination
* Improving delivery visibility
* Reducing reliance on informal communication
* Creating a reliable delivery history
* Making delivery operations easier to manage for small retailers

## Future Improvements

Potential future improvements include:

* Authentication and authorization
* Retailer, dispatcher, and rider dashboards
* Real-time delivery tracking
* Rider availability management
* Customer notifications
* Delivery analytics
* Search and filtering
* Automated status notifications
* Production database deployment
* Frontend web/mobile interface

## Project Status

**Development / MVP**

This project is being developed as a lightweight delivery coordination system for small electronics and accessories retailers.

## Repository

[Reflex Delivery System](https://github.com/Joy-Kavata/reflex-delivery-system)
