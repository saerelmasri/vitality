import { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogin } from "../context/LoginProvider";
import RegistrationStack from "./LoginNavigation";
import HomeTabs from "./TabNavigation";

const Stack = () => {
  const {isLoggedIn} = useLogin()
  return isLoggedIn ? <HomeTabs/> : <RegistrationStack/>
}

export default Stack
