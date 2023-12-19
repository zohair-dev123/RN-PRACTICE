import React from 'react';
import Image01 from "../../assets/logo01.png"
import { height, width } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import styles from './styles';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


function Welcome({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <View style={styles.mainViewContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.textcontainer}>
                        codechamp.in
                    </Text>
                    <TouchableOpacity onPress={()=> 
                        navigation.navigate("Profile")                    
                    }>
                        <AntDesign name={"menufold"} size={height(4)} color={"#FFFFFF"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageView}>
                    <Image
                        style={{ width: width(80), height: height(30) }}
                        source={Image01}
                    />
                </View>
                <View style={styles.introTextViewContainer}>
                    <Text style={styles.textcontainer}>
                        HELLO,WELCOME!
                    </Text>
                    <Text style={styles.introTextStyle}>
                        Welcome to codeChamp.in Top platform
                    </Text>
                    <Text style={styles.introTextStyle}>
                        to coders
                    </Text>
                </View>


                <TouchableOpacity onPress={() => {
                    navigation.navigate("Counter")
                }}
                    style={styles.buttonView}
                >
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialIconView}>
                    <TouchableOpacity>
                        <Text style={styles.socialIconStyle}>
                            Or  via social media
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialFlatIcon}>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name={"linkedin-square"} size={width(4)}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name={"google"} size={width(4)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <AntDesign name={"facebook-square"} size={width(4)} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Welcome;