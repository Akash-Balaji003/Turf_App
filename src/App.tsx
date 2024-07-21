import React, { useEffect, useRef, useState } from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";

import {
    ActivityIndicator,
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    TouchableWithoutFeedback,
    useColorScheme,
    View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FooterHome from './components/HomeFooter';

type Location = {
    Loc_id: number;
    Loc_Name: string;
    Price: number;
    Rating: number;
}

function App(): React.JSX.Element {

    const [location, setLocation] = useState('Chennai');
    const [data, setData] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const searchInputRef = useRef<TextInput>(null);

    // Function that happens when the screen is opened
    useEffect(() => {
        fetchData();
    }, []);

    // Fetching data using API
    const fetchData = async () => {
        try {
            const response = await fetch('https://hchjn6x7-8000.inc1.devtunnels.ms/test'); // Use your own API
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to fetch data');
            setLoading(false);
        }
    };

    // When the search icon is clicked it routes to TextInput
    const handleSearchIconPress = () => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };

    // Test function
    function Press() {
        Alert.alert('Work in progress...');
    }

    return (
        <SafeAreaView>
            <LinearGradient colors={['#83B4FF', '#FFFFFF']} locations={[0.6,1]} style={styles.linearGradient}>

                <View style={styles.Location}>
                    <View>
                        <Text style={styles.Your_Loc}>YOUR LOCATION</Text>
                        <View style={styles.Location_Container}>
                            <Ionicons name='location-outline' size={26} color={'#008DFB'}/>
                            <Text style={{fontSize:23, marginLeft:-2}}>{location}</Text>
                        </View>
                    </View>

                    <View style={{alignSelf:'center'}}>
                        <Image
                            source={require('../src/images/test1.jpeg')} // Here we have given the image locally but we have to get it from the user
                            style={styles.Image_style}
                        />
                    </View>
                </View>

                <View style={styles.SeachBar_Filter_Container}>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={{color: 'black',
                            height:42,
                            width: 265,
                            borderRadius:15,
                            opacity:0.5,
                            backgroundColor:'#cee0f2',
                            fontSize: 18,
                            paddingLeft: 10}} 
                            placeholderTextColor='grey'
                            textAlign='left'
                            placeholder="Search..."
                            ref={searchInputRef}
                        />
                        <TouchableOpacity onPress={handleSearchIconPress}>
                            <AntDesign name='search1' size={26} color={'#008DFB'} style={{ textAlign: 'center', marginTop: 8, marginLeft: -35 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.filter} onPress={Press}>
                        <AntDesign name='filter' size={26} color={'#008DFB'} style={{textAlign:'center', marginTop:10, opacity:1}}/>
                    </TouchableOpacity>
                </View>
                
                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#008DFB" />
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                ) : (
                    <ScrollView>
                        {data.map((location) => (
                            <View key={location.Loc_id} style={styles.LocCard}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.CardTitle}>{location.Loc_Name}</Text>
                                    <View style={styles.Ratings}>
                                        <AntDesign name='star' size={16} color={'#FFE500'} style={{margin:3}} />
                                        <Text style={styles.Rating_Text}>{location.Rating}</Text>
                                    </View>
                                </View>

                                <ScrollView horizontal={true} style={{margin:5}}>
                                    <Image
                                        source={require('../src/images/turf1.jpeg')} // Here we have given the image locally but we have to get it from the DB
                                        style={styles.CardImage_style}
                                    />
                                    <Image
                                        source={require('../src/images/turf2.jpeg')} // Here we have given the image locally but we have to get it from the DB
                                        style={styles.CardImage_style}
                                    />
                                    <Image
                                        source={require('../src/images/turf3.jpeg')} // Here we have given the image locally but we have to get it from the DB
                                        style={styles.CardImage_style}
                                    />
                                    <Image
                                        source={require('../src/images/turf4.jpeg')} // Here we have given the image locally but we have to get it from the DB
                                        style={styles.CardImage_style}
                                    />
                                </ScrollView>

                                <View style={styles.Price_Btn_Container}>
                                    <View style={styles.Icon_Price_Container}>
                                        <FontAwesome name='rupee' size={20} color={'#FAFAFA'} style={{textAlign:'center', marginTop:10}}/>
                                        <Text style={styles.Price}>{location.Price}</Text>
                                    </View>

                                    <TouchableOpacity>
                                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#008DFB', '#005495']} style={styles.Book_Btn}>
                                            <Text style={styles.Book_Btn_Text}>Book now</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>                        
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                )}
                <FooterHome/>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    linearGradient: {
        width:360,
        height:720
    },

    LocCard:{
        backgroundColor:'#3560A4',
        height:275,
        width:325,
        borderRadius:15,
        alignSelf:'center',
        marginTop:8,
        marginBottom:5
    },

    SeachBar_Filter_Container:{
        flexDirection:'row', 
        gap:20, 
        margin:8, 
        marginLeft:15
    },

    Location_Container:{
        flexDirection:'row', 
        marginTop:-5, 
        marginLeft:3
    },

    Price_Btn_Container:{
        flexDirection:'row', 
        gap: 0, 
        justifyContent:'flex-end', 
        width:300, 
        marginTop:0, 
        alignSelf:'center', 
        height:50
    },

    Icon_Price_Container:{width:200, flexDirection:'row', gap:5},
    Price:{textAlign:'center', paddingTop:5, fontSize:20, color:'#FAFAFA'},
    Book_Btn:{width:100, height:30, borderRadius:8, marginTop:5},
    Book_Btn_Text:{textAlign:'center', paddingTop:3, fontSize:16, color:'#FAFAFA'},
    Rating_Text:{marginTop:2, color:'#3560A4', textAlign:'center', width:20},

    Ratings:{
        backgroundColor:'#00FF1A', 
        width:50, 
        height:24, 
        marginTop:8, 
        borderRadius:10, 
        flexDirection:'row'
    },

    Location:{
        flexDirection:'row',
        width: 340,
        height:70,
        margin:8,
        alignSelf:'center',
        gap:170
    },

    Your_Loc:{
        color:'#AFDCFF',
        margin:8,
        fontWeight:'bold',
        fontSize:12
    },

    Image_style: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
    },

    CardImage_style: {
        height: 175,
        width: 300,
        borderRadius: 8,
        margin: 5,
        marginTop:0
    },

    CardTitle: {
        fontSize:20,
        color:'#AFDCFF',
        margin: 5,
        marginLeft:10,
        width:245,
    },

    SearchBar: {
        height:42,
        width: 265,
        borderRadius:15,
        opacity:0.5,
        backgroundColor:'#cee0f2'
    },

    filter: {
        height:42,
        width: 42,
        borderRadius:21,
        opacity:0.5,
        backgroundColor:'#cee0f2'
    },

    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: '#008DFB',
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default App;
