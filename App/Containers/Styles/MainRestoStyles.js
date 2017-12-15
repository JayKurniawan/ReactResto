import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    backgroundColor: Colors.coal,
    justifyContent: 'center',
    height: 134
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
    backgroundColor: Colors.bars,
    borderBottomWidth:0,
    height:50
  },
  toolbar:{
    backgroundColor: Colors.bars,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row'  
  },
  toolbarButton:{
    marginLeft: 40,            
    textAlign:'center',
    flex: 1,
  },
  toolbarTitle:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,        
    position: 'absolute'        
  },
  dropdown:{
    backgroundColor: Colors.dropdown,
    color: Colors.snow,
    marginLeft: 40,
    flex: 1,
  },
  viewDropdown:{
    justifyContent: 'center',
    backgroundColor: Colors.dropdown
  },
  textName:{
    fontSize: 20,
    color: Colors.snow,
    fontWeight: 'bold',
    // marginBottom:10
  }
})