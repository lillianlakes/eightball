import React, { useState } from "react";
import getRandomAnswer from "./getRandomAnswer"

//Sets initial eightball message and color
function EightBall(props) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");
  const [greenCount, setGreenCount] = useState(0);
  const [goldenRodCount, setGoldenRodCount] = useState(0);
  const [redCount, setRedCountCount] = useState(0);

  // Changes color and message for the eightball
  function handleClick() {
    const index = getRandomAnswer(props.answers);
    const answer = props.answers[index];
    setColor(answer.color);
    if (answer.color === "green") setGreenCount(greenCount + 1);
    else if (answer.color === "goldenrod") setGoldenRodCount(goldenRodCount + 1);
    else setRedCountCount(redCount + 1);

    console.log('greenCount: ', greenCount);
    console.log('redCount: ', redCount);
    console.log('goldenRodCount: ', goldenRodCount);

    setMessage(answer.msg);
  }

  function reset() {
    setColor("black");
    setMessage("Think of a Question")
    setGreenCount(0);
    setGoldenRodCount(0);
    setRedCountCount(0);
  }

  return (
    <div className="EightBall">
      <div onClick={handleClick}>
        <div className="EightBall-ball"  style={{ backgroundColor: color }} >
          <p className="EightBall-message"><b>{message}</b></p>
        </div>

        <div className="EightBall-counts">
          <p className="EightBall-green">Green: {greenCount} </p> 
          <p className="EightBall-goldenRod">GoldenRod: {goldenRodCount} </p> 
          <p className="EightBall-red">Red: {redCount}</p>
        </div>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>

  )
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
};

export default EightBall;