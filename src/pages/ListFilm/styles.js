import React from 'react'
import styled from 'styled-components/native'

export const Background = styled.View`
    background-color: #000000;
    height: 100%;
    width: 100%;
`;

export const View = styled.View`
    width:90%;
    margin-left:10;
    margin-right:10;
`;

export const Title = styled.Text`
    font-family: Roboto;
    color : #FF0000;
    font-size: 36px;
    font-weight: bold;
    margin-left: 25%;
    margin-top: 20%;
    padding-bottom: 55px;
`;

export const TextLight = styled.Text`
    font-family: Roboto;
    color : #FFF;
    font-size: 36px;
    font-weight: bold;
    margin-left: 25%;
    margin-top: 40%;
    padding-bottom: 55px;
`;

export const Icon = styled.TouchableOpacity`
    margin-left: 15%;
    margin-top: 24%;
    position:absolute;
`;