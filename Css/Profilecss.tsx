import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const Profilestyles = StyleSheet.create({
    background: {
        alignItems: 'center',
        width: width,
        height: height * 0.4
    },
    profiletext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: height * 0.03
    },
    nametext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: height * 0.03
    },
    videosection: {
        marginHorizontal: width * 0.05,
        height: height * 0.14,
        justifyContent: 'space-between'
    },
    accountview: {
        marginHorizontal: width * 0.05,
        height: height * 0.25,
        justifyContent: 'space-between'
    }
});
export default Profilestyles;