import './Taskbar.css';
import { LuAlignVerticalDistributeStart } from "react-icons/lu";
import {useRef,useState,useEffect} from 'react';

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
                    
                </div>
            </div>
        </div>
    )
}