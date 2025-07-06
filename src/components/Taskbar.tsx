import './Taskbar.css';
import {useRef,useState,useEffect} from 'react';

import { LuAlignVerticalDistributeStart } from "react-icons/lu";
import { AiOutlinePoweroff } from "react-icons/ai";
import { PiLockKeyDuotone } from "react-icons/pi";
import { RiRestartLine } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";

export default function Taskbar(){

    const startMenu=useRef<HTMLDivElement|null>(null);
    const startButton=useRef<HTMLDivElement|null>(null);

    const [startValue,setStartValue]=useState(false);

    useEffect(() => {

        const clickOutside = (event: MouseEvent) => {
            const clickedOutsideMenu = startMenu.current && !startMenu.current.contains(event.target as Node);
            const clickedOutsideButton = startButton.current && !startButton.current.contains(event.target as Node);

            if (clickedOutsideMenu && clickedOutsideButton) {
                setStartValue(false);
                if(startMenu.current) startMenu.current.style.display="none";
            }
        };

        document.addEventListener("mousedown", clickOutside);

        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, []);

    const startButtonPress=()=>{
        if(startMenu.current){
            if(startValue===false){
                startMenu.current.style.display="flex";
            }
            else{
                startMenu.current.style.display="none";
            }
            setStartValue((p)=>(!p));
        }
    };

    return (
        <div className="taskbar">
            <div className='start'>
                <div className='startButton' ref={startButton} onClick={startButtonPress}>
                    <LuAlignVerticalDistributeStart/>
                </div>
                <div className='startMenu' ref={startMenu}>
                    <div className='apps'>

                    </div>
                    <div className='control'>
                        <div className='left'>
                            <div onClick={() => window.location.href = "https://google.com"}><AiOutlinePoweroff/></div>
                            <div onClick={() => window.location.reload()}><RiRestartLine/></div>
                            <div><PiLockKeyDuotone/></div>
                        </div>
                        <div className='right'>
                            <div><MdDarkMode/></div>
                            <div><MdDarkMode/></div>
                            <div><MdDarkMode/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}