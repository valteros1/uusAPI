import app from './app';
import express, { Request, Response, Express } from 'express';

const port: number = 3000;


app.listen(port, () => {
   console.log(`App is running on port ${port}`);
});



