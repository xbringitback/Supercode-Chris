import './App.css'
import Counter from './components/Counter'
import Change from './components/Change'
import Inputs from './components/Inputs'
import Movies from './components/movie/Movie'

function App() {

  return (
    <>
      {<Counter />}
      {<Change />}
      {<Inputs />}
      {<Movies />}

    </>
  )
}

export default App
