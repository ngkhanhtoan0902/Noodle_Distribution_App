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
const OutofnoodleScreen = ({navigation}) =>{

    return(
        <SafeAreaView>
            <ImageBackground style={styles.BG} source={require('../assets/image/backGround.png')} resizeMode="cover">
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../assets/image/logo.png')} resizeMode="contain"/> 
                </View>
                    <View>
                        <Text style={styles.textOutof}>OUT OF NOODLES</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.textDetail}>There is</Text>
                        <Text style={{fontSize: 20, fontFamily:'Nunito-Bold', color:'#FFFFFF'}}> 0 </Text>
                        <Text style={styles.textDetail}>cup of noodles left in</Text>
                        <Text style={styles.textDetail}>the machine. Please fill in to continue.</Text>
                    </View>
                    <Image style={styles.cups} source={require('../assets/image/Cups.png')} resizeMode="contain"/>
                                                        
            </ImageBackground>
        </SafeAreaView>
    );
}  

export default OutofnoodleScreen;

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
        marginTop: -10,
        width: '30%'
    },
    textOutof: {
        marginTop: -15,
        fontFamily:'SVN-Nexa Rust Slab Black Shadow',
        fontSize:33,
        color:'#C71A1A',
        alignSelf: 'center',
    },
    viewText: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf:'center',

        width: '60%',
        height:120
       
    },
    textDetail: {
        fontFamily:'Nunito-Bold',
        fontSize: 20,
        color:'#980000',
        alignItems:'center',
        alignContent:'center'
    },
    cups: {
        alignSelf:'center',
        width: 200,
        height: 200,
    },
  });
  