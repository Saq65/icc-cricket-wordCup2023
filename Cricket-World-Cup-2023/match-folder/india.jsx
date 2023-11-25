import { useNavigate } from "react-router-dom"
import { ArrowBarUp } from "react-bootstrap-icons";
import '../CWC2023.css'
import { useEffect, useState } from "react";
import axios from "axios";
import 'flag-icons';

export function IndiaMatch() {
    const [ind, setind] = useState({ ind1: {},ind2:{} ,ind3:{},ind4:{},ind5:{},
                                     ind6:{},ind7:{},ind8:{},ind9:{}})
    const navigate = useNavigate()
    function goback() {
        navigate('/matches')
    }
    useEffect(() => {
        axios.get('cwc.json').then((res) => {
            setind(res.data)
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
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind1.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind1.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind1.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind1.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                    <span className="bg-light p-2 h3">{ind.ind1.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind2.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind2.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind2.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind2.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{ind.ind2.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind3.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind3.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind3.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind3.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{ind.ind3.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind4.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind4.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind4.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind4.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                    <span className="bg-light p-2 h3">{ind.ind4.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind5.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind5.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind5.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind5.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{ind.ind5.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind6.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind6.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind6.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind6.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                    <span className="bg-light p-2 h3">{ind.ind6.team2}</span>
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
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind7.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind7.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind7.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind7.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{ind.ind7.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind8.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind8.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind8.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind8.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                    <span className="bg-light p-2 h3">{ind.ind8.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind9.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{ind.ind9.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{ind.ind9.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{ind.ind9.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                    <span className="bg-light p-2 h3">{ind.ind9.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a id="arrow" style={{ position: 'fixed', top: '92%',right:'1%' }} className="h2 text-light" href="#top"><span>{<ArrowBarUp/>}</span></a>
            </div>
        </div>
    )
}