
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import CustomDrawer from '../pages/CustomDrawer';
import Home2 from "../pages/Home2";
import User from "../pages/User";
/*const MainRoute=createStackNavigator({
    home:Home2,
    user:User
});*/

const MainRoute=createDrawerNavigator({
    home:Home2,
    user:User
},{contentComponent:({navigation})=>{
    return <CustomDrawer navigation={navigation} />
}});
export default createAppContainer(MainRoute);

