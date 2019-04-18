import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';
 
function App () {
  const jokeComponents = jokesData.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )
  })

// OR it could be written as----- const jokeComoponents = jokesData.map(joke => 
// <Joke question={joke.question} punchLine={joke.pinchLine} />)

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default App;