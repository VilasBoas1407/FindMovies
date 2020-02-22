import React from 'react';
import { FlatList,StyleSheet} from 'react-native';
import { View,Text,Container,WebView} from './styles';


export default function Trailer(props) {
  const { trailer,...attributes } = props;

  function FormatUrl(key){
      const url = "https://www.youtube.com/watch?v=" + key;
      console.log(url);
      return url;
  }
  return (
    <View>
        <FlatList
            data={trailer}
            renderItem={({ item }) => {
            return (       
                    <WebView 
                        source={{uri: FormatUrl(item.key) }}
                    />
                );
            }
          }
        />
    </View>
  )
}

