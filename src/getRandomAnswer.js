function GetRandomAnswer(props){
  return Math.floor( Math.random() * props.length )
};

export default GetRandomAnswer;