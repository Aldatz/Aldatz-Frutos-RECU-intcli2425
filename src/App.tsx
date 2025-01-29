import { useState } from 'react';
import './App.css'
import DropDown from './components/DropDown'
import { megaEpicFortress } from './data/data';
import { countBillagerByProfesion } from './helpers/countBillagerByProfesion';

function App() {

  const [villagers, setVillagers] = useState<string | any | null>(null);

  const getVillagers = () => {
    const villagers = countBillagerByProfesion(megaEpicFortress)
    setVillagers(villagers)

  };

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
      <div>
        <div className='top-40 right-52 absolute'>
          <button className="bg-black bg-opacity-70 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md 
        hover:bg-neutral-800 hover:bg-opacity-70 border-sepia border-2 mt-2 m-12"
            onClick={getVillagers}>
            get all the villagers
          </button>
          <div>{villagers}</div>
          
        </div>
      </div>
    </>
  )
}

export default App
