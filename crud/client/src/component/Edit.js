import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { updatedata } from "./Context/ContextProvider";
const Edit = () => {
  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata.data)

  const { updata, setUPdata } = useContext(updatedata);

  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  console.log(inpval);

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  const Getdata = async () => {
    const resp = await fetch(`http://localhost:4000/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();
    if (resp.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      setINP(data.data);
      // history.push("/")
      // navigate.goback("/")
      // setUPdata(data.data)
      // alert("data added")
      console.log(" get Data");
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  // update user

  const updateuser = async (e) => {
    e.preventDefault();
    const { name, email, age, mobile, work, add, desc } = inpval;
    const resp2 = await fetch(`http://localhost:4000/updateuser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      }),
    });

    const data2 = await resp2.json();
    console.log(data2);
    if (resp2.status === 422 || !data2) {
      console.log("error ");
      alert("fill the data");
    } else {
      // history.push("/")
      navigate("/");
      setUPdata(data2.data);
      alert("data updated");
      console.log("data added");
    }
  };
  return (
    <div className="container">
      {/* <NavLink to="/">Home2</NavLink> */}

      {/* form  */}
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpval.name}
              onChange={setdata}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              type="email"
              value={inpval.email}
              onChange={setdata}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              age
            </label>
            <input
              type="text"
              value={inpval.age}
              onChange={setdata}
              name="age"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              value={inpval.mobile}
              onChange={setdata}
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work
            </label>
            <input
              type="text"
              value={inpval.work}
              onChange={setdata}
              name="work"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"
              value={inpval.add}
              onChange={setdata}
              name="add"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setdata}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" onClick={updateuser} class="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
