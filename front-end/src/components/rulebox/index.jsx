import './index.css'
import image from './image3.png'
export default function Rulebox(){
    return(<section className='rulebox' >
     <figure>
            <img src = {image} alt="" srcset="" />
            </figure>
    <ul>
        <p><h2><li>Rule 1: Find a cash machine in your area</li></h2></p>
        <p><h2><li>Rule 2: Try to get get all the cash in the machine without getting caught</li></h2></p>
        <p><h2><li>Rule 3: If you get caught by the police then game over</li></h2></p>
        
    </ul>
    </section>)
}