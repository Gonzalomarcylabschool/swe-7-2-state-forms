import { useState }  from 'react';

const InstagramPost = ({ picture }) => {

  const [likes, setLikes] = useState(0);
  // let likes = 0;

  const handleClick = () => {
    // likes++;
    // console.log(likes);
    setLikes((currentLikes)=> currentLikes + 1);
    // setLikes(likes + 1); we can use this but it is not recommended
  }

  return (
    <div className="insta-pic">
      <img alt={picture.caption} src={picture.src} />
      <p>{picture.caption}</p>
      <button onClick={handleClick}>❤️ {likes}</button>
    </div>
  );
};

export default InstagramPost;