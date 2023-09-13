import { useState } from "react";
import { VscHeartFilled, VscHeart } from "react-icons/vsc";

const Liked = () => {
  const [liked, setLiked] = useState(false);
  // boolean value false
  // original state decloration is not liked
  const handleClick = () => {
    if (liked) {
      setLiked(false);
      console.log("unliked");
      // if liked, set state to false on click and log unliked
    } else {
      setLiked(true);
      console.log("liked");
      // if not liked, set state to true, and log liked
    }
  };
  return (
    <p onClick={handleClick}>
      if (liked) {<VscHeartFilled />}
      else {<VscHeart />}
    </p>
    // return renders the actual p tag to the page that contains the icon depending on
    // if liked is true we display the Filled Heart, otherwise just display heart
    // onClick, runs eachh time there is a click, the
  );
};

export default Liked;
