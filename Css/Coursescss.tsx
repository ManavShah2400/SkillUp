import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const coursestyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '3%',
    margin: '3%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
  heading: {
    marginHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9
  },
  headingText: {
    fontSize: 25
  },
});
export default coursestyles;