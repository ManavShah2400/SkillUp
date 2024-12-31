import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const searchStyle = StyleSheet.create({
    heading: {
        marginHorizontal: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9
    },
    seacrhbar: {
        flexDirection: 'row',
        paddingHorizontal: '3%'
    },
    searchtext: {
        fontSize: 20,
        width: '60%',
        paddingLeft: 5
    },
});

export default searchStyle;