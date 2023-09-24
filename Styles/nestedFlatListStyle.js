import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '90%',
    backgroundColor: '#fff',
    marginLeft: 10,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: 'red',
  },
  subItem: {
    fontSize: 18,
    fontWeight: '700',
    color: 'blue',
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  nameView: {
    paddingLeft: 20,
    paddingRight:10,
    width: '100%',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginTop: 10,
  }
});

export default styles;