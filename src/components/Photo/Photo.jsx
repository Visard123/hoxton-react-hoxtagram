import Comments from "./Comments";
import Likes from "./Likes";

function Photo(props) {
  return (
    <section className="image-container">
      {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components -->*/}
      {props.images.map((image) => {
        return (
          <article className="image-card">
            <h2 className="title">{image.title}</h2>
            <img src={image.image} className="image" />

            <Likes image={image} increaseLikes={props.increaseLikes} />

            <Comments image={image} />
          </article>
        );
      })}
    </section>
  );
}
export default Photo;
