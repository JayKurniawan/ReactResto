import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.coal,
    //marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    height: 150,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
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
    backgroundColor: Colors.bars
  },
  toolbar:{
    backgroundColor: Colors.bars,
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'  
  },
  toolbarButton:{
    width:70,            
    textAlign:'center',
    flex: 1,
  },
  dropdownMenu:{
    width:70,
    paddingTop: 12
  },
  toolbarTitle:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1                
  }
})
