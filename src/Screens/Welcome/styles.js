import { StyleSheet } from "react-native"
import {width,height} from "react-native-dimension"
const styles = StyleSheet.create(
    {
      mainViewContainer: {
        flexDirection: "column",
        backgroundColor: "#102C57",
        width: width(100),
        height: height(100),
      },
      headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:width(8),
        marginTop:height(5),
      },
      textcontainer: {
        color: "#FFFFFF",
        fontSize: 32,
        fontWeight: "400",
        marginBottom:height(2)
      },
      imageView: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:height(4),
        marginBottom:height(4)
      },
      introTextViewContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:height(2)
      },
      introTextStyle:{
        fontWeight:"300",
        color:"#FFFFFF",
        fontSize:width(4),
      },
      buttonView:{
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#DAC0A3", 
      borderRadius:width(25),
      marginTop:height(2),
      marginRight:width(10),
      marginLeft:width(10),
      paddingVertical:height(2) 
      },
      buttonText:{
      flexDirection:"row",
      justifyContent:"center",
      fontWeight:"bold",
      fontSize:width(4),
      color:"#000000"
      },
      socialIconView:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",      
      },
      socialIconStyle:{
        color:"#FFFFFF",
        fontWeight:"300",
        marginTop:height(4),
  
      },
      socialFlatIcon:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        alignSelf:"center",
        fontWeight:"300",
        marginTop:height(1.5),
        width:width(25),
      },
      icon:{
        backgroundColor:"#DAC0A3",
        padding:width(1),
        borderRadius:width(4)
      }
    }
  )
  export default styles;