import React from 'react'
import styled from 'styled-components/native'

export const Text = styled.Text`
    font-family: Roboto;
    color : #FFFFFF;
    font-size: 26px;
    font-weight: bold;
    margin-left: 45px;
    margin-bottom: 10px;
`;

export const TextButton = styled.Text`
    font-family: Roboto;
    color : #FFFFFF;
    font-size: 26px;
    font-weight: bold;
`;

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
    margin-top: 40%;
    padding-bottom: 55px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #FF0000;
    border-radius: 2px;
    width: 80%;
    height:50px;
    align-items: center;
    margin-left: 45px;
    margin-top:85px;
    padding-top:5px;
`;

export const TextInput = styled.TextInput`
    height: 36px;
    width: 80%;
    margin-left: 45px;
    margin-bottom: 15px;
    background-color: #F3F3F3;
    border-radius: 5px;
`;
