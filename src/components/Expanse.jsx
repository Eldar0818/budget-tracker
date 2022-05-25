import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

const Expanse = () => {

  const { expanses } = useContext(AppContext)

  const totalExpanse = expanses.reduce((total, item)=> {
    return (total = total + item.cost)
  }, 0)

  return (
    <div className="expanse dashboard">
        <span>Expanse: { totalExpanse } SEK</span>
    </div>
  )
}

export default Expanse