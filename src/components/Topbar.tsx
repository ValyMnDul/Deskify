import './Topbar.css';
import { useEffect, useState } from "react";
export default function Topbar(){

    const format0 = (num:number) => num.toString().padStart(2, '0');

    const [year,setYear]=useState(0);
    const [month,setMonth]=useState(0);
    const [day,setDay]=useState(0);
    const [hour,setHour]=useState(0);
    const [minute,setMinute]=useState(0);
    const [second,setSecond]=useState(0);

    const date=()=>{
        const now=new Date;
        setYear(now.getFullYear());
        setMonth(now.getMonth()+1);
        setDay(now.getDate());
        setHour(now.getHours());
        setMinute(now.getMinutes());
        setSecond(now.getSeconds());
    }

    useEffect(()=>{
        date();

        const refresh=setInterval(() => {
            date();
        }, 1000);

    },[]);

    return(
        <div className='topbar'>
            <div className='clock'>
                <p>{format0(month)}/{format0(day)}/{year} &nbsp; {format0(hour)}:{format0(minute)}:{format0(second)}</p>
                <div className='topbarMenu'>

                </div>
            </div>
        </div>
    );
}