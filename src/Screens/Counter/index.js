import React,{useState} from "react";
import {Text, View} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Counter = ()=>{
   
    const [count,setCount] = useState(0);

   const Addcount = ()=>{
    setCount(count + 1);
   }
   const Subtractcount = ()=>{
    setCount(count-1);
   }
   return(
        <View style={styles.mainViewContainer}>
            <View style={styles.viewContainer}>
                <TouchableOpacity onPress={Addcount}>
                    <Text style={styles.addButton}>+</Text>
                </TouchableOpacity>
            <Text style={styles.countText}>
                  {count}
            </Text>
            <TouchableOpacity onPress={Subtractcount}>
                <Text style={styles.addButton}>-</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Counter