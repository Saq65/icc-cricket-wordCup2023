import { useNavigate } from "react-router-dom"
import { ArrowBarUp} from "react-bootstrap-icons";
import '../CWC2023.css'
import { useEffect, useState } from "react";
import axios from "axios";
import 'flag-icons';

export function PakistanMatch() {
    const [pak, setpak] = useState({ pak1: {},pak2:{} ,pak3:{},pak4:{},pak5:{},
                                     pak6:{},pak7:{},pak8:{},pak9:{}})
    const navigate = useNavigate()
    function goback() {
        navigate('/matches')
    }
    useEffect(() => {
        axios.get('cwc.json').then((res) => {
            setpak(res.data)
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
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak1.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak1.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak1.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak1.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nl"></span>
                                    <span className="bg-light p-2 h3">{pak.pak1.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak2.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak2.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak2.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak2.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-lk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak2.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak3.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak3.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak3.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-in"></span>
                                    <span className="bg-light p-2 h3">{pak.pak3.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak3.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak4.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak4.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak4.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-au"></span>
                                    <span className="bg-light p-2 h3">{pak.pak4.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak4.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak5.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak5.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak5.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak5.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-af"></span>
                                    <span className="bg-light p-2 h3">{pak.pak5.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak6.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak6.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak6.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak6.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-za"></span>
                                    <span className="bg-light p-2 h3">{pak.pak6.team2}</span>
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
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak7.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak7.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak7.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak7.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-bd"></span>
                                    <span className="bg-light p-2 h3">{pak.pak7.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak8.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak8.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak8.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-nz"></span>
                                    <span className="bg-light p-2 h3">{pak.pak8.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak8.team2}</span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body bg-white">
                    <table className="table bg-light shadow">
                        <tbody>
                            <tr className="d-flex bg-light justify-content-between">
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak9.date}</td>
                                <td style={{ color: "#320073" }} className="bg-light">{pak.pak9.time}</td>
                                <td style={{ color: "#320073" }} className="fw-200 bg-light">{pak.pak9.venues}</td>
                            </tr>
                            <tr className="d-block ">
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-pk"></span>
                                    <span className="bg-light p-2 h3">{pak.pak9.team1}</span>
                                </th>
                                <th className="d-flex"><span style={{ width: "80px", height: "50px" }} className=" bg-light fi fi-gb-eng"></span>
                                    <span className="bg-light p-2 h3">{pak.pak9.team2}</span>
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