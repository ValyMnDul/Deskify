import './Settings.css';
import { MdOutlineAccessTime } from "react-icons/md";
import {useRef ,useState} from 'react';

export default function Settings(){

    const monthOption = useRef<HTMLDivElement|null>(null);
    const dayOption = useRef<HTMLDivElement|null>(null);
    const yearOption = useRef<HTMLDivElement|null>(null);
    const hourOption = useRef<HTMLDivElement|null>(null);
    const minuteOption = useRef<HTMLDivElement|null>(null);
    const secondOption = useRef<HTMLDivElement|null>(null);

    const [monthOptionValue,setMonthOptionValue]=useState(true);
    const [dayOptionValue,setDayOptionValue]=useState(true);
    const [yearOptionValue,setYearOptionValue]=useState(true);
    const [hourOptionValue,setHourOptionValue]=useState(true);
    const [minuteOptionValue,setMinuteOptionValue]=useState(true);
    const [secondOptionValue,setSecondOptionValue]=useState(true);

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
            </div>
        </div>
    )
}