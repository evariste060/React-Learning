export default function about (){
    const fruit = ["Banana","Apple","Orange","Evariste","Nkurunziza","Abera Ebenezer","Kenny Bonheur Niyongabo","Umuhuza Evodie","Cynthia Umubyeyi"]
    const result = fruit.map(e=><p>{e}</p>)
    return (
        <div>
            <h2>Hey I am about</h2>
            {result}
        </div>
    )
}