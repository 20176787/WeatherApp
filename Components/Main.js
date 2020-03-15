import React, {useState,useEffect} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput,} from 'react-native';
import Forecast from './Forecast';
import {setGlobal} from 'reactn';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar, searchBar} from 'react-native-elements';
export default function Main() {
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [city, setCity] = useState('Ha Noi');
    const [city1, setCity1] = useState('');
    const [country, setCountry] = useState('');
    const API_KEY='17b3ac29ca8c3bbdc427123e277b022e'
    const imgURL = 'https://firebasestorage.googleapis.com/v0/b/beemo-mjjepb.appspot.com/o/Beemo.jpg?alt=media&token=c2934782-1492-4ca0-ace1-2b3e75546a95';
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    Image.getSize(imgURL, (width, height) => {
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;
        setImgHeight(screenHeight);
        setImgWidth(screenWidth);
    });
    const handleChangeText=(event)=>{
        setCity(city1)
            fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=Metric&appid='+API_KEY)
                .then((response)=>response.json())
                .then((responseJSON)=>{
                    setCountry(responseJSON.sys.country)
                    console.log(responseJSON)
                    setGlobal({
                        main:responseJSON.weather[0].main,
                        description:responseJSON.weather[0].description,
                        temp:responseJSON.main.temp,
                        icon: responseJSON.weather[0].icon
                    });

                })
                .catch((e)=>{
                    console.log(e)
                })

    }
    return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/beemo-mjjepb.appspot.com/o/Beemo.jpg?alt=media&token=c2934782-1492-4ca0-ace1-2b3e75546a95'}}
                style={{width: imgWidth,height: imgHeight, resizeMode: 'cover', position  : 'absolute',}}/>
            <View style={styles.overlay}>
                <View style={styles.row}>
                    <Text style={styles.bigText}>
                        {city},{country}
                    </Text>
                    {Forecast()}
                    <View style={styles.searchSection}>
                    <TextInput placeholder={'your city........'}
                               value={city1}
                               onChangeText={(city) => {
                                   setCity1(city);
                               }}
                               style={styles.input}
                              />
                    <Icon name={'search'} color={'#fff'} size={24} onPress={handleChangeText} style={{padding:10}}/>
                    </View>
                </View>
            </View>


        </View>

    );

}
const styles = StyleSheet.create({
    container: {
    },
    BackgroundImage: {
        // flex:1,
        width: 50,
        height: 50,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    overlay:{
        position  : 'absolute',
        top       : 0,
        left      : 0,
        right     : 0,

        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
    },
    row: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    bigText: {

        fontSize: 32,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        height: 40,
        width: 40
    },

});
