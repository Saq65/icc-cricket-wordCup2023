import {NavLink } from "react-router-dom";
import './CWC2023.css'
import { Stars,CircleFill } from "react-bootstrap-icons";
import img from './image/cwc.png';
import  "react-icons";
import { Home } from "@mui/icons-material";

export function Nav2() {
    return (
        <div className="container-fluid">
            <div id="fix">
            <div className="container-fluid">
                <p id="name" className=" ps-3 rounded p-1"><i>{<Stars />}</i>saqlain mushtaq</p>
            </div>
            <div style={{ position: 'relative', bottom: "10px" }} id="main" className="container-fluid main shadow">
                <h3 id="cwc-title" className=" p-2"><img id="imglogo" src={img} alt="cwc-logo" />ICC CRICKET WORLD CUP 2023</h3>
            </div>
            </div>
            <div id="nav">
                <ul>
                    <li value="home"><NavLink style={{color:'white',textDecoration:'none'}} to="/">{<Home/>}</NavLink></li>
                    <li value="match"><NavLink style={{color:'white',textDecoration:'none'}}  to="/matches">Matches</NavLink></li>
                    <li value="point"><NavLink style={{color:'white',textDecoration:'none'}}  to="/point">Point Table</NavLink></li>
                    <li value="venues"><NavLink style={{color:'white',textDecoration:'none'}}  to="/venues">Venues</NavLink></li>
                    <li style={{ position: 'relative', bottom: '2px' }}><small style={{ position: "relative", fontSize: "8pt",bottom:'2px' }} className="text-danger">{<CircleFill/>}</small> <a style={{ textDecoration: 'none', color: "white" }} href="https://www.hotstar.com/in/home?ref=%2Fin%2Fhome%2Fsports">Live</a> </li>
                    <li value="ticket"><a style={{ textDecoration: 'none', color: 'white' }} href="https://tickets.cricketworldcup.com/explore/c/icc-cricket-world-cup">Tickets</a></li>
                </ul>
            </div>
        </div>
    )
}