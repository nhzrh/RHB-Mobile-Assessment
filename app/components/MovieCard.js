import React from 'react';
import PropTypes from "prop-types";
import { View, StyleSheet, ScrollView, Text, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Rating } from 'react-native-elements';

import colors from '../config/colors';

const star = require('../assets/images/star.png')

function MovieCard(props) {

    const { label, mockData, onStarRatingPress } = props

    const onItemClick = (link) => {
        Alert.alert("Pop up", `Link: ${link}`);
    }

    return (
        <View style={{ paddingVertical: 10 }}>
            <Text style={styles.label}>{label}</Text>
            <ScrollView horizontal >
            {mockData.map((data) => {
                return (
                    <View style={styles.movieCard} key={data.id}>
                        <TouchableOpacity onPress={ () => onItemClick(data.link) }>
                            <Image resizeMode="cover" style={styles.moviePoster} source={data.image}/>
                        </TouchableOpacity>
                        <Text style={styles.category}>{data.category}</Text>
                        { data.rating && 
                            <View style={styles.rating}>
                                <Rating
                                    type='custom'
                                    ratingBackgroundColor={colors.grey}
                                    tintColor={colors.bgWhite}
                                    ratingImage={star} ratingCount={5}
                                    imageSize={22} startingValue={data.rating}
                                    onFinishRating={onStarRatingPress}
                                />
                            </View>
                        }
                        <Text onPress={ () => onItemClick(data.id) } style={styles.title}>{data.title}</Text>
                    </View>
                )
            })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 25,
    },
    movieCard: {
        marginLeft: 25,
        paddingRight: 10,
        width: Dimensions.get('window').width * 40 / 100,
    },
    moviePoster: {
        width: Dimensions.get('window').width * 40 / 100,
        height: Dimensions.get('window').width * 30 / 100,
        borderRadius: 12
    },
    category: {
        fontSize: 10,
        textTransform: 'uppercase',
        paddingTop: 8
    },
    rating: { 
        position: 'relative',
        paddingVertical: 5,
        alignSelf: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        width: Dimensions.get('window').width * 40 / 100,
    }
})

MovieCard.propTypes = {
    label: PropTypes.string,
    data: PropTypes.object,
    onStarRatingPress: PropTypes.func
};

MovieCard.defaultProps = {
    label: "",
    data: {}
};

export default MovieCard;