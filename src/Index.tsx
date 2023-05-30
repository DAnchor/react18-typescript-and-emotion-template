// ./src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Index.css';

const appRoot = document.querySelector('#app-root');

if (appRoot) {
  createRoot(appRoot).render(<App />);
}
