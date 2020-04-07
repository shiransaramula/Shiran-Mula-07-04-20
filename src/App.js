import React, {useState} from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Favorites from './components/Favorites';



function App() {
  const [cities, setCities] = useState ([{name: 'Tel Aviv', today: '33°C', infoToday: 'sunny', sunday: '30°C', infoSunday: 'sunny', monday: '29°C', infoMonday: 'haze', tuesday: '30°C', infoTuesday: 'sunny', wednesday: '33°C', infoWednesday: 'hot', thursday: '29°C', infoThursday: 'sunny'},
  {name: 'Eilat', today: '37°C', infoToday: 'hot', sunday: '34°C', infoSunday: 'sunny', monday: '31°C', infoMonday: 'haze', tuesday: '30', infoTuesday: 'nice', wednesday: '33°C', infoWednesday: 'haze', thursday: '29°C', infoThursday: 'sunny'},
  {name: 'Jerusalem', today: '30°C', infoToday: 'sunny', sunday: '27°C', infoSunday: 'cloudy', monday: '29°C', infoMonday: 'nice', tuesday: '30°C', infoTuesday: 'haze', wednesday: '32°C', infoWednesday: 'sunny', thursday: '28°C', infoThursday: 'nice'},
  {name: 'Ashkelon', today: '28°C', infoToday: 'nice', sunday: '30°C', infoSunday: 'sunny', monday: '27°C', infoMonday: 'foggy', tuesday: '28°C', infoTuesday: 'sunny', wednesday: '30°C', infoWednesday: 'humid', thursday: '26°C', infoThursday: 'cloudy'},
  {name: 'Haifa', today: '28°C', infoToday: 'sunny', sunday: '29°C', infoSunday: 'nice', monday: '29°C', infoMonday: 'haze', tuesday: '29°C', infoTuesday: 'sunny', wednesday: '30°C', infoWednesday: 'humid', thursday: '27°C', infoThursday: 'nice'}
])
const [myCity, setMyCity] = useState([]);
const [favArr, setFavArr] = useState ([]);
const [flag, setFlag] = useState (true);
const [tempArr, setTempArr] = useState ([]);

const addMyCity=(e)=>{
  setMyCity (e)
}

const addToFavArr = (e) => {
  let alreadySaved = false;
  favArr.map((element) => {
    if (e.name == element.name) {
      alreadySaved = true;
      alert(e.name + " has already been saved as favorite");
    }
  });
  if (!alreadySaved) {
    setFavArr([...favArr,{ name: e.name, today: e.today, infoToday: e.infoToday}]);
  } 
}


const removeFromFavArr=(e)=>{
  favArr.map ((element) => {
    if (e.name !== element.name) {
      tempArr.push (element);
    }
  })
  if (tempArr.length === favArr.length){
    alert (e.name+' is not in favorites')
  }
  else {
    setFavArr (tempArr);
    alert (e.name+ ' has removed from favorites');
  }
  setTempArr ([]);
}

const printWeather=(e)=>{
  setMyCity(e);
}

  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path='/' component={()=>{return <Home cities={cities} myCity={myCity} addMyCity={addMyCity} addToFavArr={addToFavArr} removeFromFavArr={removeFromFavArr} />}}/>
              <Route exact path='/favorites' component={()=>{return <Favorites  myCity={myCity} favArr={favArr} printWeather={printWeather} />}}/>
            </Switch>
      </Router>
      
    </div>
  );
}

export default App;
