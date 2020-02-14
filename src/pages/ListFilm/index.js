import React, { useState, useEffect } from 'react';
import { AsyncStorage, KeyboardAvoidingView, Platform,Flatlist} from 'react-native';

import api from '../../services/api';

import {Background,Title,View,TextLight} from './styles';

import Movies from '../../components/Movies';
import Loading from '../../components/loading';
export default function Films({ navigation }) {

 
    const movies = navigation.state.params['movies'];
    const api_key = navigation.state.params['api_key'];
    const [loading,setLoading] = useState(false);

    console.log(movies);

  useEffect(() => {
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
                <Title>FindMovies</Title>
                <Movies/>
            </View>
            <Loading loading={loading}/>
        </Background>
    </KeyboardAvoidingView>
  );
}
