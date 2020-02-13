import React, { useState, useEffect } from 'react';
import { AsyncStorage, KeyboardAvoidingView, Platform, Picker,StyleSheet} from 'react-native';

import api from '../../services/api';

import {Background,Title,Text,TextButton,TextInput,Button,View,ViewInput} from './styles';

import Loading from '../../components/loading';
export default function Films({ navigation }) {

 
    const movies = navigation.state.params['movies'];
    const api_key = navigation.state.params['api_key'];
    const [loading,setLoading] = useState(false);
  

  useEffect(() => {
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
                <Title>FindMovies</Title>
            </View>
            <Loading loading={loading}/>
        </Background>
    </KeyboardAvoidingView>
  );
}
