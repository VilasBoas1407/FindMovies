import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList } from 'react-native';

import {Text,Title,DivTitle,Container,Imagem,Note,Link,TextLink} from './styles';

function Movies({ navigation }) {
   
    const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'
    const movies = navigation.state.params['movies'];
    const list = movies.results;

    async function More (movie){
      navigation.navigate('MoviesDate',{
        movie_selected: movie,
        movies: movies
      });
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
              <DivTitle>
                <Text>{item.overview.substring(0,170)}</Text>
                <Link onPress={() => More(item)}><TextLink>...Saiba Mais</TextLink></Link>
              </DivTitle>
              <Note>Nota: {item.vote_average} Votos : {item.vote_count}</Note>
            </Container>);
        }
      }
      />
    </View>
  )
}


export default withNavigation(Movies);