import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemView: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row'
  },
  productImage: {
    width: 100,
    height: 100,
  },
  nameView: {
    paddingLeft: 20,
    paddingRight:10,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginTop: 10,
  }
});

export default styles;