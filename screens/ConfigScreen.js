import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { config } from '../data/config';
import { apiUrl } from '../data/utils';

const ConfigScreen = () => {

    const navigation = useNavigation();
    const [configState, setConfigState] = useState(config);

    const handleChangeSelector = () => {
        if(config.selector === 'top_rated') {
            config.selector = 'popular';
        } else if (config.selector === 'popular') {
            config.selector = 'top_rated';
        }
        setConfigState({...config});
        navigation.navigate('Home', {
            apiUrl: `https://api.themoviedb.org/3/movie/${config.selector}?api_key=9e6652e1580b3b6dcf46e8b7348b70c3&language=${config.lang}`
        });
    };

    const handleLanguageChange = () => {
        if(config.lang === 'en-US') {
            config.lang = 'es';
        } else if (config.lang === 'es') {
            config.lang = 'en-US';
        }
        setConfigState({...config});
        navigation.navigate('Home', {
            apiUrl: `https://api.themoviedb.org/3/movie/${config.selector}?api_key=9e6652e1580b3b6dcf46e8b7348b70c3&language=${config.lang}`
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLanguageChange}
                >
                    <Text style={styles.textButton}>
                        {
                            config.lang === 'en-US' ?
                            'Language' :
                            'Lenguaje'
                        }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleChangeSelector}
                >
                    <Text style={styles.textButton}>
                        {
                            (configState.selector === 'popular') ? 
                            'Popular' :
                            'Top rated'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    button: {
        backgroundColor: '#bf42f5',
        textAlign: 'center',
        marginTop: 10,
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        padding: 10,
    }
});

export default ConfigScreen;