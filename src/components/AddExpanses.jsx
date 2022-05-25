import { useState, useContext } from "react"
import { AppContext } from "../Context/AppContext"

const AddExpanses = () => {

  const { dispatch } = useContext(AppContext)

  const [title, setTitle] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = (e)=> {
    e.preventDefault()

    let expanse = {
      id: Date.now(),
      title: title,
      cost: parseInt(cost)
    }

    dispatch({
      type: 'ADD_EXPANSE',
      payload: expanse
    })

    setTitle('')
    setCost('')

  }

  return (
    <div className="add-expanses-form">
        <form onSubmit={handleSubmit}>
            <div className="inputs">
                <label>Item name:</label>
                <input 
                  type="text"
                  value={title} 
                  required
                  onChange={(e)=> setTitle(e.target.value)}  
                />
            </div>
            <div className="inputs">
                <label>Cost:</label>
                <input 
                  type="text"
                  value={cost}
                  required
                  onChange={(e)=> setCost(e.target.value)}  
                />
            </div>
            <button className="add-expanse-btn" type="submit">Add Expanse</button>
        </form>
    </div>
  )
}

export default AddExpanses