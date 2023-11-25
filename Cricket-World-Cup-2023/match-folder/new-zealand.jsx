import { useNavigate } from "react-router-dom"
import { ArrowBarUp } from "react-bootstrap-icons";
import '../CWC2023.css'
import { useEffect, useState } from "react";
import axios from "axios";
import 'flag-icons';

export function NewZealandMatch() {
    const [nz, setnz] = useState({
        nz1: {}, nz2: {}, nz3: {}, nz4: {}, nz5: {},
        nz6: {}, nz7: {}, nz8: {}, nz9: {}
    })
    const navigate = useNavigate()
    function goback() {
        navigate('/matches')
    }
    useEffect(() => {
        axios.get('cwc.json').then((res) => {
            setnz(res.data)
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
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz1.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz1.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz1.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz1.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                    <span className="bg-light p-2 h3">{nz.nz1.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz2.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz2.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz2.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz2.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                    <span className="bg-light p-2 h3">{nz.nz2.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz3.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz3.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz3.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz3.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                    <span className="bg-light p-2 h3">{nz.nz3.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz4.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz4.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz4.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz4.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{nz.nz4.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz5.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz5.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz5.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz5.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{nz.nz5.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz6.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz6.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz6.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz6.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                    <span className="bg-light p-2 h3">{nz.nz6.team2}</span>
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
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz7.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz7.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz7.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz7.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                    <span className="bg-light p-2 h3">{nz.nz7.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz8.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz8.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz8.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz8.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{nz.nz8.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz9.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{nz.nz9.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{nz.nz9.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{nz.nz9.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{nz.nz9.team2}</span>
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