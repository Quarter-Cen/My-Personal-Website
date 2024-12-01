'use client'
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar"

export default function contact(){
    return(
    <>  
        <div className="floating-box"></div>
        <div className="fixed z-50">
            <Navbar currentIndex={1} />
        </div>
        <div className="content">
            <div className="section">
                Under Construct
            </div>
        </div>
    </>
    )
}