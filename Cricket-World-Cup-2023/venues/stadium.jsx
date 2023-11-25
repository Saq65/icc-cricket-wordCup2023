import { GeoAltFill } from "react-bootstrap-icons";
import s1 from '../venues/vimages/600px-Wankhede_ICC_WCF.webp';
import s2 from '../venues/vimages/Rajiv-Gandhi-International-Cricket-Stadium.webp';
import s3 from '../venues/vimages/Narendra_Modi_Stadium_view_from_the_gallery.webp';
import s4 from '../venues/vimages/Pune_Cricket_Stadium.webp';
import s5 from '../venues/vimages/MA_Chidambaram_Stadium_In_the_Night_during_a_CSK_Game.webp';
import s6 from '../venues/vimages/Chinnaswamy_Stadium_May_2014.webp';
import s7 from '../venues/vimages/Dharamshala_stadium-himachal_pradesh.webp';
import s8 from '../venues/vimages/BRSABV-Ekana-Cricket-Stadium.webp';
import s9 from '../venues/vimages/Arun-Jaitley-Stadium.webp';
import s10 from '../venues/vimages/Eden-Gardens.webp';
import '../CWC2023.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mumbai } from "../city/mumbai";

export function VenuesStadium() {
const [stadium,setstadium] = useState();
const navigate = useNavigate();
     function mum(e){
        if(e.target.id === "mumbai"){
            setstadium(<Mumbai/>)
        }else{
           setstadium(
            navigate("/venues")
           )
        }
     }
    function hyd(e){
        if(e.target.id === "hyderabad"){
            setstadium("yes it is Hydrabad")
        }
    }
    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <h1 className="text-light">{stadium}</h1>
                <div className="row d-flex justify-content-center flex-wrap">
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img onClick={mum} id="mumbai" src={s1} alt="wankhede" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center"><span className="p-1" > {<GeoAltFill />}</span> MUMBAI</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Wankhede Stadium</h5>
                            <p className="bg-light">Wankhede Stadium is an international cricket stadium in Mumbai, India.It is owned and...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img onClick={hyd} id="hyderabad" src={s2} alt="hyderabad" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> HYDERABAD</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Rajiv Gandhi Stadium</h5>
                            <p className="bg-light">The Rajiv Gandhi International Cricket Stadium, also colloquially known as Hyderabad...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s3} alt="Narendra modi stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> AHEMEDABAD</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Narendra Modi Stadium</h5>
                            <p className="bg-light">The Narendra Modi Stadium (formerly known as Motera Stadium) is a cricket stadium...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s4} alt="MCA stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> PUNE</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">MCA International Stadium, Pune</h5>
                            <p className="bg-light">Maharashtra Cricket Association Stadium is a cricket stadium situated in Pune,...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s5} alt="Chennai stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> CHENNAI</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">MA Chidambaram Stadium,Chennai</h5>
                            <p className="bg-light">Muthiah Annamalai Chidambaram Stadium, commonly known as the Chepauk Stadium, is a...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s6} alt="Bengaluru stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> BENGALURU</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">M. Chinnaswamy Stadium, Bengaluru</h5>
                            <p className="bg-light">The Mangalam Chinnaswamy Stadium, also known as Karnataka State Cricket Association...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s7} alt="HPCA stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> DHARAMSALA</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">HPCA Stadium,Dharamsala</h5>
                            <p className="bg-light">Himachal Pradesh Cricket Association Stadium, abbreviated as the HPCA Stadium, is a...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s10} alt="eden gardens stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> KOLKATA</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Eden Gardens, Kolkata</h5>
                            <p className="bg-light">The Eden Gardens is an international cricket stadium in Kolkata, West Bengal, India....</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s8} alt="Delhi stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> LUCKNOW</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">BRSABVE Cricket Stadium, Lucknow</h5>
                            <p className="bg-light">Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium,generally known...</p>
                        </div>
                    </div>
                    <div style={{ width: "280px" }} className="card col-8 p-2 m-2">
                        <img src={s9} alt="Narendra modi stadium" />
                        <span style={{ backgroundColor: '#FF00A5', padding: '2px' }} className="text-light fw-bold text-center">
                            <span className="p-1" > {<GeoAltFill />}</span> DELHI</span>
                        <div className="card-body bg-light p-2">
                            <h5 style={{ color: "#320073" }} className="bg-light text-center p-2 fw-bolder">Arun Jaitley Stadium,Delhi</h5>
                            <p className="bg-light">The Arun Jaitley Stadium is a cricket stadium owned and operated the Delhi &amp; District...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}