import axios from "axios";
import '../CWC2023.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "flag-icons";
import { ArrowBarUp } from "react-bootstrap-icons";

export function MatchesCwc() {

    const navigate = useNavigate();
    const [data, setdata] = useState({
        match1: {}, match2: {}, match3: {}, match4: {}, match5: {}, match6: {},
        match7: {}, match8: {}, match9: {}, match10: {}, match11: {}, match12: {}, match13: {}, match14: {}, match15: {}, match16: {},
        match17: {}, match18: {}, match19: {}, match20: {}, match21: {}, match22: {}, match23: {}, match24: {}, match25: {}, match26: {},
        match27: {}, match28: {}, match29: {}, match30: {}, match31: {}, match32: {}, match33: {}, match34: {}, match35: {}, match36: {},
        match37: {}, match38: {}, match39: {}, match40: {}, match41: {}, match42: {}, match43: {}, match44: {}, match45: {}, semifinal: {},
        semifinal2: {}, final: {}
    })
    function changeteam(e) {
        if (e.target.value === "india") {
            navigate('/india')
        } else if (e.target.value === "pak") {
            navigate('/pak')
        } else if (e.target.value === "ban") {
            navigate('/bangla')
        } else if (e.target.value === "afg") {
            navigate('/afghan')
        } else if (e.target.value === "slk") {
            navigate('/lanka')
        } else if (e.target.value === "aus") {
            navigate('/aus')
        } else if (e.target.value === "eng") {
            navigate('/eng')
        } else if (e.target.value === "Nz") {
            navigate('/new')
        } else if (e.target.value === "south") {
            navigate('/africa')

        } else if (e.target.value === "Nd") {
            navigate('/nether')

        } else {
            navigate('/matches')
        }
    }
    

    useEffect(() => {
        axios.get('cwc.json').then((response) => {
            setdata(response.data)
        })
    })
    return (
        <div id="top" className="container-fluid">
            
            <div id="matchshow" className="container-fluid p-1">
                <section className="row">
                    <div id="slt" className="col-2 mt-3">
                        <select onChange={changeteam} style={{ height: "50px" }} className="p-2 bg-white w-100">
                            <option value="value">All Team</option>
                            <option value="india">India</option>
                            <option value="pak">Pakistan</option>
                            <option value="ban">Bangladesh</option>
                            <option value="afg">Afganistan</option>
                            <option value="slk">Sri lanka</option>
                            <option value="aus">Australia</option>
                            <option value="eng">England</option>
                            <option value="Nz">New zealand</option>
                            <option value="south">South Africa</option>
                            <option value="Nd">Netherlands</option>
                        </select>

                    </div>
                    <div  className="card mt-3">
                        <div>
                        <h2 id="cwcmat" style={{ color: '#320073', textIndent: "40px" }} className="fw-bold bg-light p-1 text-center"><span className="bg-light" style={{ color: '#FF00A5' }}>CWC2023</span> MATCHES</h2>
                        </div>
                        <div className="card-header ">
                            <h2 style={{ color: '#FF00A5' }} className="bg-light fw-bold p-1">October <span style={{ color: '#320073' }} className="bg-light">2023 </span></h2>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match1.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match1.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match1.venues}</td>
                                    </tr>
                                    <tr className="d-block bg-white">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match1.team1}</span>
                                        </th>
                                        <th><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span style={{ position: 'relative', bottom: '8px' }} className="bg-light p-2 h3">{data.match1.team2}</span>
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
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match2.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span id="span" className="bg-light p-2 h3">{data.match2.team2}</span>
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
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match3.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match3.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match3.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match3.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match3.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">Bangladesh won by 6 wickets...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75427/ban-vs-afg-3rd-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match4.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match4.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match4.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match4.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match4.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">south africa won by 102 runs...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75434/rsa-vs-sl-4th-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match5.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match5.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match5.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match5.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match5.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">India won by 6 wickets...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75437/ind-vs-aus-5th-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match6.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match6.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match6.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match6.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match6.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">New Zealand won by 99 runs...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75444/nz-vs-ned-6th-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match7.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match7.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match7.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match7.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match7.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">England won by 137 runs...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scores/75451/eng-vs-ban-7th-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match8.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match8.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match8.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match8.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match8.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">pakistan won by 6 wickets...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75462/pak-vs-sl-8th-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match9.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match9.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match9.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match9.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match9.team2}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td><p style={{ textAlign: 'center', display: 'flex' }} className="bg-white mt-3 fw-light">India won by 8 wickets...</p> </td>
                                    </tr>
                                    <tr className="bg-white  my-5">
                                        <td><button className="btn btn-outline-secondary "><a style={{ textDecoration: 'none' }} className="bg-light text-warning" href="https://www.cricbuzz.com/live-cricket-scorecard/75458/ind-vs-afg-9th-match-icc-cricket-world-cup-2023">scorecard</a></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match10.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match10.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match10.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match10.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match10.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match11.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match11.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match11.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match11.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match11.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match12.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match12.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match12.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match12.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match12.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match13.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match13.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match13.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match13.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match13.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match14.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match14.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match14.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match14.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match14.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match15.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match15.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match15.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match15.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match15.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match16.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match16.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match16.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match16.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match16.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match17.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match17.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match17.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match17.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match17.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match18.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match18.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match18.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match18.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match18.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match19.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match19.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match19.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match19.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match19.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match20.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match20.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match20.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match20.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match20.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match21.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match21.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match21.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match21.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match21.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match22.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match22.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match22.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match22.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match22.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match23.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match23.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match23.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match23.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match23.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match24.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match24.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match24.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match24.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match24.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match25.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match25.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match25.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match25.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match25.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match26.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match26.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match26.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match26.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match26.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match27.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match27.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match27.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match27.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match27.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match28.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match28.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match28.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match28.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match28.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match29.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match29.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match29.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match29.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match29.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match30.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match30.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match30.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match30.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match30.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match31.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match31.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match31.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match31.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match31.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-header ">
                            <h2 style={{ color: '#FF00A5' }} className="bg-light fw-bold p-1">November <span style={{ color: '#320073' }} className="bg-light">2023 </span></h2>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match32.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match32.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match32.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match32.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match32.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match33.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match33.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match33.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match33.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match33.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match34.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match34.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match34.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match34.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match34.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match35.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match35.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match35.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match35.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match35.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match36.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match36.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match36.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match36.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match36.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match37.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match37.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match37.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match37.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match37.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match38.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match38.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match38.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match38.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match38.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match39.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match39.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match39.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match39.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match39.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match40.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match40.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match40.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match40.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match40.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match41.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match41.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match41.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.match41.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                            <span className="bg-light p-2 h3">{data.match41.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match42.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match42.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match42.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.match42.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                            <span className="bg-light p-2 h3">{data.match42.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match43.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match43.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match43.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.match43.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                            <span className="bg-light p-2 h3">{data.match43.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match44.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match44.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match44.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                            <span className="bg-light p-2 h3">{data.match44.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                            <span className="bg-light p-2 h3">{data.match44.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match45.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.match45.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.match45.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.match45.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                            <span className="bg-light p-2 h3">{data.match45.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-header ">
                            <h3 style={{ backgroundColor: "#43B2DE" }} className="text-center text-light h5 p-1">SEMI-FINAL</h3>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.semifinal.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.semifinal.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.semifinal.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.semifinal.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                            <span className="bg-light p-2 h3">{data.semifinal.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-body bg-white">
                            <table className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.semifinal2.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.semifinal2.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.semifinal2.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.semifinal2.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                            <span className="bg-light p-2 h3">{data.semifinal2.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-header ">
                            <h3 style={{ backgroundColor: "#7A6500" }} className="text-center text-light h5 p-1">FINAL</h3>
                        </div>
                        <div className="card-body bg-white">
                            <table  className="table bg-light shadow">
                                <tbody>
                                    <tr className="d-flex bg-light justify-content-between">
                                        <td style={{ color: "#320073" }} className="bg-light">{data.final.date}</td>
                                        <td style={{ color: "#320073" }} className="bg-light">{data.final.time}</td>
                                        <td style={{ color: "#320073" }} className="fw-200 bg-light">{data.final.venues}</td>
                                    </tr>
                                    <tr className="d-block ">
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className="bg-light fi fi-in"></span>
                                            <span className="bg-light p-2 h3">{data.final.team1}</span>
                                        </th>
                                        <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                            <span className="bg-light p-2 h3">{data.final.team2}</span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a id="arrow" className="h2 text-light" href="#top"><span>{<ArrowBarUp />}</span></a>
                    </div>
                </section>
            </div>
        </div>
    )
}