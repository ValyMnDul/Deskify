'use client';
import App from '@/components/App';
import Topbar from '@/components/Topbar';
import './style.css';
import Taskbar from '@/components/Taskbar';
export default function Home(){
    
    return(
        <>
            <div className='container'>
                <Topbar/>
                <div className='desktop'>
                    <App path="/note.png" text="Notes"/>
                    <App path="/settings.png" text="Settings" />
                </div>
            </div>
            <Taskbar/>
        </>
    );
}