"use client"
import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  const updateVisitorCount = async () => {
    try {
      const postResponse = await fetch('/api/visitors', {
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache', // Prevent caching of the POST request
        },
      });
  
      // Check the POST response status before making a GET request
      if (postResponse.ok) {
        const getResponse = await fetch('/api/visitors', {
          headers: {
            'Cache-Control': 'no-cache', // Prevent caching of the GET request
          },
        });
        const data = await getResponse.json();
        setCount(data.count);
      } else {
        console.error('Failed to update visitor count');
      }
    } catch (error) {
      console.error('Error updating visitor count:', error);
    }
  };

  useEffect(() => {
    updateVisitorCount();
  }, []);

  return <div>Nombre de visites: {count}</div>;
};

export default VisitorCounter;
