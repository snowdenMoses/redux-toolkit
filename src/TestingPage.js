import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { setIngredients } from './redux/allStatesSlice';

function TesingPage() {
 const [inputValue, setInputValue] = useState("")
 const { ingredients } = useSelector(state=> state.getAllStates)
 const dispatch = useDispatch()
 console.log(ingredients);
  return (
      <div className="App">
        <div>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>{
                dispatch(setIngredients(inputValue))
                setInputValue("")
                }}>
                Add Items
            </button>
            {ingredients?.map((item,i)=> <ul key={i} className="ingredientsList"> <li> { item } </li> </ul>)}
        </div>
      </div>
  );
}

export default TesingPage;
