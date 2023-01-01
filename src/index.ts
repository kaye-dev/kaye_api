import express from 'express';
import { app } from './config/router';
import { configure } from 'log4js';
configure('./log4js.config.json');

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
