
import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView
}from 'react-native';

const ErrorScreen = ({navigation}) =>{
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/image/backGround.png')} style={styles.BG} resizeMode="cover">
                    <View style={styles.header}>
                        <Image style={styles.logo} source={require('../assets/image/logo.png')} resizeMode="contain"/> 
                    </View>
                        <View style={styles.viewError}>
                            <Text style={styles.textError}>ERROR</Text>
                        </View>
                        <View style={styles.viewCannot}>
                           <Text style={styles.textCannot}>Can not recongnize your ID card.</Text>
                        </View>
                            <View style={styles.note}>
                                <Text style={styles.textNote}>Please scan again.</Text>
                            </View>
                                <View style={{alignItems: 'center'}}>
                                    <Image style={styles.errrorImage} source={require('../assets/image/Errorimage.png')} resizeMode="contain"/>
                                </View>

                                    <View style={{alignItems: 'center'}}>
                                    <Image style={styles.follow} source={require('../assets/image/textfollow.png')} resizeMode="contain"/>
                                    </View>
                                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
                                        <TouchableOpacity>
                                            <Image style={styles.qrcode} source={require('../assets/image/qrcode.png')} resizeMode="contain"/>
                                            </TouchableOpacity>
                                                <TouchableOpacity onPress={() => navigation.navigate('Information')}>
                                                        <Image style={styles.nextscreen} source={require('../assets/image/Nextscreen.png')} resizeMode="contain"/>
                                                </TouchableOpacity>
                                    </View>

                </ImageBackground>
            </SafeAreaView>
        );
    }  
export default ErrorScreen;

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
    viewError: {
        alignItems:'center',
        marginTop:-150
    },
    textError: {
        alignItems:'center',
        fontFamily:'SVN-Nexa Rust Slab Black Shadow',
        fontSize:38,
        color:'#C71A1A'
    },
    viewCannot:{ 
        marginTop: 10,
        alignItems:'center',
    },
    textCannot: {
        fontFamily:'Nunito-Bold',
        color:'#980000',
        fontSize: 20,
    },
    note: {
        marginTop: 5,
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'#D86643',
        height:40,
        width:'40%',
        padding: 10,
        borderRadius: 10,
    },
    textNote: {
        fontSize: 15,
        fontFamily:'Nunito-ExtraBold',
        color:'#FFFFFF'
    },
    errrorImage: {
        alignItems:'center',
        width: '30%',
        marginTop: -100,
    },
    follow:{
        marginTop:-140,
        width: '75%',
    },
    qrcode:{
        marginLeft:120,
        width: 120,
        height: 150,
        marginTop: -40,
    },
    nextscreen: {
        width: 65,
        height: 30,
        marginLeft: 40,
        marginTop: 20,
  
    },
  });
  