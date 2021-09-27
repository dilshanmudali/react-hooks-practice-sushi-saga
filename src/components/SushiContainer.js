import {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushiList, money, setmoney}) {


  const [sushiMenu, setSushiMenu] = useState(0)

  let splitArr = [...sushiList].slice(sushiMenu, sushiMenu + 4)
  
  function handleNewSushi() {
    setSushiMenu(currentShushi => currentShushi + 4) 
  }


  const renderSushi = splitArr.map(sushi => <Sushi 
    key = {sushi.id} sushi={sushi} money={money} setmoney={setmoney}
  />)

  

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleNewSushi={handleNewSushi} sushiMenu={sushiMenu}/>
    </div>
  );
}

export default SushiContainer;
