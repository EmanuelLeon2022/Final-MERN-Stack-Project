import React, {Component} from "react";
import { loadUp } from "../../utilities/stocks-service";

export default class New extends Component {
  state = {
    name: "",
    image: "",
    usage: "",
    strength: "",
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
        const stock = await loadUp(formData);
        console.log(stock)

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
        <h1>New Item Form</h1>
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
              name="usage"
              value={this.state.usage}
              onChange={this.handleChange}
              required
            />
            <label>Quantity</label>
            <input
              type="number"
              name="strength"
              value={this.state.strength}
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