function Likes(props) {
  return (
    <div className="likes-section">
      <span className="likes">{props.image.likes}</span>
      <button
        className="like-button"
        onClick={() => props.increaseLikes(props.image)}
      >
        ♥
      </button>
    </div>
  );
}
export default Likes;
