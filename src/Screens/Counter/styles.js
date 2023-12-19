import {StyleSheet} from "react-native";
import {width,height} from "react-native-dimension"

const styles = StyleSheet.create({
    
    mainViewContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"blue",
        width:width(100),
        height:height(100)
    },
    viewContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"red",
        paddingHorizontal:width(30),
        paddingVertical:height(5),
        borderRadius:width(4)
    },
    addButton:{
        fontSize:width(10),
        fontWeight:"bold",
        color:"yellow",
    },
    countText:{
        backgroundColor:"white",
        padding:width(5),
        margin:width(5),
        borderRadius:width(2)
    }
});

export default styles;