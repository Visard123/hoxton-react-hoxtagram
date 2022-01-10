import { useState, useEffect } from "react";

import "./App.css";
import Logo from "./components/Logo";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((resp) => resp.json())
      .then((images) => setImages(images));
    console.log(images);
  }, []);

  function updateLikes(image) {
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
    updateLikes(image);
    setImages(update);
  }

  return (
    <div className="App">
      {/*<!-- logo -->*/}
      <Logo />

      {/* <!-- image cards -->*/}
      <section className="image-container">
        {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components -->*/}
        {images.map((image) => {
          return (
            <article className="image-card">
              <h2 className="title">{image.title}</h2>
              <img src={image.image} className="image" />
              <div className="likes-section">
                <span className="likes">{image.likes}</span>
                <button className="like-button">♥</button>
              </div>
              <ul className="comments">
                {image.comments.map((comment) => {
                  return <li>{comment.content}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
