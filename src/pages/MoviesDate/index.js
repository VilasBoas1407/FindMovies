import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform,ScrollView} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import {Background,Title,View,Icon,Text,DadosMovies,Imagem} from './styles';

import Loading from '../../components/loading';
import Trailer from '../../components/Trailers';
import api from '../../services/api';

export default function Movies({ navigation }) {

  const [loading,setLoading] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [movieOverView,setMovieOverView] = useState('');
  const [movieRelease,setMovieRelease] = useState('');
  const [movieNote, setMovieNote] = useState('');
  const [moviePoster,setMoviePoster] = useState('');
  const [trailers,setTrailer] = useState();

  const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
  const movies = navigation.state.params['movies'];
  const api_key = '385c9b3a003d069a84052c198ad45806';

  async function loadingData(){
    setLoading(true);  
    const movie = navigation.state.params['movie_selected'];
    setMovieName(movie.title);
    setMovieOverView(movie.overview);
    setMovieRelease(movie.release_date);
    setMovieNote(movie.vote_average);
    setMoviePoster(movie.poster_path);
    setLoading(false);
    GetTrailers(movie.id);
  }

  async function GetTrailers (id_movie){
    setLoading(true);
    const response = await api.get('/movie/' + id_movie + '/videos?api_key=' + api_key);
    setTrailer(response.data.results);
    setLoading(false);
  }

  async function Back(){
    navigation.navigate('Films',{
      movies: movies
    });
  }

  useEffect(() => {
    loadingData();
  }, []);


  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Background>
            <View>
              <ScrollView showsHorizontalScrollIndicator={false}>
              <Icon onPress={Back}>
                    <FontAwesome color="#FF0000" name="chevron-left" type="font-awesome" size={32} />
              </Icon>
              <Title>{movieName}</Title>
              <DadosMovies>
                  <Imagem source={{ uri: url_img + moviePoster }} />
                  <Text>Nota: {movieNote} </Text>
                  <Text> Lançamento: {movieRelease}</Text>
                  <Text>Resumo: {movieOverView}</Text>
                  <Text>Trailers:</Text>
                  <Trailer trailer={trailers}/>
              </DadosMovies>
              </ScrollView>
            </View>
            <Loading loading={loading}/>
        </Background>
    </KeyboardAvoidingView>
  );
}
