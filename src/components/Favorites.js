import React, {useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Favorites.css';

export default function Favorites(props) {
    
    const [city, setCity] = useState ([]);

    const printWeather = ()=>{
        alert ('not working')
    }
    
    return (
        <div>
            <div className="header">
                <span id="herolo">Herolo Weather Task</span>
                <Link to='/'><button id="homeButton">Home</button></Link>
                <Link to='/favorites'><button id="favButton">Favorites</button></Link>
            </div>
            <div>
            {props.favArr.map ((element)=>{
                if (element.name!=''){
                    return (
                        <button id="favCity" onClick={printWeather}>
                            <p className="p">{element.name}</p><br/>
                            <p className="p">{element.today}</p><br/>
                            <p className="p">{element.infoToday}</p>
                        </button>
                    )
                    
                }
            })}
            </div>

        </div>
    )
}
