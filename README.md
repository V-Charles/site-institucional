# Agency Management System

## Description

**Objective:** An institutional portal integrated with an administrative dashboard for team management.  

**Problem Solved:** Centralizes the agency's commercial presentation and employee management into a single web platform, eliminating the need for separate systems for marketing and HR.  

**Project Context:** Full-Stack academic project developed for a Senac course. The system combines a modern Angular interface with a custom REST API built in PHP and hosted in the cloud.

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-%230081CB.svg?style=for-the-badge&logo=angular&logoColor=white)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Preview

<img width="800" height="450" alt="Image" src="https://github.com/user-attachments/assets/a930187a-28b1-4c28-8f27-94114fb51dfc" />

---

## About the Project

The Agency Management System is a Single Page Application (SPA) divided into two main areas. The public area works as the agency's showcase, presenting services, company history, and organizational values through a clean and responsive design. The restricted area contains a management dashboard focused on internal operations, allowing administrators to create, read, update, and delete (CRUD) employee records quickly and securely.

---

## Features

- Display of service portfolio and institutional information
- Real-time employee listing
- Employee registration system
- Editing and updating positions and departments
- Deletion of employee records from the database

---

## Deploy

The project is hosted and running in the cloud through InfinityFree.  

**Access the application:**  
[Agency Institucional - Senac](https://agencia-institucional-senac.infinityfreeapp.com/home)

---

## How to Run

### Prerequisites

- Node.js and NPM (for Angular)
- Angular CLI installed globally
- XAMPP or WAMP (to run Apache and MySQL locally)

---

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/agency-management-system.git
cd agency-management-system
```

---

### Installation (Front-end)

```bash
# Install Angular dependencies
npm install
```

---

### Configuration and Execution (Back-end and Front-end)

1. Start Apache and MySQL in your XAMPP control panel.
2. Copy the `/api` folder from the repository into your XAMPP `htdocs` directory.
3. Configure the environment variables file as explained in the section below.
4. Access the following URL in your browser to automatically generate the database:

```bash
http://localhost/api/setup.php
```

5. Start the Angular development server:

```bash
ng serve
```

The system will be available at:

```bash
http://localhost:4200
```

---

## Environment Variables

For security reasons, database credentials are isolated in a non-versioned file.  
To run the project locally or on your own server, create a file named `config.php` inside the `/api` folder with the following structure:

```php
<?php
// api/config.php

$host = "localhost"; // or your hosting provider host
$port = "3306"; // MySQL port
$db_name = "agency_db"; // database name
$user = "root"; // database user
$pass = ""; // database password
?>
```

---

## API Endpoints

Communication between Angular and the PHP back-end is handled through the main `index.php` endpoint, which identifies the action based on the HTTP verb used.

| HTTP Method | Route (Endpoint) | Description |
|---|---|---|
| GET | `/api/index.php` | Returns the list of all employees |
| POST | `/api/index.php` | Registers a new employee |
| PUT | `/api/index.php` | Updates an existing employee |
| DELETE | `/api/index.php?id={id}` | Deletes an employee based on the provided ID |

---

## Author

Developed by [Vinicius Charles Macedo Dias](https://www.linkedin.com/in/vinicius-charles/)
