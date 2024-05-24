import { AppBar } from './components/appbar'
import './App.css'
import { Album } from './components/album'

function App() {
  return (
    <div className="app">
      <AppBar />
      <div className="collection">
        <div className="content">
          Content
        </div>
        <Album/>
      </div>
    </div>
  )
}

export default App
