import {useState } from "react"
import {VscHeartFilled, VscHeart} from 'react-icons/vsc'

const Liked = () => {
    const [liked, setLiked] = useState(false)
    // boolean value false 
    // original state decloration is not liked 
    // re did using ternary operators does same as other Liked.tsx
    const handleClick = () => {
        // event handler that checks state of "liked" - when clicked
        setLiked(!liked)
        // !liked inverted value of liked.
        // this fixed the logging only "unliked" issue
        console.log(liked ? 'unliked' : 'liked')
        // ternary operator shorthand
        // when clicked checks IF liked is true, logs unliked, since the click is triggering the unlike,
        // and If false, logs liked since the click is liking it.
        // removed !liked, that was causing the issue.
    }
    return (
        <h1 onClick={handleClick}>
            {liked ? <VscHeartFilled /> : <VscHeart />}
        </h1>
        // changed to return h1 tag to the page that contains the icon depending on
        // if liked is true we display the Filled Heart, otherwise just display heart
        // onClick, runs eachh time there is a click, the 
    )
}

export default Liked