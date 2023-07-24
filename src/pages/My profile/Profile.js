import React from "react";
import BoyStudent from "../PageImages/BoyStudent.png";
import admin from "../PageImages/admin.png";
import "./profile.css";
function Profile() {
  //for uploading photo ...........
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the selected file using event.target.elements.fileInput.files[0]
  };

  const handleFileUpload = () => {
    // Handle file upload logic here
    // You can trigger the file selection by accessing the file input element and calling its click() method
    document.getElementById("fileInput").click();
  };

  return (
    <>
      {/*.....................top nav bars..................*/}
      <div className="top-nav">
        Good <span>Morning</span>
      </div>
      <div className="container-nav">
        <div className="row">
          <div className="profiletoptext col md-4">Profile</div>
          <div className="col md-4 d-felx justify-content-center align-item-center">
            <input
              type="text"
              placeholder="search here"
              className="searchbox"
            />
          </div>
          <div className="col md-4 offset-md-7">
            <div className="imgrole">
              <img
                src={admin}
                alt="admin"
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6>Bhuwan Darai</h6>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*................Rest of the content................*/}
      <div className="profile-container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <div className="profile">
              <img
                src={BoyStudent}
                alt="Bhuwan"
                style={{ width: "100px", height: "100px" }}
              />
              <h5>Bhuwan Darai</h5>
              <h5>Admin</h5>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleSubmit}
              />

              <button className="uploadbutton" onClick={handleFileUpload}>
                Upload Image
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <form className="profile-detail">
                <div className="profile-detail-content">
                  <h4>My Detail</h4>
                  <div className="main-detail">
                    <div>
                      <p>Name : Bhuwan Darai</p>
                      <p>Address : Vyas-5 Pateni</p>
                      <p>Contact number : 9817125049</p>
                      <p>DOB : 2055/3/12</p>
                    </div>
                    <div>
                      <p>Gender : Male</p>
                      <p>Email : bhuwan23@gmail.com</p>
                      <p>Social sites : </p>
                      <div class="social-links">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="fb">
                            <i class="fab fa-facebook"></i> Facebook
                          </button>
                        </a>
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="twit">
                            <i class="fab fa-twitter"></i> Twitter
                          </button>
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="insta">
                            <i class="fab fa-instagram"></i> Instagram
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
