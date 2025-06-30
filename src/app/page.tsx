'use client';
import Topbar from '@/components/Topbar';
import './style.css';
import Taskbar from '@/components/Taskbar';
export default function Home(){
    
    return(
        <>
            <div className='container'>
                <Topbar/>
                <div className='desktop'>

                </div>
            </div>
            <Taskbar/>
        </>
    );
}