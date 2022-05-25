import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

const Remaining = () => {

  const { expanses, budget } = useContext(AppContext)

  const totalExpanse = expanses.reduce((total, item)=> {
    return (total = total + item.cost)
  }, 0)

  return (
    <div className="remaining dashboard">
        <span>Remains: { budget - totalExpanse } SEK</span>
    </div>
  )
}

export default Remaining