import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    Pressable,
}from 'react-native';

const DoneScreen = ({navigation}) =>{

    return(
        <SafeAreaView>
            <ImageBackground style={styles.BG} source={require('../assets/image/backGround.png')} resizeMode="cover">
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../assets/image/logo.png')} resizeMode="contain"/> 
                </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.textDone}>DONE</Text>
                    </View>
                            <View style={{alignItems: 'center'}} >
                                    <Image style={styles.doneImage} source={require('../assets/image/DoneImage.png')} resizeMode="contain"/>
                                </View>
                            
                                <View style={styles.enjoysNoodle} >
                                    <Text style={styles.textEnjoyNoodle}>Enjoy your noodles</Text>
                                    <Image style={styles.iconHeart} source={require('../assets/image/Heart.png')} resizeMode="contain"/>
                                </View>
                                
                                <Pressable style={{alignItems:'center'}}
                                    onPress={() => navigation.navigate('Out')}>
                                    <Image
                                        style={styles.btnback}
                                        source={require('../assets/image/Backtohome.png')} 
                                        resizeMode="contain"/>  
                                </Pressable>
                                <Text style={styles.textGetthembl}>Get Them Below</Text>
                                <Image  style={styles.itemBl}
                                        source={require('../assets/image/itemBelow.png')} 
                                        resizeMode="contain"/>                               
            </ImageBackground>
        </SafeAreaView>
    );
}  

export default DoneScreen;

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
        alignItems:'center'
    },
    logo: {
        marginTop: 10,
      
        height: '35%',
        width: '40%'
    },
    textDone: {
    
        marginTop:-150,
        fontFamily:'SVN-Nexa Rust Slab Black Shadow',
        fontSize:35,
        color:'#C71A1A'
    },
    doneImage: {
        width:'100%',
        height:'60%',
        marginTop: -70
    },
    enjoysNoodle: {
        flexDirection:'row',
        justifyContent: 'center'
    },
    textEnjoyNoodle: {
        fontFamily: 'PaytoneOne-Regular',
        color: '#C71A1A',
        fontSize: 26,
        marginTop: '-50%',
        
    },
    iconHeart: {
        width: 40,
        marginTop: -200,
     
    },
    btnback: {
        marginTop: -120,
        width: '70%',
    },
    textGetthembl: {
        fontFamily: 'MPLUS1p-ExtraBold',
        fontSize: 20,
        textAlign: 'center',
        color: '#F8C135'
    },
    itemBl: {
        marginTop: 10,
        width: 30,
        height: 30,
        alignSelf:'center'
    },
  
  });
  