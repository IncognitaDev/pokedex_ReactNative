import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  header: {
    backgroundColor: '#8BBE8A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 250
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
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
  backgroundNameBottom: {
    color: '#8BBE8A',
    position: 'absolute',
    fontSize: 100,
    fontWeight: '700',
    textShadowColor: 'rgba(255,255,255, 0.2)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 1,
    top: 20
  },
  backgroundNameTop: {
    color: '#8BBE8A',
    position: 'absolute',
    fontSize: 100,
    fontWeight: '700',
    textShadowColor: 'rgba(255,255,255, 0.2)',
    textShadowOffset: {width: 2, height: -2},
    textShadowRadius: 1,
    top: 20
  },
  backgroundNameLeft: {
    color: '#8BBE8A',
    position: 'absolute',
    fontSize: 100,
    fontWeight: '700',
    textShadowColor: 'rgba(255,255,255, 0.2)',
    textShadowOffset: {width: -2, height: -2},
    textShadowRadius: 1,
    top: 20
  },
  backgroundNameRight: {
    color: '#8BBE8A',
    position: 'absolute',
    fontSize: 100,
    fontWeight: '700',
    textShadowColor: 'rgba(255,255,255, 0.2)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    top: 20
  },
  pattern: {
    position: 'absolute',
    right: -40,
    bottom: 30
  },
  content: {
    borderRadius: 20,
    marginTop: -20,
    backgroundColor: '#fff',
    padding: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: "#62B957",
    marginVertical: 20
  }, 

  property: {
    flexDirection: 'row'
  },
  propertyTitle: {
    width: 150,
    fontWeight: '700',
    fontSize: 12,
  },
  propertyValue: {
    width: 150,
    color: '#747476',
    fontSize: 16 

  }
})

export default style