import { useState, useContext } from "react"
import { AppContext } from "../Context/AppContext"

const SetBudget = () => {

    const { dispatch } = useContext(AppContext)
    const [amount, setAmount] = useState(0)

    const handleAmount = (e)=> {
        e.preventDefault()

        dispatch({
            type: 'SET_AMOUNT',
            payload: amount
        })

    }

  return (
    <div className="set-budget">
        <form onSubmit={handleAmount}>
            <input type="number" onChange={e=> setAmount(e.target.value)} />
            <button type="submit">Set Budget</button>
        </form>
    </div>
  )
}

export default SetBudget