import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  navigateToHome (navigate) {
    navigate('MainRestoScreen')
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText} onPress={() => this.navigateToHome(navigate)}>
              Hello React World! 
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}