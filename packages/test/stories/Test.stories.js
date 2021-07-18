import React from "react";
import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default { title: "Test" };

export const test = () => <div>

<div class="card" style={{width: "18rem;",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s"}}>
  <div style={{padding:"10px"}}>
    <h5 style={{paddingTop:"10px"}}>Card title</h5>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div href="#" style={{background:"blue",height:"20px",background: "#007bff",
    height: "30px",
    width: "fit-content",
    borderRadius: "3px",
    borderColor: "#007bff",
    color: "#fff",
    paddingLeft: "5px",
    paddinRight: "5px"
}}>Go somewhere</div>
  
  </div>
</div>

</div>;
test.story = {
  name: "Test",
};
