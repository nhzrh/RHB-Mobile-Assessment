import React from 'react'
import { View, StyleSheet, ScrollView, Text, Dimensions, Image } from 'react-native';

export default function Location(props) {
    const { label, mockData } = props
    return (
        <View style={{ paddingVertical: 10 }}>
            <Text style={styles.label}>{label}</Text>
            <ScrollView horizontal>
            {mockData.map((data) => {
                return (
                    <View style={styles.container} key={data.id}>
                        <Image resizeMode='cover' source={data.image} style={styles.image} />
                        <Text style={styles.paragraph}>{data.location}</Text>
                    </View >
                )
            })}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 25,
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginLeft: 25,
    },
    image: {
        width: Dimensions.get('window').width * 30 / 100,
        height: Dimensions.get('window').width * 20 / 100,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 12,
    },
    paragraph: {
        flex: 1,
        position: 'absolute',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
