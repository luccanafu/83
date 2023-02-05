import * as React from "react";
import {Text, View, Image, StyleSheet, FlatList, SafeAreaView, StatusBar} from "react-native"
import PostCard from "./PostCard"
import { RFValue } from "react-native-responsive-fontsize";

export class CreatePost extends Component {

    renderItem = ({ item: story }) => {
        return <PostCard story={story} navigation={this.props.navigation} />;
      };

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>            
                <View style ={styles.appTitle}>
                    <Image                        
                        source = {require("../assets/logo.png")}
                        style = {styles.iconImage}
                    ></Image>                   
                </View> 
                <View style ={styles.appTitleConteiner}>
                    <Text style={styles.appTitleText}>espectagrama</Text>
                </View> 
                <View style ={styles.cardConteiner}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.PostCard}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2, 
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        justifyContent: "center",
        fl: 0.8,
    },
    appTitleText: {
        color: "white", 
        fontSize: RFValue(28),
    },
    cardContainer:{
        flex: 0.85
    }
})
    