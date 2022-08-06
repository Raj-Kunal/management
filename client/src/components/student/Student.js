import React from "react";
import {useParams} from "react-router-dom"
import "./student.css"

const Student = () => {

  const {id} = useParams()
  console.log(id)
  return (
    <div className="container-card">
      <div className="student-card">
      <i class="icon fa-solid fa-address-card"></i>
      </div>
      <div className="container overflow-hidden">
  <div className="row gy-2">
    <div className="col-6">
      <div className="p-2 border bg-light">student name</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">Kunal raj</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">Father name</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">Lorem, ipsum.</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light"> Mother name</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">Lorem, ipsum.</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">className</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">5th</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">email</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">lorem@gmail.com</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">phone</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">032145698</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">blood group</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">AB+</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">Address</div>
    </div>
    <div className="col-6">
      <div className="p-2 border bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Student;


  