import { createStackNavigator } from "react-navigation-stack";

import {createAppContainer} from 'react-navigation'
import Home from "../src/Pages/Home/Home";
import Login from "../src/Pages/Login/Login";

const screen ={
    Home : {
        screen : Home
    },
    Login : {
        screen : Login
    }
}

const Homestack = createStackNavigator(screen)

export default createAppContainer(Homestack);