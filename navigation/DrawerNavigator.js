import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation"
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return (
        <DrawerNavigator>
            <Drawer.Screen name = "tela inicial" component ={TabNavigator} />
            <Drawer.Screen name = "perfil" component ={Profile} />
        </DrawerNavigator>
    )
}

export default DrawerNavigator;