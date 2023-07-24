import { useNavigate } from "react-router-dom";
import Imagefront from "./images/Imagefront.jpg";
import "../App.css";
import { Button } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="login-template d-flex justify-content-center align-items-center">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 rowpad">
              <div className="image-container image-animation">
                <img src={Imagefront} alt="front img" className="front-img" />
              </div>
            </div>
            <div className="col-md-6 rowpad">
              <div className="form-container p-1 rounded-end bg-white  ">
                <form>
                  <h3 className="text-center mb-5 text-black">Login Here</h3>
                  <div className="mb-4 text-black">
                    <label htmlFor="email">Username</label>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className=" form-control text-black mb-4"
                    />
                  </div>
                  <div className="mb-5 text-black">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className=" form-control mb-5"
                    />
                  </div>

                  <Button
                    onClick={() => navigate("/Sidebar")}
                  className="loginbutton"
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
