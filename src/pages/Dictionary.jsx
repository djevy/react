import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
  const [word, setWord] = useState();
  // const [word2, setWord2] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("State updated", word);
  }, [word]);
  // useEffect(() => {
  //   console.log("State updated", word2);
  // }, [word2]);
  // Second argument of useEffect is a dependency array
  // If no second argument is given it will be called when any state changes
  // An empty dependency array will execute once, used for initial page load
  // When state variables are passed as an argument then it will only execute on that state variable change
  // Always call useEffect after state is declared

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button onClick={() => {
        navigate('/definition/' + word, {replace: true})
      }}>Search</button>
      {/* <h2>Let's get the definition for {word}</h2>
      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />
      <h2>Let's get the definition for {word2}</h2> */}
    </>
  );
}
