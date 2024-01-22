import React from 'react'
import './Inventory.css'
// import Submit from '../../components/Submits/Submit'
// import itemSchema from '../../models/itemSchema'

function Inventory() {

  // const items = [
  //   {name: 'Splattershot Jr', image: 'https://media.sketchfab.com/models/84699b52f3364a4789a92d37078d0fd8/thumbnails/074a6a8775c54f5f9f96faebd30da3e9/df5d0377c51147a3b00a514386879000.jpeg', type: 'Painting Tool', battery:'18', brand: "Veemo"},
  //   {name: 'EG-X0000', image: 'https://static.wixstatic.com/media/4d93f0_69a808e659ed466093b5b6a1a14cd4d9~mv2.png/v1/fill/w_374,h_454,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/E10000G%20HD.png', type: 'Demolition', battery:'200', brand: "Eggman Industries"},
  //   {name: 'Bagel Slicer', image: 'https://www.miamibakeryequipment.com/image/cache/catalog/Scale%20a%20bagel%20by%20scale%20o%20matic-800x1000.jpg', type: 'Cooking', battery:'1.5', brand: "Eggman Industries"},
  //   {name: 'Lamp', image: 'https://img.ifunny.co/images/72d15daae2641ccb52416c7fd5f26414adb002b2e861b461ae1f14435528e762_1.jpg', type: 'Lighting', battery:'9', brand: "Morshu"},
  //   {name: 'Rope', image: 'https://png.pngtree.com/png-clipart/20230726/original/pngtree-rope-illustration-png-image_9347733.png', type: 'Gear', battery:'none', brand: "Morshu"},
  //   {name: 'Hookshot', image: 'https://www.zeldadungeon.net/wiki/images/thumb/d/d3/OoT_Hookshot.png/200px-OoT_Hookshot.png', type: 'Outdoor Gear', battery:'50', brand: "Aquarius"},
  //   {name: 'Hammer Fists', image: 'https://media.comicbook.com/uploads1/2014/07/avengers-age-of-utron-hulkbuster-armor-fist-103757.jpg', type: 'Demolition', battery:'50v', brand: "B & L"},
  //   {name: 'Sat Phone', image: 'https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/23/0cea33ff-245f-429e-aaa2-1633350b3c63/thumbnail/1200x630/896b66e95602988f88680156213df076/garmin-mini.jpg?v=47479038714af14683e43d6675dccca0', type: 'Radio', battery:'9', brand: "Robotnik Corp."},
  //   {name: 'Resonating Toothbrush', image: 'https://images.philips.com/is/image/philipsconsumer/3a09c4cc892a49ee981dadba009ce3fc?wid=700&hei=375&$pnglarge$', type: 'Indoor', battery:'1.5', brand: "Robotnik Corp."},
  //   {name: 'Drill', image: 'https://www.milwaukeetool.com/-/media/Feature/Components/Generic/Product-USP-Full-Width/Drilling/2903-20.webp?h=400&w=270&la=en&hash=7337D00EB9360BEBD233D5CE148FFD23', type: 'Power Tool', battery:'18', brand: "Milwakee"},
  //   {name: 'Impact Drill', image: 'https://www.milwaukeetool.com/--/web-images/sc/197405b4ab01432cae35b1702454501d?hash=7a5e07d5f9fb20f2941ebbdfa3b4460f&lang=en&w=520&h=520', type: 'Power Tool', battery:'18', brand: "Milwakee"},
  // ]
  return (
    <div>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>Inventory Page</h1>
      <a href='/'>Return to Home</a>
      <div className= 'stonk'>
          {" "}
          {/* {items.map((item) => {
            return (
              <div className='tool'>
                {" "}
                <h3 className='sir'>{item.name} :</h3>
                <p>Type: {item.type}</p>
                <p>Battery: {item.battery}V</p>
                <img className='smile' src={item.image} alt={item.name} />
                <h4>Brand: {item.brand}</h4>
                {" "}
              </div>
            );
          })} */}
          </div>
        <p>&nbsp;</p>
    </div>
  )
}

export default Inventory