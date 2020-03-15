import React from 'react';
import {Card, Divider, Text} from 'react-native-elements';
import {Image, View} from 'react-native';
function ForecastCard({detail,location}) {
    return(
        <Card>
            <Text>
                <View>
                    <Image style={{width:100, height:100}} source={{uri:"https://openweathermap.org/img/w/" + detail.weather[0].icon + ".png"}} />
                <Text>Time</Text>
                </View>
                <Divider style={{backgroundColor:'#dfe6e9',marginVertical:20}}/>
            <View>
                <Text>{detail.weather[0].description}</Text>
                <Text>{Math.round(detail.main.temp*10)/10}&#8451;</Text>
            </View>
            </Text>
        </Card>
    )
}
export default (ForecastCard)
