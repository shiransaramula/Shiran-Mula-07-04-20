import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import heart from './images/heart.png';

// const DEBUG_prints = true;
export default function Home(props) {

  const [city, setCity] = useState([]);


  const weather = () => {
    var cityWeather;
    const fetchAndLog  = async () => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/?apikey=E5ngOEhdLtpnGE0fJfqTQ8cnHPdZ9uwe&q=${city}&language=en-us`;
        console.log(url);
        const resp = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=E5ngOEhdLtpnGE0fJfqTQ8cnHPdZ9uwe&q=${city}&language=en-us`);
        const response = await  resp.json();
        console.log(response);
        // if there is a chosen city
        if(response.length == 1 && city == response[0]["LocalizedName"])
        {
            const locationKey = response[0]["Key"];
            const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=E5ngOEhdLtpnGE0fJfqTQ8cnHPdZ9uwe&language=en-us&details=false&metric=false`;
            console.log(url);
            // response2- the answer from api
            // response3- make the answer to json
            const response2 = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=E5ngOEhdLtpnGE0fJfqTQ8cnHPdZ9uwe&language=en-us&details=false&metric=false`);
            const response3 = await  response2.json();
            console.log(response3);
            cityWeather = response3["DailyForecasts"];
        }
    }
    // if(city!="")
    //     {
    //         fetchAndLog()
    //     };

        // display Tel Aviv weather by default

    if (city.length == 0 && props.myCity.length == 0) {
      return (
                <div className="city">
                    <p className="myCity"><button className="removeButton" onClick={removeFromFavArr}>X</button>Tel Aviv<br/>38°C</p>                 
                    <button id="addToFavButton" onClick={addToFavArr}>Add to Favorites</button><br/>
                    <br/><br/>
                    <span id="info">Scattered clouds</span><br/>
                    <table>
                    <tr>
                        <td>Sun <br/> 38°C</td>
                        <td>Mon <br/> 37°C</td>
                        <td>Tue <br/> 33°C</td>
                        <td>Wed <br/> 33°C</td>
                        <td>Thu <br/> 35°C</td>
                    </tr>
                    </table>
                </div>
            )
        }
            else {
                
                // if the city exicts- add its details to myCity in app
                // props.cities.map ((element)=>{
                //     if (city==element.name){
                //         props.addMyCity(element);
                //     }
                // })
                
                return (
                    // show the chosen city's weather
                    <div className="city">
                        <p className="myCity"><button className="removeButton" onClick={removeFromFavArr}>X</button>
                        {/* {props.myCity.name} */}
                        {city} <br/> {props.myCity.today} </p>                 
                        <button id="addToFavButton" onClick={addToFavArr}>Add to Favorites</button><br/>
                        <br/><br/>
                        {/* <span id="info">{props.myCity.infoToday}</span><br/> */}
                        <span id="info">{props.myCity.infoToday}</span><br/>

                        <table>
                        <tr>
                            <td>Sun <br/> {props.myCity.sunday}</td>
                            <td>Mon <br/> {props.myCity.monday}</td>
                            <td>Tue <br/> {props.myCity.tuesday}</td>
                            <td>Wed <br/> {props.myCity.wednesday}</td>
                            <td>Thu <br/> {props.myCity.thursday}</td>
                        </tr>
                        </table>
                    </div>
                    
                )
            }
                
            }

    const addToFavArr=()=>{
       props.addToFavArr(props.myCity)
    }

    const removeFromFavArr=()=>{
        props.removeFromFavArr(props.myCity)
    }

    return (
        <div>
            <div className="header">
                <span id="herolo">Herolo Weather Task</span>
                <Link to='/'><button id="homeButton">Home</button></Link>
                <Link to='/favorites'><button id="favButton">Favorites</button></Link>
            </div>
            <div id="tlv">
                <input type="text" placeholder="Tel Aviv" onChange={(c)=> {setCity(c.target.value)}}/> <br/>
                {weather()}
            </div>
        </div>
    )
}
