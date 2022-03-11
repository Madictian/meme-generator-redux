import { useDispatch } from "react-redux"
import { diceActions } from "../store/diceSlice";

 
 function Dice({ saved, id, value,  }) {

  const dispatch = useDispatch();
  
  const saveDice = (id) => {
    dispatch(diceActions.save(id));
  }
  
   return (
     <div className="dice" id = {'dice' + id} onClick={()=>{saveDice(id)}}>
        <p>{value}</p> 
     </div>
   )
 }
 
 export default Dice

