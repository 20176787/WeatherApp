import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useGlobal} from 'reactn';

function Forecast() {
    const temp = useGlobal('temp');
    const icon = useGlobal('icon');
    const description = useGlobal('description');
    return (
        <View>
            <View style={styles.viewImageIcon}>
                <Image source={{uri: `http://openweathermap.org/img/w/${icon[0]}.png`}}
                       style={styles.imageIcon}/>
            </View>
            <Text style={styles.mainText}>
                Thời tiết hiện tại:{description}
            </Text>
            <Text style={styles.tempText}>
                {temp}°C
            </Text>
        </View>

    );

}
const styles = StyleSheet.create({
    Text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    },
    mainText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    tempText: {
        fontSize: 60,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    viewImageIcon:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageIcon: {
        width: 64,
        height: 64,
    },

});
module.exports = Forecast;
