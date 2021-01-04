import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    top: -150,
  },
  actions: {
    flexDirection: 'row-reverse',
    marginBottom: 35
  },
  header: {
    flex: 1,
    padding: 35
  },  
  title: {  
    fontSize: 32,
    fontFamily: 'sf-pro-display-bold',
    fontWeight: '700',
    marginBottom: 10
  },
  description: {
    marginBottom: 47,
    color: '#747476',
  },
  search: {
    backgroundColor: '#F2f2f2',
    height: 60,
    borderRadius: 10,
    padding: 20,
    paddingLeft: 40,
  },
  searchIcon: {
    zIndex: 2,
    marginBottom: -43,
    marginLeft: 15
  }
});

export default styles