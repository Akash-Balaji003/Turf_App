import React from 'react';


import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';

export default function FooterHome(){

    function onPressButton(text: string) {
        Alert.alert('You tapped ' + text);
      }
      
    return(
        <View style={styles.navbarFooter}>
            <LinearGradient colors={['#FAFAFA', '#83B4FF']} locations={[0,1]} style={styles.linearGradient}>
                <View style={styles.footerItemHolder}>

                    <TouchableOpacity style={[styles.footerItem, {flex:0.7}]} onPress={()=>onPressButton("Home")}>
                        <Octicons name='home' size={26} color={'#008DFB'} style={{textAlign:'center'}}/>
                        <Text style={styles.Bottom}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.footerItem, {flex:1.3}]} onPress={()=>onPressButton("Tournaments")} >
                        <AntDesign name='calendar' size={26} color={'#008DFB'} style={{textAlign:'center'}}/>
                        <Text style={styles.Bottom}>Tournaments</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.footerItem} onPress={()=>onPressButton("Coaching")}>
                        <FontAwesome5 name='chalkboard-teacher' size={26} color={'#008DFB'} style={{textAlign:'center'}}/>
                        <Text style={styles.Bottom}>Coaching</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.footerItem} onPress={()=>onPressButton("Friends")}>
                        <MaterialCommunityIcons name='account-group-outline' size={26} color={'#008DFB'} style={{textAlign:'center'}} />
                        <Text style={styles.Bottom}>Friends</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
  
    footerItem:{
        flex:1,
    },

    footerItemHolder:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: 360,
        gap:15,
        margin:8,
        marginLeft:5
    },

    Bottom: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'poppins',
        textAlign:'center'
    },
    
    navbarFooter:{
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 360,
        height: 60,
        elevation:8,
    },

    linearGradient: {
        width:360,
        height:60
    }
});