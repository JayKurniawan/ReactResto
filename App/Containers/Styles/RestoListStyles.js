import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
import { colors, Icon } from 'react-native-elements';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    // flex: 1,
    backgroundColor: Colors.fire,
    //marginVertical: Metrics.smallMargin,
    // justifyContent: 'center',
    height: 650,
    // width: 150
    // flexDirection: 'row'
  },
  boldLabel: {
    // flexDirection: 'row',
    flex: 1,
    fontWeight: 'bold',
    // alignSelf: 'center',
    color: Colors.snow,
    // textAlign: 'center',
    // marginBottom: Metrics.smallMargin
  },
  restaurantInfo:{
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  rowContainer:{
    flexDirection: 'row'
  },
  textInfo:{
    flex: 1,
    backgroundColor: Colors.coal,
    // height: 150,
  },
  menus:{
    color: Colors.fire,
    fontSize: 30
  },
  dropdown:{
    backgroundColor: Colors.dropdown,
    color: Colors.snow,
    marginLeft: 40,
    flex: 1,
  },
  bars:{
    backgroundColor: Colors.bars,
    borderBottomWidth:0,
    height:50
  },
  buttonsMenu:{
    flex: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  textName:{
    fontSize: 20,
    color: Colors.snow,
    fontWeight: 'bold',
    // marginBottom:10
  },
  leftButton:{
    // marginBottom:30
  }
})
