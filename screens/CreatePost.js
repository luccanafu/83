import * as React from "react";
import {Text, View, StyleSheet, Image, SafeAreaView, TextInput, DropDownPicker} from "react-native"
import PreviewImage from "react-native-dropdown-picker"
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-web";

export class CreatePost extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidArea}/>
                <View style={styles.AppTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")}/>
                    </View>
                    <View style={styles.AppTitleTExtContainer}>
                        <Text style={styles.appTitleText}>Novo Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsConteiner}>
                    <ScrollView>
                        <Image source={PreviewImage[this.setState.PreviewImage]} style={styles.PreviewImage}/>
                        <View style={{height: RFValue(this,setStateDropDownHWight)}}>
                            <DropDownPicker>
                                items={[ 
                                    {label: "Image 1", value: "image_1" },  
                                    {label: "Image 2", value: "image_2" }, 
                                    { label: "Image 3", value: "image_3"}, 
                                    {label: "Image 4", value: "image_4" }, 
                                    { label: "Image 5", value: "image_5"}, 
                                    { label: "Image 6", value: "image _6"}, 
                                    { label: "Image 7", value: "image _7"}
                                ]}

                                defaultValue={this.state.PreviewImage}
                                containerStyle ={{
                                    height: 40,

                                    borderRadius: 20,

                                    marginBottom: 10
                                }}
                                onOpen ={()=>{
                                    this.setState({ DropDownHeight: 170})
                                    
                                }}
                                onClose ={()=>{
                                    this.setState({ DropDownHeight:40})
                                }}
                                style  ={{
                                    backGroundColor:"transparent"
                                }}
                                itemStyle{{
                                    justifyContent: "Flex-start"
                                }}
                                DropDownStyle = {{
                                    backGroundColor: "#2a2a2a"
                                }}
                                labelStyle{{
                                    color: "white"
                                }}
                                arrowStyle{{
                                    color: "white"
                                }}
                                onChangeItem ={item =>
                                    this.setState({
                                        PreviewImage: item.value
                                    })
                                }
                            </DropDownPicker>
                        </View>
                        <TextInput
                            style={styles.inputFont}
                            onChangeText ={caption => this.setState({ caption })}
                            placeholder = {"legenda"}
                            placeholderTextColor ="white"
                        />
                    </ScrollView>    
                </View>
                <View style={{flex: 0.08}}/>
            </View>
        )      
    }
}