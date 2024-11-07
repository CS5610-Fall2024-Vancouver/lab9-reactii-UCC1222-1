import React, { useEffect, useState } from 'react';

function FetchDogImage() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching the dog image:', error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {dogImage ? (
        <img src={dogImage} alt="Random Dog" style={{ width: '300px', height: '300px' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchDogImage;