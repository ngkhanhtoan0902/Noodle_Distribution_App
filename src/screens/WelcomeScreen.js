
import React from "react";
import {
    View,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView
}from 'react-native';

const WelcomeScreen = ({navigation}) =>{
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/image/backGround.png')} style={styles.BG} resizeMode="cover">
                    <View style={styles.header}>
                        <Image style={styles.logo} source={require('../assets/image/logo.png')} resizeMode="contain"/> 
                    </View>
                        <View style={styles.welcome}>
                            <Image style={{width:200, alignItems:'center'}} source={require('../assets/image/textwelcome.png')} resizeMode="contain"/>
                        </View>
                            <View style={styles.frame}>
                               
                                 <Image style={{width:'80%'}} source={require('../assets/image/Frame.png')} resizeMode="contain"/>
                            </View>
                                <View style={styles.follow}>
                                    <Image style={{width:'80%'}} source={require('../assets/image/textfollow.png')} resizeMode="contain"/>
                                </View>
                                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
                                    <TouchableOpacity>
                                        <Image style={styles.qrcode} source={require('../assets/image/qrcode.png')} resizeMode="contain"/>
                                        </TouchableOpacity>
                                            <TouchableOpacity onPress={() => navigation.navigate('Error')}>
                                                    <Image style={styles.nextscreen} source={require('../assets/image/Nextscreen.png')} resizeMode="contain"/>
                                            </TouchableOpacity>
                                </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }  
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    BG: {
        width:'100%',
        height:'100%',
        alignContent:'center',
    },
    header: {
        alignItems: 'center'
    },
    logo: {
        marginTop: 30,
        alignItems:'center',
        height: '35%',
        width: '40%'
    },

    welcome:{ 
        alignItems:'center',
        marginTop:-130,
    },
    frame:{
        alignItems:'center',
        marginTop:-180,
    },
    follow:{
        alignItems:'center',
        marginTop:-180,
    },
    qrcode:{
        marginLeft:120,
        width: 120,
        height: 150,
    },
    nextscreen: {
        width: 65,
        height: 30,
        marginLeft: 40,
        marginTop: 60,
    },
  });
  