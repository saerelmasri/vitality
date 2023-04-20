import { View, Text, StyleSheet, TextInput } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";
import Button from "../../Components/Button/Button";

const Register = () => {
    return(
        <View style={registerStyle.container}>
            <View style={registerStyle.header}>
                <Text style={registerStyle.headerTitle}>Create New Account</Text>
            </View>

            <View style={registerStyle.description}>
                <Text style={registerStyle.descriptionText}>Join the community of fitness and start your journey</Text>
            </View>

            <View style={registerStyle.inputs}>
                <Text>Full Name</Text>
                <TextInput label='Email' value="" style={registerStyle.input}/>
            </View>
            <View style={registerStyle.inputs}>
                <Text>Nickname</Text>
                <TextInput label='Email' value="" style={registerStyle.input}/>
            </View>
            <View style={registerStyle.inputs}>
                <Text>Phone Number</Text>
                <TextInput label='Email' value="" style={registerStyle.input}/>
            </View>
            <View style={registerStyle.inputs}>
                <Text>Email</Text>
                <TextInput label='Email' value="" style={registerStyle.input}/>
            </View>
            <View style={registerStyle.inputs}>
                <Text>Password</Text>
                <TextInput label='Email' value="" style={registerStyle.input}/>
            </View>
            <View style={registerStyle.inputs} style={{marginBottom: 10}}>
                <Text>Confirm Password</Text>
                <TextInput label='Email' value="" style={registerStyle.input}/>
            </View>

            <Button action={() => {console.log('hello');}} title={'Register'}/>

            <Text>By clicking register you agree to our <Text style={registerStyle.span}>Term and Conditions</Text></Text>
        </View>
    );
}

const registerStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.grey,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignItems: 'center',
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    header: {
        width: 250,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 800,
        textAlign: 'center'
    },
    description: {
        width: 320,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center'
    },
    inputs:{
        width: 310,
        height: 75, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        width: 300,
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
    },
    span: {
        fontWeight:600
    }
})

export default Register