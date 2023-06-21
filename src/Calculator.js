import React, {useState, useRef} from 'react';

function Calculator (){
    
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

        function plus(e){
            e.preventDefault();  // to prevent the function from reloading the page, if the button is clicked...
            const inputVal = inputRef.current.value;
            const newResult = result + Number(inputVal);    //i think the Number is to make sure whatsoever we're inputing is a number
            setResult(newResult);
        }
        function minus(e){
            e.preventDefault();  
            const inputVal = inputRef.current.value;
            const newResult = result - Number(inputVal);    
            setResult(newResult);
        }
        function times(e){
            e.preventDefault();  
            const inputVal = inputRef.current.value;
            const newResult = result * Number(inputVal);    
            setResult(newResult);
        }
        function divide(e){
            e.preventDefault();  
            const inputVal = inputRef.current.value;
            const newResult = result / Number(inputVal);    
            setResult(newResult);
        }
        function resetInput(e){
            e.preventDefault();  
            inputRef.current.value = '';
        }
        function resetResult(e){
            e.preventDefault();      
            setResult(0);
        }

    return(
        <>
        <h1>A Basic Calculator</h1>
        <div className="calc-body">
            <form>
                <p ref={resultRef}>
                    Your Answer is {result}
                </p>
                <input
                    pattern="[0-9]" 
                    ref={inputRef} 
                    type="number" 
                    placeholder="Type a number" 
                />
                <button onClick ={plus} className='operate-btn'>add </button>
                <button onClick ={minus} className='operate-btn'>minus</button>
                <button onClick ={times} className='operate-btn'>multiply</button>
                <button onClick ={divide} className='operate-btn'>divide</button>
                <button onClick ={resetInput} className='reset-btn'>Reset Input</button>
                <button onClick ={resetResult} className='reset-btn'>Reset Result</button>
            </form>
        </div>
        </>
    );
}

export default Calculator;