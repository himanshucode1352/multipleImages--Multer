import axios from "axios";
import React from "react";

const Grid = ({ photos,setUpdateUI }) => {
  const handleDelete =(photo)=>{
    axios
    .delete(`http://localhost:5000/api/delete/${photo._id}`)
    .then((response) => {
      setUpdateUI(response.data);
   
    })
    .catch((error) => {
      console.log(error);
    
    });


  }
  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map((x,index) => (
          <>
             
          <div key={index} className="grid__item">
            <img
            
              src={`http://localhost:5000/uploads/${x.photo}`}
              alt="grid_image"
            />
     <button onClick={() => handleDelete(x)} className="delete-icon">
                  Delete
                </button>
          </div>
       
                </>
        ))}
      </div>
    </>
  );
};

export default Grid;
