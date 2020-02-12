import React, { useState, useEffect } from 'react';
import { AsyncStorage, KeyboardAvoidingView, Platform, Picker} from 'react-native';

import api from '../../services/api';

import {Background,Title,Text,TextButton,TextInput,Button,View} from './styles';

export default function Login({ navigation }) {

  const [genre_id,setGenre_id] = useState('');
  const [listGenre,setListGenre] = useState(['']);
  
  const api_key = '385c9b3a003d069a84052c198ad45806';
  async function getGenre(){
    console.log("Entrou");
    const response = await api.get('/genre/movie/list?api_key=' + api_key + '&language=pt-BR');
    setListGenre(response.data);
    console.log(response.data);
    console.log("Variavel");
    console.log(listGenre);
  }

  useEffect(() => {
      getGenre();
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
                <Title>FindMovies</Title>
                <Text>Gênero:</Text>
                
                <Text>Ano:</Text>
                <TextInput/>
                <Text>Idioma:</Text>
                <TextInput/>
                <Button>
                    <TextButton>Buscar</TextButton>
                </Button>
            </View>
        </Background>
    </KeyboardAvoidingView>
  );
}
