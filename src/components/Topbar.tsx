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
                        dayOption.current.classList.add('optionEnabled');
                    }
                    else{
                        dayOption.current.classList.add('optionDisabled');
                    }
                }
                setDayOptionValue((p)=>(!p));
                break;

            case 'month':
                if(monthOption.current){
                    if(monthOptionValue){
                        monthOption.current.classList.add('optionEnabled');
                    }
                    else{
                        monthOption.current.classList.add('optionDisabled');
                    }
                }
                setMonthOptionValue((p)=>(!p));
                break;

            case 'year':
                if(yearOption.current){
                    if(yearOptionValue){
                        yearOption.current.classList.add('optionEnabled');
                    }
                    else{
                        yearOption.current.classList.add('optionDisabled');
                    }
                }
                setYearOptionValue((p)=>(!p));
                break;

            case 'second':
                if(secondOption.current){
                    if(secondOptionValue){
                        secondOption.current.classList.add('optionEnabled');
                    }
                    else{
                        secondOption.current.classList.add('optionDisabled');
                    }
                }
                setSecondOptionValue((p)=>(!p));
                break;
            
            case 'minute':
                if(minuteOption.current){
                    if(minuteOptionValue){
                        minuteOption.current.classList.add("optionEnabled");
                    }
                    else{
                        minuteOption.current.classList.add("optionDisabled");
                    }
                }
                setMinuteOptionValue((p)=>(!p));
                break;
            case 'hour':
                if(hourOption.current){
                    if(hourOptionValue){
                        hourOption.current.classList.add('optionEnabled');
                    }
                    else{
                        hourOption.current.classList.add('optionDisabled');
                    }
                }
                setHourOptionValue((p=>(!p)));
                break;
        }
    };

    
    return(
        <div className='topbar'>
            <div className='clock'>
                <p onClick={clock}>
                    {monthOptionValue ? (
                        dayOptionValue || yearOptionValue
                        ? format0(month) + '/'
                        : format0(month)
                    ) : null}

                    {dayOptionValue ? (
                        yearOptionValue
                        ? format0(day) + '/'
                        : format0(day)
                    ) : null}

                    {yearOptionValue ? year : null}
                    &nbsp;
                    {hourOptionValue ? (
                        secondOptionValue || minuteOptionValue
                        ? format0(hour) + ':'
                        : format0(hour)
                    ) : null}

                    {minuteOptionValue ? (
                        secondOptionValue
                        ? format0(minute) + ':'
                        : format0(minute)
                    ) : null}

                    {secondOptionValue ? format0(second) : null}
                </p>

                {top ? <div className='topbarMenu'>
                    <div>
                        <div className='topbarOption'>
                            <div className={monthOptionValue ? 'optionEnabled' : 'optionDisabled'} ref={monthOption} onClick={()=>{optionPressed('month')}}><div></div></div>
                            <p>Month</p>
                        </div>
                        <div className='topbarOption'>
                            <div className={dayOptionValue ? 'optionEnabled' : 'optionDisabled'} ref={dayOption} onClick={()=>{optionPressed('day')}}><div></div></div>
                            <p>Day</p>
                        </div>
                        <div className='topbarOption'>
                            <div className={yearOptionValue ? 'optionEnabled' : 'optionDisabled'} ref={yearOption} onClick={()=>{optionPressed('year')}}><div></div></div>
                            <p>Year</p>
                        </div>
                    </div>
                    <div>
                        <div className='topbarOption'>
                            <div className={secondOptionValue ? 'optionEnabled' : 'optionDisabled'} ref={secondOption} onClick={()=>{optionPressed('second')}}><div></div></div>
                            <p>Second</p>
                        </div>
                        <div className='topbarOption'>
                            <div className={minuteOptionValue ? 'optionEnabled' : 'optionDisabled'} ref={minuteOption} onClick={()=>{optionPressed('minute')}}><div></div></div>
                            <p>Minute</p>
                        </div>
                        <div className='topbarOption'>
                            <div className={hourOptionValue ? 'optionEnabled' : 'optionDisabled'} ref={hourOption} onClick={()=>{optionPressed('hour')}}><div></div></div>
                            <p>Hour</p>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    );
}