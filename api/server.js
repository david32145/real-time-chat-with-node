import http from 'http';
import express from 'express';
import socket from 'socket.io';
import cors from 'cors'

import routes from './src/routes'

import app from './src'

const server = http.createServer(app)
const io = socket(server)

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(express.json())
app.use(cors())
app.use(routes)

server.listen(process.env.PORT, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT}`)
})