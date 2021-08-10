// Takes in an array and returns a random index.
function getRandomAnswer(props){
  return Math.floor( Math.random() * props.length )
};

export default getRandomAnswer;