import React, { useState, useEffect } from 'react';
import { AsyncStorage, KeyboardAvoidingView, Platform} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import {Background,Title,View,TextLight,Icon} from './styles';

import Movies from '../../components/Movies';
import Loading from '../../components/loading';
export default function Films({ navigation }) {

 
    const movies = navigation.state.params['movies'];
    const api_key = navigation.state.params['api_key'];
    const [loading,setLoading] = useState(false);

    function BackHome (){
      navigation.navigate('Home');
    }

  useEffect(() => {
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
                <Icon onPress={BackHome}>
                  <FontAwesome color="#FF0000" name="chevron-left" type="font-awesome" size={32} />
                </Icon>
               
                <Title>FindMovies</Title>
                <Movies/>
            </View>
            <Loading loading={loading}/>
        </Background>
    </KeyboardAvoidingView>
  );
}
