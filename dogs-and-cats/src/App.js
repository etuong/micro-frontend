import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);

  const fetchAnimal = async (type) => {
    if (type === "dog") {
      const result = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const dogInfo = await result.json();
      setImage(dogInfo.message);
    } else if (type === "cat") {
      const result = await fetch(`https://aws.random.cat/meow`);
      const catInfo = await result.json();
      setImage(catInfo.file);
    }
  };

  useEffect(() => {
    fetchAnimal("dog");
  }, []);

  return (
    <div>
      <h3>Animal of the day!</h3>
      <div>
        <button onClick={() => fetchAnimal("dog")}>New Doggo</button>
        <button onClick={() => fetchAnimal("cat")}>New Catty</button>
      </div>
      <img src={image} width="400px" alt="animal" />
    </div>
  );
}

export default App;
