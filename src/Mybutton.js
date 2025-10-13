/*function Mybutton(props){
    return (
        <button >{props.text}</button>
        );
}
export default Mybutton;
*/
import { useState,useEffect} from 'react';
function Mybutton(){
    const[count,setCount] = useState(0);
    useEffect(function () {
             document.title='Count:${}';

            alert('Count:${}');
        })
    return(
        <div>
            <p> Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}
export default Mybutton;