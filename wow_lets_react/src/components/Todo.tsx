import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Window from "./Window"

interface Props {
    inputTitle : string
    isdoen : boolean
    idx : number
    check : (int : number)=>void
    delcom : (int : number)=>void
}

const Todo = ({ inputTitle , isdoen , idx , check , delcom }:Props) => {
    const [title, setTitle] = useState("")
    const [temptitle, setTemptitle] = useState("")
    const [isinput, setIsinput] = useState(false)

    const click_Editbutton = () => {
        setIsinput(()=>!isinput)
    }

    const change_title = () => {
        setTitle(()=>temptitle)
        if(isinput) {
            setIsinput(()=>!isinput)
        }
        setTemptitle(()=>"")
    }

    useEffect(()=>{
        setTitle(inputTitle)
    },[])

    return (
        <div>
            <span>{title}</span>
            <Checkbutton isdoen={isdoen} onClick={()=>check(idx)}>DONE</Checkbutton>
            <Delbutton onClick={()=>delcom(idx)}>DEL</Delbutton>
            <Editbutton onClick={()=>click_Editbutton()}>EDIT</Editbutton>
            {
                isinput&&<Window
                    value={temptitle}
                    setValue={setTemptitle}
                    onclick_ok={change_title}
                />
            }
        </div>
    )
}

const Checkbutton = styled.button<{ isdoen: boolean }>`
    color : ${({ isdoen }) => (isdoen?'green':'red')}
`

const Delbutton = styled.button`
    color : red
`

const Editbutton = styled.button`
    color : gray
`

export default Todo