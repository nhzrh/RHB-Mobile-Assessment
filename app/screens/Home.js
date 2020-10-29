import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView, View } from 'react-native';


import BottomNavigator from '../components/BottomNavigator';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Location from '../components/Location';
import colors from '../config/colors';
import { movie, location } from '../mockData';

const onStarRatingPress = (rating) => {
    console.log("Rating is: " + rating)
}

function Home(props) {

    const movieList = (num) => {
        var items = [];
        for(let i = 0; i < num; i++) {
           items.push(<MovieCard key={i} label={`Movie Category ${i+1}`} mockData={movie} onStarRatingPress={onStarRatingPress}/>)
        }
        return items;
    }

    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Header />
            <ScrollView style={styles.content}>
                <Location label='Cinema around you area' mockData={location}/>
                { movieList(5) }  
                <View style={{paddingBottom: 60}}/>              
            </ScrollView>
            <BottomNavigator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: colors.bgWhite,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    content: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 40,
        marginTop: 20,
    }
  });

export default Home;