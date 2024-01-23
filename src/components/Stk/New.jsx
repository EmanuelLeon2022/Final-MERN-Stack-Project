import React from "react";

function New() {
  return (
    <>
    <div style={{textAlign:'center', color:'white',backgroundImage:'url(https://images.unsplash.com/photo-1514377006585-6e7975371bd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D)'}}>
    <a href="/gifts" style={{color:'white', fontSize:'20px'}}>Regresar al Indice</a>
      <h1>Forma de Regalo</h1>
      <form action="/gifts" method="POST"><br/>
        Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
        Regalo Querido: <input  style={{margin:"1em"}}type="text" name="item" /><br/>
        Estas Seguro(a): <input  style={{margin:"1em"}}type="checkbox" name="sure" /><br/>
        <input style={{margin:"1em", borderRadius:'5px'}} type="submit" value="Envíar" />
      </form>
    </div>
    </>
  );
}

export default New;