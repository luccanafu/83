import React from "react";
import {} from "react-navigation";
import CreatePost from "../scrrens/CreatePost";
import Feed from "../scrrens/Feed";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomTabNav = () => {
    return (
        <Tab.Navigator
           screensOptions ={({route}) => ({
                tabBarIcon: ([focused, color, size]) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused 
                            ?"book"
                            :"bokk=outline";                       
                    } else if (route.name === "CreatePost") {
                        iconName = focused ? "create" : "create-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
           })}
           tabBarOptions = {{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
           }}
        >
            <Tab.Screen name= "Feed" component={Feed}/>
            <Tab.Screen name= "CriarPost" component={CreatePost}/>

        </Tab.Navigator>
        
    )
}