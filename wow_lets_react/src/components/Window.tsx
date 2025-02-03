import styled from "@emotion/styled"

interface Props {
    value : string
    setValue : React.Dispatch<React.SetStateAction<string>>
    onclick_ok : ()=>void
}

const Window = ({ value , setValue , onclick_ok }:Props) => {


    return (
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>value!=""?onclick_ok():setValue("")}>OK</button>
        </div>
    )
}


const Title = styled.h1`
color : red
`

export default Window