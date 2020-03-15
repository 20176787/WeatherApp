import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import ForecastCard from './ForecastCard';

export default function Location() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [forecast,] = useState([]);
    const [error] = useState('');
    const getLocation = () => {
      Geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                getWeather();
            },
            (error)=>console.log(error),
            {enableHighAccuracy:true,timeout:20000,maximumAge:1000}
        );
    };
    const getWeather=()=>{
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=17b3ac29ca8c3bbdc427123e277b022e';
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            forecast.push(data)
        })
    }
    useEffect(()=>{
        getLocation()
    },[])


    return (
        <View>
            <FlatList data={forecast}
                      keyExtractor={forecast.id}
                      renderItem={({item})=>
                      <ForecastCard detail={item} location={forecast.city.name}/>}
                      />
        </View>
    );
}
