import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Spiner from "../../components/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Select from "react-select";
import "./register.css";
const Register = () => {
  // state for  input values
  const [showspin, setShowSpin] = useState(true);
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  // state for status

  const [status, setStatus] = useState("Active");

  // state for image
  const [image, setImage] = useState("");

  // changing img

  const [preview, setPreview] = useState("");

  // status option
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // console.log(inputdata)

  // console.log(status)
  // console.log(options)
  console.log(image);
  //  seInputValues

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  // setStatus

  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // profile set

  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  //submit user Data
  const submitUserData = (e) => {
    e.preventDefault();
    // validation

    const { fname, lname, email, mobile, gender, location } = inputdata;

    if (fname === "") {
      toast.error("First name is required !");
    } else if (lname === "") {
      toast.error("Last name is Required !");
    } else if (email === "") {
      toast.error("Email is Required !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else if (mobile === "") {
      toast.error("Mobile is Required !");
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!f");
    } else if (gender === "") {
      toast.error("Gender is Required !");
    } else if (status === "") {
      toast.error("Status is Required !");
    } else if (image === "") {
      toast.error("Profile is Required !");
    } else if (location === "") {
      toast.error("location is Required !");
    } else {
      toast.success("successful");
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }

    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [image]);

  return (
    <>
    {
      showspin ? <Spiner/> : <div className="container">
      <h2 className="text-center mt-1">Register your Details</h2>
      <Card className="shadow mt-3 p-3">
        {/*  image */}
        <div className="profile_div text-center">
          <img
            src={
              preview
                ? preview
                : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJEAgQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcBAgj/xABBEAACAQMBBQUDCgUCBgMAAAABAgMABBEFBhIhMUETUWFxgSIyoQcUIzNCYpGxwdEVUlNyguHwFjQ1kqLxJEVU/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgQBAwUABv/EACkRAAICAQMDAwQDAQAAAAAAAAABAgMRBBIhEzFBIjJRBUJhcRUzYiP/2gAMAwEAAhEDEQA/AMepV2lUEHKVdxSxXHHKKaXs5rOrRCaw0+WSE8pWKxofJmIB9Kt2wGxkd5HHqeqwLKrjft7eX3N3+pJ3juXrz48K1OERopeIhyBgzOMAeAHd3AVl6z6nGjKjyxunSuazLsY3B8mm0sxX6K1QHq8+APh+VWnQ/keRzvaxqynvS0TIH+bftWiwMWw32Oe8eZ9OlPXN3uLuoMfnWV/L6ia7pL9Fz0kc4RS7j5GtEuLdlstSu4pseyz7rA+fAVk+0+zeo7M6i1nqUQU845VOVkXoQa+i7W7a3VpJjwH+wPOmdotO03aXTjY6qoBb6qUD2o2PdTek+q5aja+5TZpmvafMNKrJtjshqGy14I7pd+3kz2M68VcD8j4VXMVupprKFDlKu4pCpIOV2kaVcccpV6pVxxyu12u44VxJ5xRfZPRzrWvW1mVzEMyzD7i8SM+PAetCsVfPkyt92HUrk+z2jJBvdyjLPjzylLaq3pUykXUV9SxRNEtVDxboOLVDj2RjtW5cPDoO4CiUEbSOCw9lRwQe6n7mg8N4J3SK3wAgI3uiAd3j3npy8jtmyLGqjgByGOteLsUm8yN2xbVwSljPQcenga8vbpGC8rYHdzJqbbpvLvH2R0FCdodVsdJt3lvZ1iUePtHypiGlbimJqWXgi3Fwm8ZJWEcMWd0ZwF7zk9fGvWnINSm+cyCQRLwjQ+zw7yOYz6dPGqlFcXOvXcciRE2QPCNd3hjkSDwPQ/rV2022gjQAFy3TtDvente6fCjdSr4l3LrPSuD1rVjZ6tp8un6giPbyDHF+KHHNc8jXz7tPoFxs9q0tlP7ae9FKBgSIeR/cd9fQOot2cBcIkijnw5elUTbTSE1bRpJ7YEPbqzqnMDv3e7OMYHUim/p2slVbsk/SxW3TKcNy7mQ0sU6VHSvJFenMwbxXa9GuVxwqVdpVxwsV3FdruKHJJwVftkXZNnkjjyrPLIzPj3RwGfhVFVM1pmzECjZaGTAJkdk9Bx/f8aS17XS5+R/6cs3BLQTmML7oBy2evd6Dh5kirTayCMbznBPEDOd0d9U/SphAz74yM5xyyen5/wDl4UahE91cLbxsRni7Ach1I8fsjyJ6V5+VblbhGxaljLD0FzcXsvY2rBBnDzNxAx5cz8B403qmzmnLG0lwTPPj6ybDH07vSp8IisbZVVOzAGFwMY8qh3DtKvFs9wFalcY1r8mc8t5XYA6QsGn3ptiipHPxiYcMEdMf761Yi2VYEDf5Hhz/AN9Kq+vnGAJMTLxjwOKkcc1Os9VOoaVDfQDLgbk0Y/mHMD9PSkdbVxuLUt0kjzql5Kkbbsh93IbPHH6jz/8AUXSLtLpDFIoVid2RRyZW4ZHdz9PWhmt3m8cLJ7Hvg/H8/wBaFTX5tbSa7hON9GjTwZlI4eR4/wCIquinckhmcVGtsz7cAAxyrwV8KnNHgUw8deqTPNkUiuYp8r4V4K1OSBvHhSr3Xak48YpxVzSAp6NaBsPB7ijrQdiLhZNFu7R/et8yqO8EfviqPCnKjmhXLWN6kw4qQUkA6oeBpPVQ6lTihjTWdK1SLWLUxtDggboBLHkDzB9Mk/40RsrW0vrcJqdzNBayjflRJDGXH2ULDjjHMDmc0zrM0VjaK7jfjlKou79pWwCR4bhY0cbSbTVrBrWZRvjOGxx55rM03HqZs6l7lx2KPqkn8Eux/wALa/cGInLWV1Oky45cFLb2PjRqLaC4t9AfUp40DpkMqE43u7y4ii3/AAh/8ya6luFhWdOzn7FF35V4ZXJHAHAzjjwqBtTaq2zl0tpEBEswwqj+UDNPzalgRhwU64N3qjPLrmqrpsLglLWAHffHH2jzxxHp3V3YbVk0rVJbCUsttdHdIZs7sg4Z9eXoKselaYNc0C0mtpwDA28quAyq2feUHOD34xxqo7YacNLJCyPJOzmaSd/eZyck/jxopxjbDpvyDynn4Cmunc1J7QNxZskA+7k8BXjanS5bCKyiJBgdSyEdSMc/x+NBtkVbVLySa43pXQK2WPPjV7v7OS/0G438s9tKJk4fYcYI9CBSsIqm1RfgZ1E5WUZRm8kOOlR3jAo5c2hXgc5ofNBitRSMVoFMvhTZQ1PeHFMumKsTIIu5Sp7c8KVdkEZAp+Ja8KtSYloWywlW68RRO0jwRUO2TiKK2qcqokw0g/Ep1DSfmRI30BVS39MkFh8OfcTVg2Vv2utPhmLfSbm7J/ep3W+INV7Td5HB4f6Ure7bZzX3hcYs73E0f3GPvD8cH/KkpR8L9mjp7eNrLu8894WUyCNFHM8ielUbanay7tbO402ZLV2d8maEnA6cuefCjmsSXj2EjWRYLuksYwpcD7u8QM8u/wAjVHWyiEKg7OLLNcrmJnkZ2kB4ks+cNy+7VtWHyyZJviKHthNbnileA5VHQYz1I/0xUT5QL0zkRn38GvezsTwXc7xQrFFHwkRySoP3TkkeXEUGvG/i2sSO2REueXQdKtSW/PgB524fck7ETRaffxLcLvQ3RWNm6x8eDD1x+FbVp9qs0jQyYIljaCQ956H4Vh6xiOVRGCAg9kGtz0qXfEMoPF4Y3/y3Qf3pTVr1Rs/JLTjHaZzq1ibeeSNxhkYigFxGMmtJ25sAl/8AOFHszDe9aoV3Eck8KarkZ8kBpVHLFRJVPSiMsZ44FQ5Bgcc0xFlbRE3DSpzcP8x/GlR5IGVFSYQc02q0/EvGgbDwTrdeVGrGPeYChdovEVatAsJLu4jihQszHA/fypeyWCyKLHszoJuoZbl13liU7kfLtHxwHlyqPtbo8Gq6QHxuyAB45F4FDjh5cKv+nW6WdpHBFgrGMZ7z1NBNp7R4LeSaBQYGOWH8jd/kfz86WlF4Ul3RfTNKTT8ma6BrbRudL1bKuAAWPJh/MKNSbPWcsbSfxeZFzkJHulfTIJoHqNjb6jA3aAq8ZyrrwKGqhq38S09YT/EJHiyez3WII9KvhHe+OC6UnELa9cR6WklnbzFzITxJwSKh6FADprzBfbeQhm78Y/c1W2d5Zd52Z2bmzHJq66EFGloq8SpLMvXHQ0dy6dfBND6lnJBdMMx5AAkn0rV9GuDGbVTw7OGPI8Aq5/I/jWcQpHcXixsd1GOD4+AHjV0t2aPU99pAd4DKj7IwP3/Kk7m5QGLILOC07W2vzjSA6rkw9f8Afgay28Xjyx3VsyILuwMR5sn6VkutWz2t1JG4wVY9KOmWUjLksPBX7gAselQZYxj9aIXFQZAfSnEyloj9knePwFcpzA76VHkjA2iU/DHlqUa5xRC1hjUb80ixxjq3XyA4mgbwi1ImaVYTXU8UMKM8jthUUcTWubPaLFo9oFO69y4+lkHJR/KP1rHJtppYrd7TR1a0ikG5LcZ+mkGOWR7g8FOfGrZ8lOsS/NbvSpXLCFt+PJzgNzH4gn1pe2MsZDSNKN4EYoRgcj4V7aUFDvAMhGCDxBHiKEmVT7xGV4HPdUOS/kWTsovaz8KrjLCJ2ZAW0WzEkcsl3o4eWAg9rZgbzp4p/MPDn51lWv8A014ycxHwx+la3tHtOmz1uoP0+oy/U2y8xnkW7h+dVq61HWLeFrnaBdI1uBZRHdQvbDfizngH3V7iMjPEetMVd8slyeMdzOpbVYFBY+1zOOlWrY/TJdX1S1toJmjXszI8igEoAvd144GPGh22Om29hPHc6Y7PpV6pltHbmnH2om+8p+GKN/JBK8muyQJJuO1tKivjO7nd4/Crp8xOzxwSNY0e40i/SK5wol4xSoSEkxzx1B7x07zzovYXRuJmWGIpuxlV3uLOSeZ9fyqJo9i91p2r7I6jhLqEtNalieEq53seB4N5Fj1oHoOr3WlBhcMjDe3WjlPFQDx8c0pOrKe0YhqG+Jmy6PeoyJhgd32W40H240Frk/O7fdyQN7zodpGpWjOLuy3vm0w9pW5ofKrdZ3KzxG3u8GJh7L9CKTqm4Pawbq/vj2MWvLK4jYq8LgqcHC5waH3EEkWO0RlzyyK2faFZ9KswdJtIQv2nIyceZzisv1+8uHhMVy2ZJH3sMTkDpzrQhPIm0AfWlXKVWgkiOMkkIu82DgVHLTR3AkdyZV4qx8Onl0x40QhyjqwbBB51Mv7JJk7VRhe8dDQKXPJdgBXqJ2hMYwjqJEHcDR/5OJSu0TDON6E5x6UBuI3jitFkGGClT+Jo3sDuR7SqGYKTAwUE8zw4VMvayUaRczsH4H2uQobr2sR7N6YJ2Alvp8iCJvizfdHx4VLvbmHTbWa/vyRDCM4A9pj0UeJPAVQTHc7Q6k+p6nlQ/CONeSIOSjw/PietL1pe5lj+EBR84vbt7u6md55G3nlY+0TVg1J7+eJVvCiwzHf3o0CrK3E5JHM8+HiTipbaIFObY75/pyHGfI/ocVItpwUe3uY8LyeJhyx+3wqZ255QcYFfaNHsZtLvDuWs7Bw5H1Eo92QeHRu9SeoFTPknsns9tZYJc9pDBJvqRjDAgY+NTntFX6Ir21ueWeePPvFS9mtPaw1754HzuWLorf1EGCn+S7u6e8bvcaKNycWmDOGCOUuNb2vvL20lMEkdwXilHHdC+ypI6ggDI8TXNp9npZ7l9QtocTMN65to8niObp1ZT1HMdaNbIWwtdLSZuMkwzmiV7dx9i+97RXiAOYI6+dV9R7uCNpnGgzvBqHzSNiI7oELx91hWhaVcQ3dqbR3+kiOEZTxUjrQGx2Tvbr5vcW2FmkOZJGORCCfiTV/i0K0hCvBF9LEpXfHMk880vq6nP1ouhbGMdsiNp15Pbxul/hoV+0aAbT7P2WpA31mqvMo9wnAq03dpvxAOaGx26NceyCgTmVOBSUb7KnyQ4QnyZn/Dbz/8K/h/rSrWeH3qVW/yMvgr6KMXAyMcfQUVXesFVZXV1LshAHusuM+Y44z3g+oyBRJcRoXEYZwN8/Z486sV5eabbLu3MMV3eKjbvDeVH4kBiCFPEnIA48f8tdRyVN4IN/osN9p/bwysWXHZ4yQeILIBjJIBJ4YwcCgHzSex1eSzu8w3cLAIc8yDkEH8DR6HWrkYd915kI7IlQEjA7lAwO/888cwr2KDUW7SU9jcDk45N1Hlx/Op3LGDsPIWv7m6102s9+FFvAPZhX7cuPadviB3DzNT7ZcOoIBJ6DuqHofaCM29/LHHvYAfoP3zVhi0poo+0SQTAjAYLnnSlkscMuj2yMD6YboX6Tmn3/D9qbnSO4RGIGcexJ18jU26spVMaKAGODz5dK8W1tNc3ssaJvZYk44he85qrPGQ0waisnDmM0Y02IM6hRhXUr+IwfzolDZWqItoyiZzxd1HI0btrO3t23kiUk4xw5UUMPnIM58Aiw0qVLSCBFIdEVTgcjjrRa00UNN2t0iHK/aAyKILMwA3Qq+ApxXGOOSfE1d/xjy2LynNnqFIoV3IVAHcBgCuABZCuOGOlNS3EMYOXx34qtaztjDbZisB203IEch69aGzUw+06umc3wFdbvrbT4mkuHG+wwI++qzb6lLLcgOu5C3tbmPiaHRia5nN5qkheUnKRdBRC2sZ7mUsRuqOZHIDurPtak/yaEKo1x5Cfz+072/ClTXzW2/qRf8AfSoej/kr3Q+TIm9xvKvSfVnz/SlSrb8C3k9pTqe+vnXaVCSTI/qn/vX9aueyv1k39v6ClSpS/wBpZ4CN19V+Ne7D/pLf30qVKy9gXg96X7x/uNEjz9KVKhn2Bl7iTb/VivcnuilSqizuVld2h/6dN5D86qGlf80v9xrlKjq7GhpvYwmn/MTedH//AKiTypUqOv8AuQGo/rKPSpUq0zOP/9k="
            }
            alt=""
          />
        </div>

        {/* form  */}

        <Form>
          <Row>
            {/* fistname  */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={inputdata.fname}
                onChange={setInputValue}
                placeholder="Enter FirstName"
              />
            </Form.Group>

            {/* lastname  */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={inputdata.lname}
                onChange={setInputValue}
                placeholder="Enter Last Name"
              />
            </Form.Group>

            {/* Email address  */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputdata.email}
                onChange={setInputValue}
                placeholder="Enter Email"
              />
            </Form.Group>
            {/* mobiel  */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={inputdata.mobile}
                onChange={setInputValue}
                placeholder="Enter Mobile"
              />
            </Form.Group>

            {/* radio button  */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Gender</Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value={"Male"}
                onChange={setInputValue}
              />
              <Form.Check
                type="radio"
                label="female"
                name="gender"
                value={"female"}
                onChange={setInputValue}
              />
            </Form.Group>

            {/* select  */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Status</Form.Label>
              <Select options={options} onChange={setStatusValue} />
            </Form.Group>

            {/* select your profile */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Profile</Form.Label>
              <Form.Control
                type="file"
                name="user_profile"
                onChange={setProfile}
                placeholder="Select Your Profile"
              />
            </Form.Group>

            {/* location     */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter Your Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={inputdata.location}
                onChange={setInputValue}
                placeholder="Enter Your Location"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitUserData}>
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
      <ToastContainer />
    </div>
    }
      
    </>
  );
};

export default Register;
