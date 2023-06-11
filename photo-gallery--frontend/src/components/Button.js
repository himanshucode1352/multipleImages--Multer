import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

const Button = ({ setUpdateUI }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append('photo',e.target.files[i])
    }

    // formData.append("photo", e.target.files[0]);
    // formData.append("photo", e.target.files[1]);
    // formData.append("photo", e.target.files[2]);
console.log('formData',formData)
    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <label className="button" htmlFor="file_picker">
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        multiple
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default Button;
