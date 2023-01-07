import express from 'express';
import { App } from './config/router';
import './config/loggers/config';

const PORT = 3000;
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

try {
  App.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
