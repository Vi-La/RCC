import React from "react";
import Links from "./Links/Links"
import { useLocation } from "react-router-dom"

const SideBar = ({shownav}) => {
    const location = useLocation()
    let navLinks = [
        {
            id: 1,
            linkName : 'News',
            svgImage : '',
            to:'drivers'
        },
        {
            id: 2,
            linkName : 'Saints',
            svgImage : '',
            to:'buses'
        },
        {
            id: 2,
            linkName : 'Bishops',
            svgImage : '',
            to:'buses'
        },
        {
            id: 2,
            linkName : 'Community',
            svgImage : '',
            to:'buses'
        },
        {
            id: 2,
            linkName : 'Prayer Groups',
            svgImage : '',
            to:'buses'
        }
    ]
    return (
        <div className={`text-2lg text-black  main-bg-gradient h-screen pt-5 px-4 transition-all ${shownav === true ? `` :  `sidebar none-active`}`}>
            <div className="flex items-center justify-center flex-col mt-4 mb-4">
                <div className="logo">
                    {/* <img src={logo} alt="phantom"  /> */}
                </div>
                <div className="logo-name text-mainColor text-1xl font-bold font-sans mt-2 ">
                    RCC
                </div>
            </div>
          
            {/* <img src={line} alt="phantom"  /> */}

            <div className={`nav-bar flex flex-col align-middle justify-center `}>
                <div className="nav-links ">
                    {
                        navLinks.map( (nav , index) => (
                            <Links key={"nav"+index} svgimage={nav.svgImage} linkname={nav.linkName} to={`/${nav.to}`} />
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}
export default SideBar