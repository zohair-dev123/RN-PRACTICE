import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width ,height} from "react-native-dimension"
 
const Profile = ()=>{
    return(
        <View style={styles.mainViewContainer}>
            <View style={styles.firstView}>
            <TouchableOpacity>
                <AntDesign name={"left"} size={width(8)} color={"black"}/>
            </TouchableOpacity>
            <Text style={styles.editProfileText}>
                Edit Profile
            </Text>
            {/* third empty view  */}
            <View/>      
            </View>
            <View style={styles.secondView}> 
                <Image 
                source={{uri:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"}}
                style={{width: 200, height: 200, borderRadius: 200/ 2}}
                />
                <AntDesign 
                name={"camera"} 
                size={width(7)}
                color={"#242760"}
                style={styles.cameraIcon}
                />
            </View>
        </View>
    )
}

export default Profile;