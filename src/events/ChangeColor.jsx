export default function ChangeColor(){
    const [color,changeColor] = useState(false)
    return (<div onMouseEnter = {()=>changeColor(true)}
    style={{backgroundColor:color?blue:green}}
    >
    </div>
    )
}