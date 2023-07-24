import React from "react";
import admin from "./PageImages/admin.png";
const Notification = () => {
  return (
    <>
      {/*...................Top nav bars...........*/}
      <div className="top-nav">
        Good <span>Morning</span>
      </div>
      <div className="container-nav">
        <div className="row">
          <div className="profiletoptext col md-4">Notifications</div>
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
      {/*................Rest of the content............*/}
      <div className="notification-container">
        <h4>You will get all the notification here.</h4>
        <h3>Payment Records</h3>
        <div className="pay-detail">
          <h2>Bibek Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <button className="seepaydetail">see details</button>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Yujin Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <button className="seepaydetail">see details</button>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Bhuwan Darai</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <button className="seepaydetail">see details</button>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Kumar Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <button className="seepaydetail">see details</button>
          </p>
        </div>
        <div className="pay-detail">
          <h2>Milan Thapa</h2>
          <p>
            The student has paid his Due amount of this semester. You can
            collect the information from here.{" "}
            <button className="seepaydetail">see details</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
