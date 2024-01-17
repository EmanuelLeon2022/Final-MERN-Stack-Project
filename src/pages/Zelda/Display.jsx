function Display(props) {
  const loaded = () => {
    return (
        <div className="desc">
            <div className="cat">
            <h1 style={{fontFamily: 'zelda', fontSize:'30px'}}>Name: {props.currentName.data.name}</h1>
            <h1 style={{fontFamily: 'zelda', fontSize:'30px'}}>Category: {props.currentName.data.category}</h1>
            </div>
            <div className="find">
            <h1 style={{fontFamily: 'zelda', fontSize:'30px'}}>Description:</h1>
            <p>{props.currentName.data.description}</p>
            <p>{props.currentName.message}</p>
            </div>
            <div className="looks">
                <img style={{borderRadius: '10px', height: '220px'}} src={props.currentName.data.image} alt={props.currentName.data.name}/>
            </div>
            <div className="where">
            <h1 style={{fontFamily: 'zelda', fontSize:'30px'}}>Locations:</h1>
            <p>{props.currentName.data.common_locations[0]}</p>
            <p>{props.currentName.data.common_locations[1]}</p>
            <p>{props.currentName.data.common_locations[2]}</p>
            <p>{props.currentName.data.common_locations[3]}</p>
            </div>
        </div>
    )
  }
  const loading = () =>{
        return <h1>No Items to Display</h1>
    };
    return props.currentName ? loaded() : loading();
}

export default Display