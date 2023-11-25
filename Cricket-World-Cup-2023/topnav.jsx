import './CWC2023.css';
import { NavLink } from 'react-router-dom';
import { TicketFill } from 'react-bootstrap-icons';
import { Home,LiveTv, SportsCricket, Stadium, TableChartTwoTone, } from '@mui/icons-material';

export function Topnav() {
    return (
        <div>
            <div className='container-fluid' id="navhide">
                <div id="nav2">
                    <ul>
                        <li value="home"><NavLink style={{ color: 'white', textDecoration: 'none'}} to="/">{<Home />}</NavLink><br /><tt className="text-white">Home</tt></li>
                        <li value="match"><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/matches">{<SportsCricket />}</NavLink><br /><tt className="text-white">Matches</tt></li>
                        <li value="point"><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/point">{<TableChartTwoTone />}</NavLink><br /><tt className="text-white">Table</tt></li>
                        <li value="venues"><NavLink style={{ color: 'white', textDecoration: 'none' }} to="/venues">{<Stadium />}</NavLink><br /><tt className="text-white">Venues</tt></li>
                        <li> <a style={{ textDecoration: 'none', color: "white" }} href="https://www.hotstar.com/in/home?ref=%2Fin%2Fhome%2Fsports">{<LiveTv />}</a><br /><tt className="text-white">Watch</tt></li>
                        <li className='mb-1' value="ticket"><a style={{ textDecoration: 'none', color: 'white', fontSize: '19.5px' }} href="https://tickets.cricketworldcup.com/explore/c/icc-cricket-world-cup">{<TicketFill  />}</a><br /><tt className="text-white">Ticket</tt></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}