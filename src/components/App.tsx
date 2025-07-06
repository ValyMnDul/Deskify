'use client';
import './App.css';

import { useRef, useState ,useEffect} from 'react';
import Image from 'next/image';
import { FaRegWindowMinimize } from "react-icons/fa";
import { PiResizeBold } from "react-icons/pi";

import Notes from "@/components/apps/Notes";
import Settings from './apps/Settings';
import Calculator from './apps/Calculator';
import { ZIndex } from '@/th1ngs/ZIndex';
import { useDynamicRouteParams } from 'next/dist/server/app-render/dynamic-rendering';


export default function App({path,text}:{path:string,text:string}){

    const [position,setPosition]=useState({x:100,y:100});
    const [offset,setOffset]=useState({x:0,y:0});
    const [isDragging,setIsDragging]=useState(false);
    const [zindex,setZindex]=useState(0);
    const appWindow=useRef<HTMLDivElement|null>(null);
    const app=useRef<HTMLDivElement|null>(null);


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
            if(document.fullscreenElement){
                document.exitFullscreen();
            } 
        }
    }

    const sizeButtonPress=()=>{
        if(appWindow.current){
            if(!document.fullscreenElement){
                appWindow.current.requestFullscreen();
            }
            else{
                document.exitFullscreen();
            }
        }
    }

    const minimizeButtonPressed=()=>{

    }

    const apps=()=>{
        switch(text){
            case 'Notes':
                return <Notes/>

            case 'Settings':
                return <Settings/>;

            case 'Calculator':
                if(app.current && appWindow.current) {
                    (app.current?.firstElementChild as HTMLElement).style.width = '80px';
                    (app.current?.firstElementChild as HTMLElement).style.height = '80px';
                    app.current.style.rowGap="1px";
                    app.current.style.fontSize=".9em";
                    app.current.style.transform="TranslateY(-6px)";
                    appWindow.current.style.width="380px";
                }
                return <Calculator/>
        }
    }

    return (
        <>
            <div className='app' onDoubleClick={appPress} ref={app}>
                <Image className='imagine' src={path} alt={text} width={60} height={60}/>
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