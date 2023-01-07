import express from 'express';
import { app } from './config/router';
import './config/loggers/config';

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
