import axios from "axios";
import { useEffect, useState } from "react";
import './CWC2023.css'

export function PointTable() {
    const [data,setdata] = useState({tablejson:{},tablejson1:{},tablejson2:{},tablejson3:{},tablejson4:{},
                                     tablejson5:{},tablejson6:{},tablejson7:{},tablejson8:{},tablejson9:{}})
 

    useEffect(()=>{
     axios.get('cwc.json').then((res)=>
     setdata(res.data)
     )
    },[])
    return (
        <div className="container-fluid">
            <h2 style={{color:'rgb(50,0,115)'}} className="text-center bg-light p-1">MEN'S CRICKET WORLD CUP 2023</h2>
            <div id="m-table">
                <table className="table table-bordered text-center text-light table-light">
                    <tbody>
                    <tr>
                        <th style={{ backgroundColor: '#FF00A5' }} className="">POS</th>
                        <th style={{ backgroundColor: '#FF00A5' }} className="">TEAM</th>
                        <th style={{ backgroundColor: '#FF00A5' }} className="">PLAYED</th>
                        <th style={{ backgroundColor: '#FF00A5' }} className="">WON</th>
                        <th style={{ backgroundColor: '#FF00A5' }} className="">LOST</th>
                        <th style={{ backgroundColor: '#FF00A5' }} className="">POINTS</th>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">1</td>
                        <td className="bg-light text-dark ">Afghanistan</td>
                        <td className="bg-light text-dark ">{data.tablejson.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">2</td>
                        <td className="bg-light text-dark ">Australia</td>
                        <td className="bg-light text-dark ">{data.tablejson1.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson1.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson1.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson1.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">3</td>
                        <td className="bg-light text-dark ">Bangladesh</td>
                        <td className="bg-light text-dark ">{data.tablejson2.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson2.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson2.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson2.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">4</td>
                        <td className="bg-light text-dark ">England</td>
                        <td className="bg-light text-dark ">{data.tablejson3.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson3.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson3.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson3.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">5</td>
                        <td className="bg-light text-dark ">India</td>
                        <td className="bg-light text-dark ">{data.tablejson4.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson4.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson4.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson4.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">6</td>
                        <td className="bg-light text-dark ">Netherlands</td>
                        <td className="bg-light text-dark ">{data.tablejson5.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson5.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson5.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson5.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">7</td>
                        <td className="bg-light text-dark ">New Zealand</td>
                        <td className="bg-light text-dark ">{data.tablejson6.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson6.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson6.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson6.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">8</td>
                        <td className="bg-light text-dark ">Pakistan</td>
                        <td className="bg-light text-dark ">{data.tablejson7.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson7.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson7.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson7.point}</td>
                    </tr> 
                    <tr>
                        <td className="bg-light text-dark ">9</td>
                        <td className="bg-light text-dark ">South Africa</td>
                        <td className="bg-light text-dark ">{data.tablejson8.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson8.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson8.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson8.point}</td>
                    </tr>
                    <tr>
                        <td className="bg-light text-dark ">10</td>
                        <td className="bg-light text-dark ">Sri Lanka</td>
                        <td className="bg-light text-dark ">{data.tablejson9.play}</td>
                        <td className="bg-light text-dark ">{data.tablejson9.won}</td>
                        <td className="bg-light text-dark ">{data.tablejson9.lost}</td>
                        <td className="bg-light text-dark ">{data.tablejson9.point}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}