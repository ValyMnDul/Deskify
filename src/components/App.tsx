'use client';
import './App.css';
import { FaRegWindowMinimize } from "react-icons/fa";
import { PiResizeBold } from "react-icons/pi";
import Image from 'next/image';
import { useRef } from 'react';
export default function App({path,text}:{path:string,text:string}){

    const appWindow=useRef<HTMLDivElement|null>(null);

    let zindex=0;
    const appPress=()=>{
        if(appWindow.current)
        {
            appWindow.current.style.display="block";
            appWindow.current.style.zIndex=`${zindex}`;
            zindex++;
        }
    }

    const exitButtonPress=()=>{
        if(appWindow.current)
        {
            appWindow.current.style.display="none";
        }
    }

    const sizeButtonPress=()=>{

    }

    const minimizeButtonPressed=()=>{

    }

    function apps(){
        switch(text){
            case 'Notes':
                return <div>Notes</div>;

            case 'Settings':
                return <div>Settings</div>;
        }
    }

    return (
        <>
            <div className='app' onDoubleClick={appPress}>
                <Image src={path} alt={text} width={60} height={60}/>
                <p>{text}</p>
            </div>
            <div className='appWindow' ref={appWindow}>
                <div className='windowTopBar'>
                    <Image className='Image' src={path} alt={text} width={22} height={22}/>
                    <p>{text}</p>
                    <div>
                        <div className='windowButton' style={{fontSize:".8em"}} onClick={minimizeButtonPressed}><FaRegWindowMinimize/></div>
                        <div className='windowButton' onClick={sizeButtonPress}><PiResizeBold/></div>
                        <div className='windowButton' style={{backgroundColor:"#ba1515"}} onClick={exitButtonPress}>x</div>
                    </div>
                </div>
                <div className='content'>
                    {apps()}
                </div>
            </div>
        </>
    );
}