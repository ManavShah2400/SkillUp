import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const Loginstyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: width,
        height: height * 1,
        position: 'absolute',
    },
    light: {
        flexDirection: 'row',
        position: 'absolute',
        width: width,
        height: width * 0.7,
        justifyContent: 'space-around',
    },
    lightimage1: {
        height: height * 0.27,
        width: width * 0.222,
    },
    lightimage2: {
        height: height * 0.21,
        width: width * 0.17,
    },
    titleandform: {
        marginTop: height * 0.37,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginTitile: {
        //     marginBottom: '45%'
    },
    logintext: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    formstyle: {
        marginTop: height * 0.15,
        flex: 1,
        alignItems: 'center',
    },

    formInput: {
        width: width * 0.65,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.008,
        marginVertical: height * 0.007,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonsection: {
        width: width,
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgb(82,152,199)',
        padding: 12,
        marginVertical: height * 0.01,
        alignItems: 'center',
        borderRadius: 10,
        width: width * 0.65
    },
    buttontext: {
        fontSize: 20,
        color: 'white'
    },
    signuptextsection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: height * 0.003
    },
    signup: {
        color: 'rgb(82,152,199)',
    },
    line: {
        width: width * 0.13, // Adjust the width of the line dynamically
        height: 1,
        backgroundColor: 'gray',
        marginHorizontal: width * 0.03,
    },
    othersigntext: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height * 0.01,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: height * 0.01,
    },
    socialButtonText: {
        fontSize: 16,
        color: 'rgb(82,152,199)',
    },
});
export default Loginstyles;