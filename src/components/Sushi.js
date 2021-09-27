import {useState} from "react";


function Sushi({sushi, setmoney, money}) {

  const [changeSushi, setChangeSushi] = useState(null)

  const handleShowPlate = () => {
    
    if (money-sushi.price >= 0 ){
      setChangeSushi(preState => !preState)
      setmoney(money - sushi.price)
    }
  }

  


  return (
    <div className="sushi" >
      <div className="plate" onClick={handleShowPlate}>
        {/* Tell me if this sushi has been eaten! */}
        {changeSushi ? null :  (
          <img
            src={sushi.img_url}
            alt={sushi.name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
