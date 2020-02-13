import React from 'react';
import { Modal, StyleSheet} from 'react-native';
import { View, Background } from './styles';
import LottieView  from 'lottie-react-native';

import animation from '../../assets/animations/loading.json';


export default function Loader(props) {
  const { loading,...attributes } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <Background >
        <View>
          <LottieView source={animation} autoPlay resizeMode='contain' style={StyleSheet.create({width:200, height:200})}/>     
        </View>
      </Background>
    </Modal>
  )
}