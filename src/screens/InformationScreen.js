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
const InfomationScreen = ({navigation}) =>{

    return(
        <SafeAreaView>
            <ImageBackground style={styles.BG} source={require('../assets/image/backGround.png')} resizeMode="cover">
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../assets/image/logo.png')} resizeMode="contain"/> 
                </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.textinfor}>INFORMATION</Text>
                    </View>
                        <View style={{alignItems:'center', flexDirection:'row'}}>
                            <Image style={styles.tableInfor}
                                    source={require('../assets/image/Table.png')} 
                                    resizeMode="contain"/>
                                <View style={{alignItems: 'center'}}>
                                    <View style={styles.tableInfor}>
                                        <Image style={styles.avt} 
                                                source={require('../assets/image/avt.png')} resizeMode="contain"/>
                                            <View style={styles.listviewInfor}>
                                                <Text style={styles.txtTitle }>Full Name:</Text>
                                                <Text style={styles.txtTitle }>Birthday:</Text>
                                                <Text style={styles.txtTitle }>Gender:</Text>
                                                <Text style={styles.txtTitle }>Department:</Text>
                                            </View>
                                            <View style={styles.listviewInfor}>
                                                <Text style={styles.txtDetail}>Toan Nguyen</Text>
                                                <Text style={styles.txtDetail}>09/02/2000</Text>
                                                <Text style={styles.txtDetail}>Male</Text>
                                                <Text style={styles.txtDetail}>Design</Text>
                                            </View>
                                </View>
                            </View>
                        </View>
                            <View style={styles.containerNoodle}>
                                <Pressable>
                                    <Image style={styles.sizeNoodle}
                                        source={require('../assets/image/Noodle01.png')} resizeMode="contain"/>
                                </Pressable>
                                <Pressable style={styles.noodle}>
                                    <Image style={styles.sizeNoodle}
                                        source={require('../assets/image/Noodle02.png')} resizeMode="contain"/>
                                </Pressable>
                                <Pressable style={styles.noodle}>
                                    <Image style={styles.sizeNoodle}
                                        source={require('../assets/image/Noodle03.png')} resizeMode="contain"/>
                                </Pressable>

                            </View>
                                <View style={styles.detailsNoodle} >
                                    <Text style={styles.quantity}>3</Text>
                                    <Text style={styles.textNoodle}> cups of noodles left this month</Text>
                                </View>
                                <Pressable style={{alignItems:'center'}}
                                    onPress={() => navigation.navigate('Done')}>
                                    <Image
                                        style={styles.btngetnoodle}
                                        source={require('../assets/image/getnoodle.png')} 
                                        resizeMode="contain"/>  
                                </Pressable>                                     
            </ImageBackground>
        </SafeAreaView>
    );
}  

export default InfomationScreen;

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
        marginTop: 30,
        alignItems:'center',
        height: '35%',
        width: '40%'
    },
    textinfor: {
        alignItems:'center',
        marginTop:-140,
        fontFamily:'SVN-Nexa Rust Slab Black Shadow',
        fontSize:35,
        color:'#C71A1A'
    },
    tableInfor: {
        flexDirection:'row',
        alignItems:'center',
        width: '100%',
        height: 130,
        position:'absolute',
        
    },
    avt: {
        width: 100,
        height: 80,
        marginLeft:40,
        marginTop: -130,
    },
    listviewInfor: {
        marginTop:'-50%',
        width:130,
        height:20
    },
    txtTitle: {
        fontFamily:'Nunito-ExtraBold',
        color:'#880B0B',
        fontSize:17,
       
    },
    txtDetail: {
        lineHeight:23,
        color:'#880B0B',
        fontSize:14,
    },
    containerNoodle: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    sizeNoodle: {
        marginTop:-25,
        width: 130,
        height:'43%',
    },
    detailsNoodle: {
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:-90,
        width: '100%',
    },
    quantity:{
        marginTop: -8,
        fontFamily:'PaytoneOne-Regular',
        color:'#FF0000',
        fontSize:25,
        alignItems:'center'
    },
    textNoodle: {
        fontFamily: 'PaytoneOne-Regular',
    
    },
    btngetnoodle: {
        marginTop: 10,
        width: '70%',
    },
  
  });
  