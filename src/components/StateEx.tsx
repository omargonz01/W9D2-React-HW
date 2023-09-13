import { useState } from "react"

const Component = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan",
    }
  })

//   const handleClick = () => {
//     setGame({...game,{player} name: "Omar was here"})
//     console.log(game)
//   }
  const handleClick = () => {
    setGame({
        ...game, player: { ...game.player, name: "Omar was here"}
        // since the 
    })
    console.log(game.player)
  }

  return (
  <>
    {/* <p>{...game...name}</p> */}
    <p>{game.player.name}</p>
    <button onClick={handleClick}>Click</button>
  </>
  )
}

export default Component;
