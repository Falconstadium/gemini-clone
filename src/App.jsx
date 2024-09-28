import './App.css'
import Main from './components/mainContent/Main'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className='home'>
      <div className='aside'>
        <Sidebar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  )
}

export default App
