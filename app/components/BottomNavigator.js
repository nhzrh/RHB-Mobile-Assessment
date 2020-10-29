import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import colors from '../config/colors';

const CustomButton = ({buttonName, iconName, btnColor}) => {
    return (
        <View style={styles.button}>
            <Icon
                name={iconName}
                type='font-awesome-5'
                color={btnColor}
                onPress={() => console.log(`Change to ${buttonName} Tab`)}
            /> 
            <Text style={[styles.navText, {color: btnColor}]}>{buttonName}</Text>
        </View>
    );
}

class BottomNavigator extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.btnContent}>
                    <CustomButton buttonName="Home" iconName="home" btnColor={colors.gold}/> 
                    <CustomButton buttonName="Ticket" iconName="ticket-alt" btnColor={colors.grey}/> 
                    <View style={styles.floatingButton}>
                        <Icon
                            name='cubes'
                            type='font-awesome-5'
                            color={colors.gold}
                            reverse
                            containerStyle= {{alignSelf: 'center' }}
                            size={28}
                            onPress={() => console.log(`Do something with floating button`)}
                        />
                    </View>   
                    <CustomButton buttonName="Movie" iconName="film" btnColor={colors.secondary}/> 
                    <CustomButton buttonName="Cinema" iconName="theater-masks" btnColor={colors.secondary}/> 
                </View>      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    floatingButton: {
        alignSelf: 'center', 
        backgroundColor: colors.bgWhite, 
        width: 75, 
        height: 75, 
        borderRadius: 35, 
        bottom: 20,
    },
    buttonContainer: {
        position: 'relative',
        backgroundColor: colors.white, 
        bottom: 0, 
        zIndex: 1, 
        width: '100%', 
        height: 65, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        borderTopEndRadius: 18, 
        borderTopStartRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    btnContent: { 
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    button: {
        justifyContent: 'center'
    },
    navText: {
        textTransform: 'uppercase', 
        fontSize: 10, 
        paddingTop: 4 
    }
  });

export default BottomNavigator;