import React, { Component } from 'react'
import { TouchableOpacity, View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Header } from 'react-native-elements'
import { Button, Container, Content, Footer, Title} from 'native-base'
import { Picker } from 'react-native-picker-dropdown'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/MainRestoStyles'

class MainRestoScreen extends React.Component {
  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = {
      first: [
        {title: 'First Title', description: 'First Description'},
        {title: 'Second Title', description: 'Second Description'},
        {title: 'Third Title', description: 'Third Description'},
        {title: 'Fourth Title', description: 'Fourth Description'},
        {title: 'Fifth Title', description: 'Fifth Description'},
        {title: 'Sixth Title', description: 'Sixth Description'},
        {title: 'Seventh Title', description: 'Seventh Description'},
        {title: 'Eighth Title', description: 'Eighth Description'},
        {title: 'Ninth Title', description: 'Ninth Description'},
        {title: 'Tenth Title', description: 'Tenth Description'}
      ],
      second: [
        {title: 'Eleventh Title', description: 'Eleventh Description'},
        {title: '12th Title', description: '12th Description'},
        {title: '13th Title', description: '13th Description'},
        {title: '14th Title', description: '14th Description'},
        {title: '15th Title', description: '15th Description'},
        {title: '16th Title', description: '16th Description'},
        {title: '17th Title', description: '17th Description'},
        {title: '18th Title', description: '18th Description'},
        {title: '19th Title', description: '19th Description'},
        {title: '20th Title', description: '20th Description'},
        {title: 'BLACKJACK!', description: 'BLACKJACK! Description'}
      ]
    }
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects)
    }

    this.stateCity = { language: "js" }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    return (
      <TouchableOpacity style={styles.row}>
        <Text style={styles.boldLabel}>Section {sectionID} - {rowData.title}</Text>
        <Text style={styles.label}>{rowData.description}</Text>
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRowsAndSections(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <Container>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton}></Text>
          <Icon name='bowl' type='entypo' size={40} color='white'/> 
          <Picker
            style={styles.dropdown}
            selectedValue={this.state.language}
            onValueChange={(language) => this.setState({language})}>
            <Picker.Item label="New York City" value="ny" />
            <Picker.Item label="New Jersey" value="nj" />
            <Picker.Item label="Los Angeles" value="la" />
            <Picker.Item label="Oklahoma City" value="oc" />
          </Picker> 
        </View>
        <View  style={styles.viewDropdown}>
          
        </View>
        <Content>        
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            onLayout={this.onLayout}
            renderRow={this.renderRow}
            enableEmptySections
          />
        </Content>
        <Footer style={ styles.bars }>
          <Button transparent style={ styles.buttonsMenu }>
            <Icon name='location' type='entypo' color='white' size={30}/>
          </Button>
          <Button transparent style={ styles.buttonsMenu }>
            <Icon name='heart' type='foundation' color='white' size={30}/>
          </Button>
          <Button transparent style={ styles.buttonsMenu }>
            <Icon name='bell' type='entypo' color='white' size={30}/>
          </Button>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRestoScreen)
