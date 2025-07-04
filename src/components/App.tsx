'use client';
import './App.css';
import { ZIndex } from '@/th1ngs/ZIndex';
import Notes from "@/components/apps/Notes";
import { FaRegWindowMinimize } from "react-icons/fa";
import { PiResizeBold } from "react-icons/pi";
import Image from 'next/image';
import { useRef, useState ,useEffect} from 'react';
export default function App({path,text}:{path:string,text:string}){

    const [position,setPosition]=useState({x:100,y:100});
    const [offset,setOffset]=useState({x:0,y:0});
    const [isDragging,setIsDragging]=useState(false);
    const [zindex,setZindex]=useState(0);

    const mouseDown=(e:React.MouseEvent)=>{
        if(appWindow.current){
            setZindex(ZIndex);
            appWindow.current.style.zIndex = `${ZIndex}`;
            
            setIsDragging(true);
            const rect = appWindow.current.getBoundingClientRect();
            setOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const mouseDownApp=(e:React.MouseEvent)=>{
        if(appWindow.current){
            setZindex(ZIndex);
            appWindow.current.style.zIndex = `${ZIndex}`;
        }
    };

    const mouseMove=(e:MouseEvent)=>{
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
        }
    };

    const mouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };
    });


    const appWindow=useRef<HTMLDivElement|null>(null);

    const appPress = () => {
    if (appWindow.current) {
            setZindex(ZIndex);
            appWindow.current.style.display = "block";
            appWindow.current.style.zIndex = `${ZIndex}`;
        }
    };

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
                return <Notes/>

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
            <div onMouseDown={mouseDownApp} className='appWindow' ref={appWindow} style={{left: `${position.x}px`,top: `${position.y}px`,position: 'absolute',zIndex: zindex}}>
                <div className='windowTopBar' onMouseDown={mouseDown}>
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