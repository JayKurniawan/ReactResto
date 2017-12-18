import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
import { colors } from 'react-native-elements';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    backgroundColor: Colors.coal,
    justifyContent: 'center',
    // height: 
  },
  boldLabel: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    position: 'absolute'
  },
  label: {
    textAlign: 'center',
    color: Colors.bars
  },
  buttonsMenu:{
    flex: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  bars:{
    backgroundColor: Colors.bloodOrange,
    borderBottomWidth:0,
    // height:60,
    alignItems: 'center',
    flexDirection: 'row'
  },
  toolbarButton:{
    marginLeft: 40,            
    textAlign:'center',
    flex: 1,
  },
  rightComponent:{
    color: Colors.snow,
    width: 70,
    // marginTop: 100,
  },
  centerComponent:{
    fontSize: 25,
    color: Colors.silver,
    fontWeight: 'bold',
    marginLeft: 50
    // marginBottom:10
  },
  viewDropdown:{
    justifyContent: 'center',
    backgroundColor: Colors.dropdown
  },
  info:{
    alignItems: 'center',
    flexDirection: 'row'
  },
  infoLeft:{
    width: 230,
    flexDirection: 'row',
    marginRight: 15
  },
  infoRight:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})