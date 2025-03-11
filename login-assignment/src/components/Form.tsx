import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () =>  {

    const state = useSelector((state) => state.list);
    console.log(state)

    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        name:"",
        description:"",
    });

    const handleChange = (name, value) => {
        console.log(name,value)
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const newList = [...state, formData]
        dispatch(addItem(newList));
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input required type="text" name='Name' value={formData.name} placeholder="Item Name" onChange={(e) => handleChange("name", e.target.value)}/>
                <input required type="text" name='Description' value={formData.description} placeholder="Item Description" onChange={(e) => handleChange("description", e.target.value)} />
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default Form