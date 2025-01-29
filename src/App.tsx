import './App.css'
import DropDown from './components/DropDown'

function App() {


  return (
    <>
      <div className='top-0'>
        <img
          src={"citadel.jpg"}
          alt={"citadel"}
          className="w-[50%] h-[50%] mb-2 object-contain top-0"
        />
        <DropDown>
        </DropDown>
      </div>
    </>
  )
}

export default App
