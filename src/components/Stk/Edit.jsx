import React from 'react'

function Edit({gift}) {
  return (
   <>
   <div style={{textAlign:'center',
  backgroundColor:'',
  height:'550px'}}>
   <a href='/gifts'>Regresar al Indice</a>
     <form action={`/gifts/${gift._id}?_method=PUT`} method="POST">
          <h2>Nombre:&nbsp;<input type="text" name="name" defaultValue={gift.name}/></h2>
          <h2>Regalo Querido: <input type="text" name="item"  defaultValue={gift.item}/></h2><br/>
          Seguro(a):
              { gift.sure? <input type="checkbox" name="sure" defaultChecked />: <input type="checkbox" name="sure"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
   </>
  )
}

export default Edit