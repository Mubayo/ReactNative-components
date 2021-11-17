import React, { useState }  from 'react';
import { ImageBackground, Modal, Pressable, View,FlatList, Text, Button, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Alert} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'; 

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
<SafeAreaView>
    <ScrollView showsHorizontalScrollIndicator ={false} horizontal style={{ width:ScreenWidth, height:ScreenHeight*0.25,marginBottom:20,}}>
        <Image style={{width:0.8*ScreenWidth, height:ScreenHeight*0.22, alignSelf:'center', resizeMode:'cover', marginVertical:0.03*ScreenHeight, marginRight:0.03*ScreenWidth,borderRadius:20, backgroundColor:'white', }} source={require('./assets/welcome_background.png')}></Image>
        <Image style={{width:0.8*ScreenWidth, height:ScreenHeight*0.22, alignSelf:'center', resizeMode:'cover', marginVertical:0.03*ScreenHeight, marginRight:0.03*ScreenWidth,borderRadius:20, backgroundColor:'white',  }} source={require('./assets/welcome_background1.png')}></Image>
        <Image style={{width:0.8*ScreenWidth, height:ScreenHeight*0.22, alignSelf:'center', resizeMode:'cover', marginVertical:0.03*ScreenHeight, marginRight:0.05*ScreenWidth,borderRadius:20, backgroundColor:'white', }} source={require('./assets/welcome_background2.png')}></Image>
    </ScrollView>
</SafeAreaView>
