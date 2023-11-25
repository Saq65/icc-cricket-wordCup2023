import { React, useEffect, useState } from "react";
import './CWC2023.css';
import { GeoAltFill, Github, Instagram } from "react-bootstrap-icons";
import cwc1 from './image/cwc2011.jpg';
import cwc2 from './image/1983 world cup.png'
import cwc3 from './image/post_image_453797e.jpg'
import { useNavigate } from "react-router-dom";
import s1 from './venues/vimages/600px-Wankhede_ICC_WCF.webp';
import s2 from './venues/vimages/Rajiv-Gandhi-International-Cricket-Stadium.webp';
import axios from "axios";
import winner from './image/2023-odi-world-cup-winner-australia.webp'


export function CWC() {
  const [data, setdata] = useState({ match1: {}, match2: {} })
  const navigate = useNavigate();
  function viewmore() {
    navigate('/matches')
  }
  function viewmorevenues() {
    navigate('/venues')
  }

  useEffect(() => {
    axios.get('cwc.json').then((res) => {
      setdata(res.data)
    })
  })
  return (
    <div>
      <div id="carousel" className="container">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={winner} className="d-block w-100" alt="cwc-winner-2023" />
            </div>
            <div className="carousel-item active">
              <img src={cwc2} className="d-block w-100" alt="asia-cup-winner" />
            </div>
            <div className="carousel-item">
              <img src={cwc1} className="d-block w-100" alt="2011-world-cup" />
            </div>
            <div className="carousel-item">
              <img src={cwc3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <div className="container-fluid bg-light p-2">
        <h2 style={{ color: '#320073', textIndent: "40px" }} className="fw-bold bg-light p-1"><span className="bg-light" style={{ color: '#FF00A5' }}>CWC2023</span> MATCHES</h2>
        <div className="container-fluid bg-white">
          <div className="card" >
            <div className="card-body bg-white">
              <table className="table bg-light shadow">
                <tbody>
                  <tr className="d-flex bg-light justify-content-between">
                    <td style={{ color: "#320073" }} className="bg-light">{data.match1.date}</td>
                    <td style={{ color: "#320073" }} className="bg-light">{data.match1.time}</td>
                    <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match1.venues}</td>
                  </tr>
                  <tr className="d-block ">
                    <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                      <span className="bg-light p-2 h3">{data.match1.team1}</span>
                    </th>
                    <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                      <span className="bg-light p-2 h3">{data.match1.team2}</span>
                    </th>
                  </tr>
                  <tr>
                    <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">new zealand won by 9 wickets...</p> </td>
                  </tr>
                  <tr className="bg-white  my-5">
                    <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75413/eng-vs-nz-1st-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-body bg-white">
              <table className="table bg-light shadow">
                <tbody>
                  <tr className="d-flex bg-light justify-content-between">
                    <td style={{ color: "#320073" }} className="bg-light">{data.match2.date}</td>
                    <td style={{ color: "#320073" }} className="bg-light">{data.match2.time}</td>
                    <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match2.venues}</td>
                  </tr>
                  <tr className="d-block ">
                    <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                      <span className="bg-light p-2 h3">{data.match2.team1}</span>
                    </th>
                    <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                      <span className="bg-light p-2 h3">{data.match2.team2}</span>
                    </th>
                  </tr>
                  <tr>
                    <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">pakistan won by 81 runs...</p> </td>
                  </tr>
                  <tr className="bg-white  my-5">
                    <td><button className="btn btn-outline-secondary"><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75420/pak-vs-ned-2nd-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={viewmore} id="vm" className="btn btn-primary">View More..</button>
          </div>
          <hr />
          <div className="row d-flex bg-light justify-content-center flex-wrap">
            <h2 style={{ color: '#320073' }} className="fw-bold text-center bg-light p-1"><span className="bg-light" style={{ color: '#FF00A5' }}>CWC2023</span> STADIUM</h2>

            <div id="hi" style={{ width: "280px" }} className="card shadow col-8 p-2 m-2">
              <img src={s1} alt="wankhede" />
              <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center"><span className="p-1" > {<GeoAltFill />}</span> MUMBAI</span>
              <div className="card-body bg-light p-2">
                <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Wankhede Stadium</h5>
                <p className="bg-light">Wankhede Stadium is an international cricket stadium in Mumbai, India.It is owned and...</p>
              </div>
            </div>
            <div id="hi" style={{ width: "280px" }} className="card shadow col-8 p-2 m-2">
              <img src={s2} alt="hyderabad" />
              <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                <span className="p-1" > {<GeoAltFill />}</span> HYDERABAD</span>
              <div className="card-body bg-light p-2">
                <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Rajiv Gandhi Stadium</h5>
                <p className="bg-light">The Rajiv Gandhi International Cricket Stadium, also colloquially known as Hyderabad...</p>
              </div>
            </div>
            <button onClick={viewmorevenues} id="vm" className="btn btn-primary">View More..</button>
          </div>
        </div>
      </div>
      <br />
      <div className="footer text-light">
        <div>
          <tt>Follow me in Github</tt>
          <p><span>{<Github />}</span> <a className="bg-light text-dark" href="https://github.com/Saq65">FOLLOW</a></p>
          <tt>Follow me in Instagram</tt>
          <p><span>{<Instagram />}</span> <a className="bg-light text-dark" href="https://www.instagram.com/__saqlain_shaikh_/">FOLLOW</a></p>
        </div>
      </div>
    </div>
  )
}