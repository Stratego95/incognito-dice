import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Marble = ({color}) => {
    return(
        <View>
            <View style={{width: 50, height: 50, backgroundColor: color, margin: 5}}></View>
        </View>
    )
};

// const styles = StyleSheet.create({
//     container: {
//         width: 50,
//         height: 50,
//         backgroundColor: {globalStupidColor},
//         margin: 5,
//     },
//   });

export default Marble;