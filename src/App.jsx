import { useState, useEffect } from "react";

import "./App.css";
import Logo from "./components/Logo/Logo";
import Photo from "./components/Photo/Photo";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((images) => setImages(images));
    console.log(images);
  }, []);

  function showLikes(image) {
    return fetch(`http://localhost:3000/images/${image.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(image),
    }).then((resp) => resp.json());
  }

  function increaseLikes(image) {
    const update = [...images];
    image.likes++;
    showLikes(image);
    setImages(update);
  }

  return (
    <div className="App">
      {/*<!-- logo -->*/}
      <Logo />

      {/* <!-- image cards -->*/}
      <Photo images={images} increaseLikes={increaseLikes} />
    </div>
  );
}

export default App;
