import './Settings.css';
import { MdOutlineAccessTime } from "react-icons/md";

export default function Settings(){

    return (
        <div className='settingsApp'>
            <div className='menu'>
                <div>
                    <MdOutlineAccessTime/>
                    <p>Date and Time</p>
                </div>
            </div>
            <div className='settings'>
                <div>
                    <h2>Press the clock)</h2>
                </div>
            </div>
        </div>
    )
}