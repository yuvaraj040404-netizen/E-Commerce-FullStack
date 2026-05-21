# E-Commerce Inventory Management System

This is a simple full-stack web application used to track product inventory. It allows users to view a list of items in stock, add new products, and see alerts when stock levels fall below a specific threshold.

## Tech Stack
* **Backend:** Java, Spring Boot, Spring Data JPA
* **Frontend:** Angular 21
* **Database:** MySQL

## Features
* View complete product inventory table
* Add new products with SKU, Name, Description, Price, and Quantity
* Low stock status flags (`CRITICAL LOW` vs `STABLE`)

## Project Structure
* `E-CommerceBackend/` - Spring Boot backend API
* `E-CommerceFrontend/` - Angular standalone frontend application

## Setup Instructions

### 1. Database Setup
Run this SQL script in your MySQL Workbench to set up the database and table:

```sql
CREATE DATABASE IF NOT EXISTS ecommerce_db;

