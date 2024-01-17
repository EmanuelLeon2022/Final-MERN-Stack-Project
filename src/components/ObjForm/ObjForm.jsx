import React, { Component} from "react";
import {} from '../../utilities/users-service'

export default class ObjForm extends Component {
    state = {
        item: "",
        type: "",
        brand: "",
        battery: "",
        error:"",
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
            const user = await signUp(formData);
            console.log(user)
    
        } catch (error) {
            this.setState({
                error: "Sign Up Failed - Try Again"
            })
        }
      };
    
      render() {
        const disable = this.state.password !== this.state.confirm;
    
        return (
          <>
            <div>SignUpForm</div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit} style={{margin:"1em"}}>
                <label>Item</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.item}
                  onChange={this.handleChange}
                  required
                />
                <label>Item Type</label>
                <input
                  type="text"
                  name="type"
                  value={this.state.type}
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
                <label>Password</label>
                <input
                  type="text"
                  name="battery"
                  value={this.state.battery}
                  onChange={this.handleChange}
                  required
                />
                <button type="submit" disabled={disable}>
                  Submit Item
                </button>
              </form>
            </div>
            <p className="error-message">{this.state.error}</p>
            
          </>
        );
      }
}