'use client';
import App from '@/components/App';
import Topbar from '@/components/Topbar';
import './style.css';
import Taskbar from '@/components/Taskbar';
import {useState,useRef,useEffect} from 'react';

export default function Home(){

    const [coords,setCoords]=useState({x:0,y:0})
    const rightClickMenu=useRef<HTMLDivElement|null>(null);

    const clickOutside=(e:MouseEvent)=>{
        if(rightClickMenu.current && !rightClickMenu.current.contains(e.target as Node)){
            rightClickMenu.current.style.display='none';
        }
    };

    useEffect(()=>{
        document.addEventListener("mousedown", clickOutside);
        return () => document.removeEventListener("mousedown", clickOutside);
    },[]);

    const mouseMove=(e:React.MouseEvent)=>{
        setCoords({x:e.clientX,y:e.clientY})
    };
    
    const rightClickMenuPress=()=>{
        if(rightClickMenu.current){
            rightClickMenu.current.style.top=`${coords.y}px`;
            rightClickMenu.current.style.left=`${coords.x}px`;
            rightClickMenu.current.style.display="flex";
        }
    };

    return(
        <>
            <div className='container' onContextMenu={(e) => e.preventDefault()}>
                <Topbar/>
                <div className='desktop' onMouseMove={mouseMove} onContextMenu={rightClickMenuPress}>
                    <App path="/note.png" text="Notes"/>
                    <App path="/settings.png" text="Settings" />
                    <div ref={rightClickMenu} className='rightClickMenu'>
                        <div>
                            <div>Option1</div>
                            <div>Option2</div>
                            <div>Option3</div>
                            <div>Option4</div>
                        </div>
                        <hr></hr>
                        <p>For the browser context menu, right-click on the taskbar.</p>
                    </div>
                </div>
            </div>
            <Taskbar/>
        </>
    );
}