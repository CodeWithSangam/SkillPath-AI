function Card(props){
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <img height={250} width={400} src={props.img} alt="" />
            <h1>Age:{props.age}</h1>
        </div>
    )
}
export default Card