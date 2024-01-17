import { useState } from "react"

function Form(props) {
    const [formData, setFormData] = useState({
        searchterm: ""
    });
    //updates handlechange
    const handleChange =(event) => {
        setFormData({ ... formData, [event.target.name]: event.target.value});
    };

    const handleSubmit =(event) => {
        //prevents refresh issues
        event.preventDefault();
        //passes search term through props
        props.gamesearch(formData.searchterm);
    }

  return (
    <div>
        <form on onSubmit={handleSubmit}>
            <input type="text" name="searchterm" onChange={handleChange} />
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Form