import {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3000/sushis";



function App() {

  const [money, setmoney] = useState(50)
  const [sushiList, setSushiList] = useState([])


  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushiList(data))
  },[])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} money={money} setmoney={setmoney}/>
      <Table money={money}  />
    </div>
  );
}

export default App;
