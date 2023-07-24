import React from "react";
import "./Payment.css";

const Payments = () => {
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
    <div className="payment-container">
      <div className="row">
        <h4>Payment Panel</h4>
        <div className="paymentMethods">
          <form className="paymentform" onSubmit={handleSubmit}>
            <div className="bill-topnav">
              <h3>AADIKAVI BHANUBHAKTA CAMPUS</h3>
              <p>Estd. : 2004</p>
              <p>vyas-4 Bigyanchaur, Damauli, Tanahun</p>
            </div>
            <div className="from-container">
              <h3>
                {" "}
                <center>BICTE</center>
              </h3>
              <div className="form-content ">
                {/* ...........Student name........ */}
                <div>
                  <label for="name">Student Name :</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="Uname"
                  />
                </div>
                {/* ...............student id ............. */}
                <div>
                  <label for="S_id"> Student Id :</label>
                  <input type="number" name="S-Id" id="s_Id" className="S_id" />
                </div>
                {/* ............student number.................. */}
                <div>
                  <label htmlFor="phone">Phone Number :</label>
                  <input
                    type="number"
                    name="Pnumber"
                    id="Pnumber"
                    className="phoneNumber"
                  />
                </div>
                {/* ............student DOB........ */}
                <div>
                  <label htmlFor="DOB">DOB :</label>
                  <input type="date" name="DOB" id="DOB" className="DOB" />
                </div>
                {/* ............Student email.................. */}
                <div>
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="s-email"
                  />
                </div>
                {/* ..............Gurdian Name................. */}
                <div>
                  <label htmlFor="parent">Guardian Name :</label>
                  <input
                    type="text"
                    name="Guardian"
                    id="Guardian"
                    placeholder="Guardian Name"
                    className="Guardian"
                  />
                </div>
                {/* ..............Guardian number................ */}
                <div>
                  <label htmlFor="G-number">Gurdian Number :</label>
                  <input
                    type="number"
                    name="G-number"
                    id="G-number"
                    className="G-number"
                  />
                </div>
                {/* ............Guardian Number ............. */}
                <div>
                  <label htmlFor="G-email">Guardian Email :</label>
                  <input
                    type="email"
                    name="G-email"
                    id="G-email"
                    placeholder="Guardian Email"
                    className="G-email"
                  />
                </div>
                <button className="savebutton">Save</button>
              </div>
            </div>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </form>
        </div>
        <div className="pay-button">
          <h3 className="methods">Choose your method</h3>
          <button className="upload" onClick={handleFileUpload}>
            + Upload
          </button>
          <button className="qr">QR</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
