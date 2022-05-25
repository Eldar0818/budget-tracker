import { AppContext } from "../Context/AppContext"
import { useContext } from "react"

const Budget = () => {

  const { budget } = useContext(AppContext)

  return (
    <div className="budget dashboard">
     <span>Budget: {budget} SEK</span>    
    </div>
  )
}

export default Budget