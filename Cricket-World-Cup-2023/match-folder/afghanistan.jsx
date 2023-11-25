import { useNavigate } from "react-router-dom"
import { ArrowBarUp } from "react-bootstrap-icons";
import '../CWC2023.css'
import { useEffect, useState } from "react";
import axios from "axios";
import 'flag-icons';

export function AfghanistanMatch() {
    const [afg, setafg] = useState({
        afg1: {}, afg2: {}, afg3: {}, afg4: {}, afg5: {},
        afg6: {}, afg7: {}, afg8: {}, afg9: {}
    })
    const navigate = useNavigate()
    function goback() {
        navigate('/matches')
    }
    useEffect(() => {
        axios.get('cwc.json').then((res) => {
            setafg(res.data)
        })
    }, [])
    return (
        <div className="container-fluid">
                        <h3 style={{width:'180px',cursor:'pointer'}} onClick={goback} className="text-light  mx-3 p-1 rounded border mt-2 d-flex justify-content-center">Select Team</h3>
            <div className="card">
                <div className="card-header ">
                    <h2 style={{ color: '#FF00A5' }} className="bg-light fw-bold p-1">October <span style={{ color: '#320073' }} className="bg-light">2023 </span></h2>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg1.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg1.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg1.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                    <span className="bg-light p-2 h3">{afg.afg1.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg1.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg2.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg2.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg2.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{afg.afg2.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg2.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg3.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg3.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg3.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                    <span className="bg-light p-2 h3">{afg.afg3.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg3.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg4.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg4.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg4.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{afg.afg4.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg4.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg5.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg5.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg5.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{afg.afg5.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg5.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg6.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg6.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg6.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg6.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{afg.afg6.team2}</span>
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
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg7.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg7.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg7.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                    <span className="bg-light p-2 h3">{afg.afg7.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg7.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg8.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg8.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg8.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg8.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                    <span className="bg-light p-2 h3">{afg.afg8.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg9.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{afg.afg9.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{afg.afg9.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                    <span className="bg-light p-2 h3">{afg.afg9.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{afg.afg9.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a id="arrow" style={{ position: 'fixed', top: '92%', right: '1%' }} className="h2 text-light" href="#top"><span>{<ArrowBarUp />}</span></a>
            </div>
        </div>
    )
}