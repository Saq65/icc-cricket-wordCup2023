import {React} from "react";
import './CWC2023.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { CWC } from "./iccCricketWorldcup";
import { MatchesCwc } from "./match-folder/matches";
import { PointTable } from "./table";
import { VenuesStadium } from "./venues/stadium";
import { IndiaMatch } from "./match-folder/india";
import { PakistanMatch } from "./match-folder/pakistan";
import { BangladeshMatch } from "./match-folder/bangladesh";
import { AfghanistanMatch } from "./match-folder/afghanistan";
import { SrilankaMatch } from "./match-folder/srilanka";
import { AustraliaMatch } from "./match-folder/australia";
import { EnglandMatch } from "./match-folder/england";
import { NewZealandMatch } from "./match-folder/new-zealand";
import { SouthAfricaMatch } from "./match-folder/south";
import { NetherlandsMatch } from "./match-folder/netherlands";
import { Nav2 } from "./nav";
import { Topnav } from "./topnav";

export function CWCMain(){
     
    return(
        <div>
            <BrowserRouter>
             <Nav2 />
            <Routes>
                <Route path={'/'} element={<CWC/>} />
                <Route path={'/matches'} element={<MatchesCwc/>} />
                <Route path={'/point'} element={<PointTable/>} />
                <Route path={'/venues'} element={<VenuesStadium/>} />
                <Route path={'/india'} element={<IndiaMatch/>} />
                <Route path={'/pak'} element={<PakistanMatch/>} />
                <Route path={'/bangla'} element={<BangladeshMatch/>} />
                <Route path={'/afghan'} element={<AfghanistanMatch/>} />
                <Route path={'/lanka'} element={<SrilankaMatch/>} />
                <Route path={'/aus'} element={<AustraliaMatch/>} />
                <Route path={'/eng'} element={<EnglandMatch/>} />
                <Route path={'/new'} element={<NewZealandMatch/>} />
                <Route path={'/africa'} element={<SouthAfricaMatch/>} />
                <Route path={'/nether'} element={<NetherlandsMatch/>} />
            </Routes>
            <Topnav/>
            </BrowserRouter>
        </div>
    )
}