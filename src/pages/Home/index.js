import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Picker} from 'react-native';

import api from '../../services/api';

import {Background,Title,Text,TextButton,TextInput,Button,View,ViewInput} from './styles';

import Loading from '../../components/loading';

export default function Home({ navigation }) {

  const [genre_id,setGenre_id] = useState('');
  const [listGenre,setListGenre] = useState('');
  const [idioma,setIdioma] = useState('');
  const [ano,setAno] = useState('');
  const [loading,setLoading] = useState(false);
  const api_key = '{SUA_API_KEY}';

  async function getGenre(){

    setLoading(true);
    const response = await api.get('/genre/movie/list?api_key=' + api_key + '&language=pt-BR');
    setListGenre(response.data.genres);

    setLoading(false);
  }

  async function getFilms(){

    setLoading(true);
      try{
        const response = await api.get('/discover/movie?api_key='+ api_key +'&language='+idioma+'&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year='+ ano + '&with_genres=' + genre_id);

        if(response.data){

          setTimeout(function() { 
            setLoading(false);
            navigation.navigate('Films',{
              movies: response.data,
              api_key : api_key
            });
          }, 3000);         
        }
      }
      catch{
        setLoading(false);
      }
  }


  useEffect(() => {
      getGenre();
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
                <Title>FindMovies</Title>
                <Text>Gênero: *</Text>
                <ViewInput>
                  <Picker
                      selectedValue={genre_id}
                      onValueChange={setGenre_id}>
                      {Object.keys(listGenre).map((key) => {
                          return (<Picker.Item label={listGenre[key].name} value={listGenre[key].id} key={key}/>) 
                      })}
                  </Picker>
                </ViewInput>
                <Text>Ano:</Text>
                <TextInput
                  keyboardType={'numeric'}
                  onChangeText={setAno}
                />
                <Text>Idioma:</Text>
                <ViewInput>
                  <Picker
                    selectedValue={idioma}
                    onValueChange={(itemValue, itemIndex) =>
                    setIdioma(itemValue)}
                  >
                      <Picker.Item label="Português" value="pt-BR"/>
                      <Picker.Item label="Inglês" value="en-US"/>
                  </Picker>
                </ViewInput>
                <Button onPress={getFilms}>
                    <TextButton>Buscar</TextButton>
                </Button>
            </View>
            <Loading loading={loading}/>
        </Background>
    </KeyboardAvoidingView>
  );
}
