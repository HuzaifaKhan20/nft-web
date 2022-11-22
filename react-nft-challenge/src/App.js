import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';

function App() {
  const [punkListData, setPunkListData] = useState([]) 
  const [selectedPunk, setSelectedPunk] = useState(0)
  console.log(setSelectedPunk)

  useEffect(()=> {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        // 'https://testnets-api.opensea.io/assets?asset_contract_address=0x54f2195081578b61F24E66aC2bf03AA5C47384C60x54f2195081578b61F24E66aC2bf03AA5C47384C6'
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xf4910c763ed4e47a585e2d34baa9a4b611ae448c&order_direction=asc&offset=0&limit=20&collection=pirates-of-the-kings'
        )
        // console.log(openseaData)
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
    }

  return getMyNfts()
  },[])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <div>
      <Punklist punkListData={punkListData} 
      setSelectedPunk={setSelectedPunk} 
      />
      </div>
      )
    }
   </div>
  );
}

export default App;
