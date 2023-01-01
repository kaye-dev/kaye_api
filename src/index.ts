import express from 'express';
import { app } from './config/router';
import { configure } from 'log4js';
import { address } from 'ip';
import { accessLogger } from './config/logger';
configure('./log4js.config.json');
accessLogger.info(address());

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
