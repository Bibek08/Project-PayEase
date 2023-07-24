import React from "react";
import { useNavigate } from "react-router-dom";
import admin from "./PageImages/admin.png";
import "../App.css";

const FeeStructure = () => {
  const navigate = useNavigate();

  const handlePayNowClick = () => {
    //navigate to the payment panel
    navigate("/Payments");
  };
  const feeData = [
    {
      id: 1,
      particular: "Admission Fee",
      amount: 10000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 2,
      particular: "Tuition Fee",
      amount: 15000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 3,
      particular: "Library Fee",
      amount: 2000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 4,
      particular: "Id card Fee",
      amount: 2000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 5,
      particular: "Infs Dev. Fee",
      amount: 2000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 6,
      particular: "Library Fee",
      amount: 2000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 7,
      particular: "Internal Exam Fee",
      amount: 2000,
      action: <button className="edit">Edit</button>,
    },
    {
      id: 8,
      particular: "Board Exam Fee",
      amount: 5000,
      action: <button className="edit">Edit</button>,
    },
  ];

  return (
    <>
      {/*....................Top nav bars...................*/}
      <div className="top-nav">
        Good <span>Morning</span>
      </div>
      <div className="container-nav">
        <div className="row">
          <div className="profiletoptext col md-4">Fee Structure</div>
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
      
      {/*....................Rest of the content..................*/}
      <div className="fee-container">
        <div className="table-container">
          <h5>Fee Structure Details</h5>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>S.N</th>
                <th style={styles.th}>Particulars</th>
                <th style={styles.th}>Amount</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item) => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.id}</td>
                  <td style={styles.td}>{item.particular}</td>
                  <td style={styles.td}>{item.amount}</td>
                  <td style={styles.td}>{item.action}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>Total</tfoot>
          </table>
          <div className="paybtn">
            <button className="paynow" onClick={handlePayNowClick}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
    border: "1px solid black",
  },
  th: {
    padding: "10px",
    border: "1px solid black",
    background: "lightskyblue",
  },
  td: {
    padding: "10px",
    border: "1px solid black",
  },
};

export default FeeStructure;
