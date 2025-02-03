import React, { useEffect, useState } from 'react'

import './App.css'
import Window from './components/Window'
import Todo from './components/Todo'

interface Tlist {
  title : string
  check : boolean
}

function App() {
  const [temptitle,setTemptitle] = useState("")
  const [isinputshow,setIsinputshow] = useState(false)
  const [list,setList] = useState<Tlist[]>([])

  const push_back = () => {
    setList((prev)=>[...prev , { title : temptitle , check : false }])
    setIsinputshow(()=>!isinputshow)
    setTemptitle(()=>"")
  }

  const donecheck = (idx : number) => {
    setList((prev)=>{
      const temp = [...prev]
      temp[idx] = {...temp[idx], check : !temp[idx].check}
      return temp
    })
  }

  const delcomponent = (idx : number) => {
    setList((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)])
  }

  return (
    <>
      <div>
        <h1>To do list!! Skrrrrr</h1>
        <button onClick={()=>setIsinputshow(!isinputshow)}>+</button>
        {
          isinputshow&&<Window 
            value={temptitle} 
            setValue={setTemptitle} 
            onclick_ok={push_back}
          />
        }
        {
          list.map((v,i)=>
            <React.Fragment key={i}>
              <Todo 
                inputTitle={v.title} 
                isdoen={v.check}
                idx={i} 
                check={donecheck}
                delcom={delcomponent}
              />
            </React.Fragment>
          )
        }
      </div>
    </>
  )
}

export default App
