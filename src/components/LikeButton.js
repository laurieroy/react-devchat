/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function LikeButton(props){
  return <button onClick={props.onLikeClick}>{props.likes} Likes</button>
} 

export default LikeButton