import 'reflect-metadata'; // required for tshringe
import express from 'express';
import { app } from './config/router';
import './config/loggers/config';
import { registerDependencies } from './di/di';

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  app.listen(PORT, () => {
    registerDependencies(); // inject dependencies
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
