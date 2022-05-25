import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

const ExpanseItem = (props) => {

  const { dispatch } = useContext(AppContext)

  const deleteExpanse = ()=> {
    dispatch({ 
      type: 'DELETE_EXPANSE',
      payload: props.id
     })

  }

  return (
    <div className="expanse-item">
        <span className="expanseItem-title">{props.title}</span>
        <span className="expanseItem-cost">{props.cost} SEK</span>
        <div className="delete-btn">
            <button onClick={deleteExpanse} >X</button>
        </div>
    </div>
  )
}

export default ExpanseItem