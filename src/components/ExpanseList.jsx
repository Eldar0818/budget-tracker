import { AppContext } from "../Context/AppContext"
import { useContext } from "react"
import ExpanseItem from "./ExpanseItem"

const ExpanseList = () => {

   const { expanses } = useContext(AppContext)

   if(expanses.length === 0){
     return <h3 className="noExp">There are no any expanses</h3>
   }

  return (
    <div className="expanse-list" >
        {
            expanses.map(expanse=> (
                <ExpanseItem 
                    key={expanse.id}
                    title={expanse.title} 
                    cost={expanse.cost}
                    id={expanse.id}
                 />
            ))
        }
    </div>
  )
}

export default ExpanseList