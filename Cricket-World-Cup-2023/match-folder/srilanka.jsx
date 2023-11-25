import { useNavigate } from "react-router-dom"
import { ArrowBarUp } from "react-bootstrap-icons";
import '../CWC2023.css'
import { useEffect, useState } from "react";
import axios from "axios";
import 'flag-icons';

export function SrilankaMatch() {
    const [sri, setsri] = useState({
        sri1: {}, sri2: {}, sri3: {}, sri4: {}, sri5: {},
        sri6: {}, sri7: {}, sri8: {}, sri9: {}
    })
    const navigate = useNavigate()
    function goback() {
        navigate('/matches')
    }
    useEffect(() => {
        axios.get('cwc.json').then((res) => {
            setsri(res.data)
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
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri1.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri1.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri1.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                    <span className="bg-light p-2 h3">{sri.sri1.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri1.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri2.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri2.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri2.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri2.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri2.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri3.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri3.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri3.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                    <span className="bg-light p-2 h3">{sri.sri3.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri3.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri4.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri4.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri4.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                    <span className="bg-light p-2 h3">{sri.sri4.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri4.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri5.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri5.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri5.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                    <span className="bg-light p-2 h3">{sri.sri5.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri5.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri6.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri6.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri6.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri6.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{sri.sri6.team2}</span>
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
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri7.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri7.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri7.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{sri.sri7.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri7.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri8.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri8.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri8.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                    <span className="bg-light p-2 h3">{sri.sri8.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri8.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri9.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{sri.sri9.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{sri.sri9.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{sri.sri9.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{sri.sri9.team2}</span>
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