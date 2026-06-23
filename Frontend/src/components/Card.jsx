function Card(props){
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <img height={200} width={400} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUMyGRmSWPJSskvI3gKkIozfAXMoV3pwP_jNfttHDyWXRoZ02sEjT7tAeVFTpyNZVkaeHMQI-3eWnDYgqZ6ckVIH7yLmy8IoAiteh3QuXggbcilGqqB_FVOw" alt="" />
            <p>Age:{props.age}</p>
        </div>
    )
}
export default Card