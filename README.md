# Backend for Online Grocery Applicaion (Microservice Architecture)

This is a backend project for an online grocery shopping application designed using microservice architecture. The application consists of three main microservices: Customer, Products, and Shopping, with secure authentication, and seamless inter-service communication through RabbitMQ. 

The Entire Application is containerized by levaraging Docker and Deployed on AWS.

---

Also checkout the Simpler Monolithic Version of the same Project

[Monolithic Architecture](https://github.com/Deval1807/Online-Grocery-Monolithic)

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getiing Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
4. [Usage](#usage)
5. [API Documentation](#api-documentation)
6. [Configuration](#configuration)
7. [Build](#build)
8. [Deployment](#deployment)
9. [Contribution](#contribution)
10. [Contact](#contact)


## Features

### General Features of Application

- Microservices for Customer, Products, and Shopping
- Secure authentication mechanisms
- Seamless communication between services using RabbitMQ
- Nginx for efficient reverse proxy
- Docker for containerization
- Deployment on AWS

### Features of Individual services:

- Customer
    - Signup/Login
    - Add Address
    - View Profile, Orders and Wishlist

- Products
    - Add/View Products
    - View Products by Id/Category
    - Add to Cart/Wishlist
    - Delete form Cart/Wishlist

- Shopping
    - View Cart
    - Place/View Order


## Techonologies Useds

- **Backend Environment and Framework:** Node-Express
- **Message Broker:** RabbitMQ
- **Reverse Proxy:** Nginx
- **Containerization:** Docker
- **Cloud Deployment:** AWS (Beanstalk)
- **Database:** MongoDB


## Getting Started


## Usage


## Api Documentation

For Detailed API Documentation, visit:

- [API Documentation](https://documenter.getpostman.com/view/33324941/2sA3XWdJot)


## Configuration


## Build


## Deployment

- The [Deployed URL](http://online-gocery.ap-south-1.elasticbeanstalk.com)


## Contribution

We welcome contributions from the community. To contribute, please fork the repository, create a new branch, and submit a pull request. Make sure to follow the coding standards and ethical practices. 


## Contact

For questions or support, please contact Deval Darji by following ways:

1. LinkedIn: [Deval Darji](https://www.linkedin.com/in/deval-darji-a15002226/)

2. Email: [deval135darji@gmail.com](mailto:deval135darji@gmail.com)