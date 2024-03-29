import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { registerUser } from "../store/actions/actionCreator";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

function RegisterAdmin() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [inputCreate, setInputCreate] = useState({
    username: "",
    password: "",
    email: "",
    RT: "",
  });

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(registerUser(inputCreate))
      .then(() => {
        navigate(`/`);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 400") {
          Swal.fire({
            title: "Invalid Input!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#29b57d",
          });
        }
      });
  };

  return (
    <div
      className="h-full"
      style={{
        backgroundColor: "#eeee",
        minHeight: "100vh",
        paddingBottom: "10px",
      }}
    >
      <Navigation />

      <Card
        className="mx-auto "
        style={{
          width: "40vw",
          marginTop: "15px",
          borderRadius: "10px",
          marginBottom: "50px",
        }}
      >
        <Card.Header
          className="h2 text-white"
          style={{
            background: "#29b57d",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          Register Admin Baru
        </Card.Header>
        <Card.Body className="p-4" style={{ padding: "10px" }}>
          <form
            onSubmit={handleCreate}
            className="flex flex-col mb-4 text-gray-700 text-left"
          >
            <div className="w-full mb-4 text-black">
              <label className="block mb-1 font-semibold">Username</label>
              <input
                onChange={(e) => {
                  setInputCreate({
                    ...inputCreate,
                    username: e.target.value,
                  });
                }}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="w-full mb-4 text-black">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                onChange={(e) => {
                  setInputCreate({
                    ...inputCreate,
                    email: e.target.value,
                  });
                }}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="w-full mb-4 text-black">
              <label className="block mb-1 font-semibold">Password</label>
              <input
                onChange={(e) => {
                  setInputCreate({
                    ...inputCreate,
                    password: e.target.value,
                  });
                }}
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="w-full mb-4 text-black">
              <label className="d-block">Pilih Pulau</label>
              <select
                onChange={(e) => {
                  setInputCreate({
                    ...inputCreate,
                    RT: e.target.value,
                  });
                }}
                defaultValue="blumDiisi"
                className="selectpicker block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="blumDiisi" disabled>
                  Select your option ...
                </option>
                <option value="1">Pulau Pari</option>
                <option value="2">Pulau Tidung</option>
                <option value="3">Pulau Panggang</option>
                <option value="4">Pulau Kelapa</option>
                <option value="5">Pulau Putri</option>
                <option value="6">Pulau Harapan</option>
                <option value="7">Pulau Untung Jawa</option>
                <option value="8">Pulau Lancang Besar</option>
                <option value="9">Pulau Pramuka</option>
              </select>
            </div>

            <button
              className="btn btn-primary btn-lg btn-block mb-2"
              style={{
                background: "#29b57d",
                border: "white",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
          <button
            className="btn btn-danger btn-lg btn-block "
            onClick={() => {
              navigate(`/`);
            }}
          >
            Cancel
          </button>
        </Card.Body>
      </Card>

      <Footer />
    </div>
  );
}

export default RegisterAdmin;
