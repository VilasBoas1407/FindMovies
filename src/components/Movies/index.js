import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList } from 'react-native';

import {Text,Title,DivTitle,Container,Imagem,Note} from './styles';

function Movies({ navigation }) {
   
    const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
    const movies = navigation.state.params['movies'];
    console.log("Movies");
    console.log(movies);
    const list = movies.results;

    function FormatText(string){
      var num_caracter = string.length;
      console.log(num_caracter);
      return num_caracter;
    }
  useEffect(() => {

  }, []);

  return (
    <View>
     <FlatList
        data={list}
        renderItem={({ item }) => {
            return (       
            <Container>
              <Imagem source={{ uri: url_img + item.poster_path }} />
              <DivTitle><Title>{item.title}</Title></DivTitle>
              <Text>{item.release_date}</Text>
              <DivTitle><Text>{item.overview.substring(0,170)}...</Text></DivTitle>
              <Note>Nota: {item.vote_average} Votos : {item.vote_count}</Note>
            </Container>);
        }
      }
      />
    </View>
  )
}


export default withNavigation(Movies);