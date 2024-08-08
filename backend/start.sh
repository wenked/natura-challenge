#!/bin/bash

echo "Starting backend server"  

echo "Running migrations"
npm run run:migration

echo "Running seeders"
npm run run:seed

echo "Starting server"
npm run start 