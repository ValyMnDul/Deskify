import './App.css';
import { FaRegWindowMinimize } from "react-icons/fa";
import { PiResizeBold } from "react-icons/pi";
import Image from 'next/image';
export default function App({path,text}){
    return (
        <>
            <div className='app'>
                <Image src={path} alt={text} width={60} height={60}/>
                <p>{text}</p>
            </div>
            <div className='appWindow'>
                <div className='windowTopBar'>
                    <Image className='Image' src={path} alt={text} width={22} height={22}/>
                    <p>{text}</p>
                    <div>
                        <div className='windowButton' style={{fontSize:".8em"}}><FaRegWindowMinimize/></div>
                        <div className='windowButton'><PiResizeBold/></div>
                        <div className='windowButton' style={{backgroundColor:"#ba1515"}}>x</div>
                    </div>
                </div>
                <div className='content'>

                </div>
            </div>
        </>
    );
}