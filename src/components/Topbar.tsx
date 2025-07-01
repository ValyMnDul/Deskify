import './Topbar.css';
import { useEffect, useState,useRef } from "react";
export default function Topbar(){

    const dayOption=useRef<HTMLDivElement|null>(null);
    const [dayOptionValue,setDayOptionValue]=useState(true);

    const monthOption=useRef<HTMLDivElement |null>(null);
    const [monthOptionValue,setMonthOptionValue]=useState(true);

    const yearOption=useRef<HTMLDivElement|null>(null);
    const [yearOptionValue,setYearOptionValue]=useState(true);

    const secondOption=useRef<HTMLDivElement|null>(null);
    const [secondOptionValue,setSecondOptionValue]=useState(true);

    const minuteOption=useRef<HTMLDivElement|null>(null);
    const [minuteOptionValue,setMinuteOptionValue]=useState(true);

    const hourOption=useRef<HTMLDivElement|null>(null);
    const [hourOptionValue,setHourOptionValue]=useState(true);

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
                break;

            case 'month':
                if(monthOption.current){
                    if(monthOptionValue){
                        monthOption.current.style.justifyContent="flex-start";
                        monthOption.current.style.backgroundColor="aliceblue";
                    }
                    else{
                        monthOption.current.style.justifyContent="flex-end";
                        monthOption.current.style.backgroundColor="rgb(176, 98, 98)";
                    }
                }
                setMonthOptionValue((p)=>(!p));
                break;

            case 'year':
                if(yearOption.current){
                    if(yearOptionValue){
                        yearOption.current.style.justifyContent="flex-start";
                        yearOption.current.style.backgroundColor="aliceblue";
                    }
                    else{
                        yearOption.current.style.justifyContent="flex-end";
                        yearOption.current.style.backgroundColor="rgb(176,98,98)";
                    }
                }
                setYearOptionValue((p)=>(!p));
                break;

            case 'second':
                if(secondOption.current){
                    if(secondOptionValue){
                        secondOption.current.style.justifyContent="flex-start";
                        secondOption.current.style.backgroundColor="aliceblue";
                    }
                    else{
                        secondOption.current.style.justifyContent="flex-end";
                        secondOption.current.style.backgroundColor="rgb(176,98,98)";
                    }
                }
                setSecondOptionValue((p)=>(!p));
                break;
            
            case 'minute':
                if(minuteOption.current){
                    if(minuteOptionValue){
                        minuteOption.current.style.justifyContent="flex-start";
                        minuteOption.current.style.backgroundColor="aliceblue";
                    }
                    else{
                        minuteOption.current.style.justifyContent="flex-end";
                        minuteOption.current.style.backgroundColor="rgb(176,98,98)";
                    }
                }
                setMinuteOptionValue((p)=>(!p));
                break;

            case 'hour':
                if(hourOption.current){
                    if(hourOptionValue){
                        hourOption.current.style.justifyContent="flex-start";
                        hourOption.current.style.backgroundColor="aliceblue";
                    }
                    else{
                        hourOption.current.style.justifyContent="flex-end";
                        hourOption.current.style.backgroundColor="rgb(176,98,98)";
                    }
                }
                setHourOptionValue((p=>(!p)));
                break;
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
                            <div ref={monthOption} onClick={()=>{optionPressed('month')}}><div></div></div>
                            <p>Month</p>
                        </div>
                        <div className='topbarOption'>
                            <div ref={yearOption} onClick={()=>{optionPressed('year')}}><div></div></div>
                            <p>Year</p>
                        </div>
                    </div>
                    <div>
                        <div className='topbarOption'>
                            <div ref={secondOption} onClick={()=>{optionPressed('second')}}><div></div></div>
                            <p>Second</p>
                        </div>
                        <div className='topbarOption'>
                            <div ref={minuteOption} onClick={()=>{optionPressed('minute')}}><div></div></div>
                            <p>Minute</p>
                        </div>
                        <div className='topbarOption'>
                            <div ref={hourOption} onClick={()=>{optionPressed('hour')}}><div></div></div>
                            <p>Hour</p>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    );
}