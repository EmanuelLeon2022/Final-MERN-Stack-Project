import React, {Component} from "react";
import { loadUp } from "../../utilities/items-service";

export default class New extends Component {
  state = {
    name: "",
    image: "",
    type: "",
    battery: "",
    brand: "",
    // error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        const formData = {...this.state};
        delete formData.error;
        delete formData.confirm;
        const item = await loadUp(formData);
        console.log(item)

    } catch (error) {
        this.setState({
            error: "Item Creation Failed"
        })
    }
  };

  render() {

    return (
      <>
        <div style={{width:'50%', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'left'}}>
        <h1>New Tool Form</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit} style={{margin:"1em"}}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Image</label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
              required
            />
            <label>Type</label>
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
              required
            />
            <label>Battery Voltage</label>
            <input
              type="text"
              name="battery"
              value={this.state.battery}
              onChange={this.handleChange}
              required
            />
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.handleChange}
              required
            />
            <button type="submit">
              ADD
            </button>
          </form>
        </div>
        {/* <p className="error-message">{this.state.error}</p> */}
        
      </>
    );
  }
}