import './App.css'
import {useState, useEffect} from 'react'
import MoonLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      <div className='App'>
        {
          loading ?
          <MoonLoader color={"#90d636"} loading={loading} size={550} />
          :
          <div className='text-container'>
            <h1>Test Site</h1>
            <div className='container'>
              <span>Bing</span>
              <span>Bong</span>
              <span>Ching</span>
              <span>Chong</span>
            </div>
          </div>

        }

      </div>
    </>
  )
}

export default App
