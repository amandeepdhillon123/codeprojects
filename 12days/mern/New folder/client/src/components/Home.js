import React, { useState, useEffect, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";
import { adddata, updatedata, deldata } from "./Context/ContextProvider";

const Home = () => {
  const [getuserData, setuserData] = useState([]);
//   console.log(getuserData);

  const { udata, setUdata } = useContext(adddata);
  const { updata, setUPdata } = useContext(updatedata);
  const { dltdata, setDLTdata } = useContext(deldata);

  // get data from api

  const getpdata = async (e) => {
    // e.preventDefault();

    const resp = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    // console.log("amnai" ,data.data)

    if (resp.status === 500 || !data) {
      alert("error");
    } else {
      setuserData(data.data);
    }
  };
  useEffect(() => {
    getpdata();
  }, []);

  //   delete

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    // console.log(deletedata);

    if (res2.status === 500 || !deletedata) {
      console.log("error");
    } else {
      //   console.log("user deleted");
      setDLTdata(deletedata);
      getpdata();
    }
  };

  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name}!</strong> registered successfully
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{updata.name}!</strong> updataed successfully
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      {dltdata ? (
        <>
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{dltdata.name}</strong> deleted succesfully!
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-5">
        <div className="container">
          {/* create add btn  */}
          <div className="add_btn mt-2">
            <NavLink to="/register" className="btn btn-primary">
              <AddIcon /> add data
            </NavLink>
          </div>

          {/* create tables */}

          <table class="table  mt-2">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserData &&
                getuserData.map((ele, id) => (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.work}</td>
                      <td>{ele.number}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink to={`view/${ele._id}`}>
                          <button className="btn btn-success" title="details">
                            <RemoveRedEyeIcon />
                          </button>
                        </NavLink>
                        <NavLink to={`edit/${ele._id}`}>
                          <button className="btn btn-primary" title="edit">
                            <EditIcon />
                          </button>
                        </NavLink>
                        <button
                          className="btn btn-danger"
                          title="delete"
                          onClick={() => deleteuser(ele._id)}
                        >
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
