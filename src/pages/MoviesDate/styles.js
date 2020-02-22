import React from 'react'
import styled from 'styled-components/native'

export const Text = styled.Text`
    font-family: Roboto;
    color : #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    margin-left: 45px;
    margin-bottom: 10px;
`;

export const Background = styled.View`
    background-color: #1F1F1F;
    height: 100%;
    width: 100%;
`;

export const View = styled.View`
    width:90%;
    margin-left:10;
    margin-right:10;
`;

export const DadosMovies = styled.View`
    padding-top:100px;
    position:relative;
    height: 100%;
`;

export const Title = styled.Text`
    font-family: Roboto;
    color : #FF0000;
    font-size: 36px;
    font-weight: bold;
    margin-left: 25%;
    margin-top: 22%;
    padding-bottom: 10px;
    position: absolute;
`;

export const Icon = styled.TouchableOpacity`
    margin-left: 10%;
    margin-top: 26%;
`;

export const Imagem = styled.Image`
    height: 400px;
    width: 250px;
    margin-left:40px;
    margin-right:10px;
    margin-bottom:10px;

`;