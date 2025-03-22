"use client";  // Ensures this runs on the client-side in Next.js

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Make sure this path is correct
import './globals.css';  // Include your global CSS

const Page = () => {
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(<App />);
    }
  }, []);

  return (
    <div>
      <div id="root"></div>  {/* The root element where your app will be rendered */}
    </div>
  );
};

export default Page;
