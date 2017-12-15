import { StackNavigator } from 'react-navigation'
import RestoListScreen from '../Containers/RestoListScreen'
import MainRestoScreen from '../Containers/MainRestoScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  RestoListScreen: { screen: RestoListScreen },
  MainRestoScreen: { screen: MainRestoScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainRestoScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
