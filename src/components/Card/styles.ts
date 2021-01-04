import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8BBE8A',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30
  },
  pokeNum: {
    fontSize: 12,
    color: "#17171B",
    opacity: 0.6,
    fontWeight: '700'
  },
  pokeName: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 5,
    lineHeight: 31,
    fontFamily: 'sf-pro-display-bold'
  }, 
  types: {
    flexDirection: 'row'
  },
  image: {
    position: 'absolute',
    right: 10,
    top: -20,
    width: 130,
    height: 130,
  },
  pattern: {
    position: 'absolute',
    top: -22,
    left: 70
  },
  pokeball: {
    position: 'absolute',
    right: -20,
    top: -10,
  }
})

export default styles