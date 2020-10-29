import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet, Dimensions, StatusBar, Image, TextInput  } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../config/colors'

const { width: W } = Dimensions.get('window')

export default function Header() {

    const onChangeText = (text) => {
        console.log("TEXT", text)
    }
    return (
        <View> 
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <LinearGradient
                style={styles.linearGradient}
                colors={['yellow', 'orange']}
                start={{ x: 0.8, y: 0.2 }}
                end={{ x: 0.5, y: 1.0 }}
                locations={[0.1, 0.9]}
            />
            <View style={styles.icon}>
                <Icon
                    name='bars'
                    type='font-awesome-5'
                    color='white'
                    onPress={() => console.log(`Burger button clicked!`)}
                /> 
            </View>
            <Image style={styles.avatar} source={require('../assets/images/avatar.png')}/>
            <View style={styles.textInput}>
                <Icon 
                    name='search'
                    type='font-awesome-5'
                    color={colors.grey}
                    style={{ paddingLeft: 15, paddingTop: 10, alignSelf: 'center',}}
                />
                <TextInput style={{ paddingHorizontal: 15 }} onChangeText={text => onChangeText(text)} placeholder='Search movie title...'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        height: W - 150,
        width: W - 150,
        top: -180,
        alignSelf: 'center',
        borderRadius: 190,
        transform: [{ scaleX: 3 }],
        zIndex: 5
    },
    icon: { 
        position:'absolute', 
        marginHorizontal: 25, 
        marginTop: 25, 
        alignSelf:'flex-start', 
        zIndex: 10 
    },
    avatar: {
        position: 'relative',
        width: Dimensions.get('window').width * 10 / 100,
        height: Dimensions.get('window').width * 10 / 100,
        borderRadius: 30,
        marginHorizontal: 25, 
        marginTop: 25,
        alignSelf: 'flex-end',
        zIndex: 10
    },
    textInput: { 
        flexDirection: 'row',
        position:'absolute', 
        width: 300, 
        height: 48,
        alignSelf: 'center', 
        backgroundColor: 'white', 
        top: 70,
        borderRadius: 20, 
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
})
