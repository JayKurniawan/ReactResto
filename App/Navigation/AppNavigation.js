import { StackNavigator } from 'react-navigation'
import MainRestoScreen from '../Containers/MainRestoScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
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
