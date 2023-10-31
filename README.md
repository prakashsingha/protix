<p align="center">
  <img src="01-primary-blue-docker-logo.svg" />
</p>

## Multi-Service Application with Docker Compose

This project sets up a multi-service application using Docker Compose. It includes three services:

1. **Frontend**: A React.js web application.
2. **Backend**: A Nest.js API server.
3. **Database**: A MySQL database.
4. **phpMyAdmin**: A tool to handle the administration of database server

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

1. **Clone the repository**

```bash
$   git clone https://github.com/prakashsingha/protix

$   cd protix
```

2. **Installation & running the app**

```bash
$ docker-compose up
```

## Access the application

- Frontend: Open your web browser and navigate to http://localhost:3001.
- Backend: The backend API is accessible at http://localhost:3000. API doc can be accessed at http://localhost:3000/api.
- Database: MySQL is running on port 3306.
- phpMyAdmin can be accessed at http://localhost:8080/index.php?route=/database/structure&db=protix

## Environment Variables

- For simplicity, all environment variables are already set in docker-compose.yml.
