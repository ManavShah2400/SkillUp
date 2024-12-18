import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const coursestyles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginTop: height * 0.015,
    },
    filter: {
        flexDirection: 'row',
        paddingHorizontal: '2%',
        justifyContent: 'space-between',
        width: '25%'
    },
    cardview: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        height: height * 0.15,
        margin: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    cardimage: {
        height: height * 0.05,
        width: width * 0.09,
        resizeMode: 'contain',
        margin: '3%'
    },
});
export default coursestyles;