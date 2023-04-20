import { View, Text, TextInput } from "react-native";
import { registerStyle } from "./RegisterStyling";
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

export default Register