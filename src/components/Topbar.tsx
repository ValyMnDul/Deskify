import './Topbar.css';
import { useEffect, useState,useRef } from "react";
export default function Topbar(){

    const dayOption=useRef<HTMLDivElement|null>(null);
    const [dayOptionValue,setDayOptionValue]=useState(true);

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

    const [top,setTop]=useState(false);
    const clock=()=>{
        setTop((p)=>(!p));
    };

    const optionPressed=(input:string)=>{
       switch(input){
            case 'day':
                if(dayOption.current) {
                    if(!dayOptionValue){
                        dayOption.current.style.justifyContent="flex-end";
                        dayOption.current.style.backgroundColor="rgb(176, 98, 98)";
                    }
                    else{
                        dayOption.current.style.justifyContent="flex-start";
                        dayOption.current.style.backgroundColor="aliceblue";
                    }
                }
                setDayOptionValue((p)=>(!p));
       }
    };

    return(
        <div className='topbar'>
            <div className='clock'>
                <p onClick={clock}>{format0(month)}/{format0(day)}/{year} &nbsp; {format0(hour)}:{format0(minute)}:{format0(second)}</p>
                {top ? <div className='topbarMenu'>
                    <div>
                        <div className='topbarOption'>
                            <div ref={dayOption} onClick={()=>{optionPressed('day')}}><div></div></div>
                            <p>Day</p>
                        </div>
                        <div className='topbarOption'>
                            <div><div></div></div>
                            <p>Month</p>
                        </div>
                        <div className='topbarOption'>
                            <div><div></div></div>
                            <p>Year</p>
                        </div>
                    </div>
                    <div>
                        <div className='topbarOption'>
                            <div><div></div></div>
                            <p>Second</p>
                        </div>
                        <div className='topbarOption'>
                            <div><div></div></div>
                            <p>Minute</p>
                        </div>
                        <div className='topbarOption'>
                            <div><div></div></div>
                            <p>Hour</p>
                        </div>

                    </div>
                </div> : null}
            </div>
        </div>
    );
}