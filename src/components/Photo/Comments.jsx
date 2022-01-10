function Comments(props) {
  return (
    <ul className="comments">
      {props.image.comments.map((comment) => {
        return <li>{comment.content}</li>;
      })}
    </ul>
  );
}
export default Comments;
