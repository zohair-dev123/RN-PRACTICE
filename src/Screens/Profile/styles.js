import { StyleSheet } from "react-native";
import { width , height } from "react-native-dimension";

const styles = StyleSheet.create({
    mainViewContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFFFFF"
    },
    firstView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#FFFFFF",
        width:width(100),
        height:height(8),
        paddingHorizontal:width(6)
    },
    editProfileText:{
        fontWeight:"bold",
        fontSize:width(5),
        
    },
    secondView:{
        backgroundColor:"#FFFFFF",
        flexDirection:"row",
        justifyContent:"center",
        width:width(100),
        marginTop:height(3),
},
cameraIcon:{
    position:"absolute",
    top:height(20),
    left:width(61)
}
})

export default styles