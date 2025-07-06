import './Calculator.css';
import { FaDeleteLeft } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaDivide } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEquals } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";

import { useRef } from 'react';

export default function Calculator(){

    const display=useRef<HTMLInputElement|null>(null);

    const keyPress=(input:string)=>{
        if(display.current){
            switch (input){
                case '0':
                    display.current.value=display.current.value+'0';
                    break;

                case '1':
                    display.current.value=display.current.value+'1';
                    break;

                case '2':
                    display.current.value=display.current.value+'2';
                    break;

                case '3':
                    display.current.value=display.current.value+'3';
                    break;

                case '4':
                    display.current.value=display.current.value+'4';
                    break;

                case '5':
                    display.current.value=display.current.value+'5';
                    break;

                case '6':
                    display.current.value=display.current.value+'6';
                    break;

                case '7':
                    display.current.value=display.current.value+'7';
                    break;

                case '8':
                    display.current.value=display.current.value+'8';
                    break;  

                case '9':
                    display.current.value=display.current.value+'9';
                    break;

                case '.':
                    if(!display.current.value.includes('.')){
                        display.current.value=display.current.value+'.';
                    }
                    break;
                
                case '+':
                    if(display.current.value && !display.current.value.endsWith('+') && !display.current.value.endsWith('-') && !display.current.value.endsWith('*') && !display.current.value.endsWith('/')){
                        display.current.value=display.current.value+'+';
                    }
                    break;

                case '-':
                    if(display.current.value && !display.current.value.endsWith('+') && !display.current.value.endsWith('-') && !display.current.value.endsWith('*') && !display.current.value.endsWith('/')){
                        display.current.value=display.current.value+'-';
                    }
                    break;

                case '*':
                    if(display.current.value && !display.current.value.endsWith('+') && !display.current.value.endsWith('-') && !display.current.value.endsWith('*') && !display.current.value.endsWith('/')){
                        display.current.value=display.current.value+'*';
                    }
                    break;

                case '/':
                    if(display.current.value && !display.current.value.endsWith('+') && !display.current.value.endsWith('-') && !display.current.value.endsWith('*') && !display.current.value.endsWith('/')){
                        display.current.value=display.current.value+'/';
                    }
                    break;

                case '%':
                    if(display.current.value && !display.current.value.endsWith('+') && !display.current.value.endsWith('-') && !display.current.value.endsWith('*') && !display.current.value.endsWith('/')){
                        display.current.value=display.current.value+'%';
                    }
                    break;  

                case '=':
                    try {
                        display.current.value=eval(display.current.value.replace(/%/g, '/100')).toString();
                    } catch (error) {
                        display.current.value=`Error:${error}`;
                    }
                    break;

                case 'AC':
                    display.current.value='';
                    break;

                case 'C':
                    if(display.current.value.length > 0){
                        display.current.value=display.current.value.slice(0, -1);
                    }
                    break;

                case '|':
                    if(display.current.value){
                        const value = parseFloat(display.current.value);
                        if (!isNaN(value)) {
                            display.current.value = (value * value).toString();
                        }
                    }
                    break;

                default:
                    console.log('Invalid input');
                    break;

            }
        }
    }


   return(
        <div className='calculator'>
            <div className='display'>
                <input readOnly ref={display}></input>
            </div>
            <div className='keys'>
                <div onClick={()=>{keyPress('AC')}} className='top' style={{fontWeight:600}}>AC</div>
                <div onClick={()=>{keyPress('C')}} className='top'><FaDeleteLeft/></div>
                <div onClick={()=>{keyPress('%')}} className='top' style={{fontWeight:600}}>%</div>
                <div onClick={()=>{keyPress('/')}} className='operator'><FaDivide/></div>

                <div onClick={()=>{keyPress('7')}}>7</div>
                <div onClick={()=>{keyPress('8')}}>8</div>
                <div onClick={()=>{keyPress('9')}}>9</div>
                <div onClick={()=>{keyPress('*')}} className='operator'><FaTimes/></div>

                <div onClick={()=>{keyPress('4')}}>4</div>
                <div onClick={()=>{keyPress('5')}}>5</div>
                <div onClick={()=>{keyPress('6')}}>6</div>
                <div onClick={()=>{keyPress('-')}} className='operator'><FaMinus/></div>

                <div onClick={()=>{keyPress('1')}}>1</div>
                <div onClick={()=>{keyPress('2')}}>2</div>
                <div onClick={()=>{keyPress('3')}}>3</div>
                <div onClick={()=>{keyPress('+')}} className='operator'><FaPlus/></div>

                <div onClick={()=>{keyPress('|')}}><IoIosResize/></div>
                <div onClick={()=>{keyPress('0')}}>0</div>
                <div onClick={()=>{keyPress('.')}}>.</div>
                <div onClick={()=>{keyPress('=')}} className='operator'><FaEquals/></div>
            </div>
        </div>
   ); 
}