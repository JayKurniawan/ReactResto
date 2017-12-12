import React, { Component } from 'react'
import { Picker, TouchableOpacity, View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Header } from 'react-native-elements'
import { Button, Container, Content, Footer, Title} from 'native-base'
import  ReactRestoActions from '../Redux/ReactRestoRedux'
// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/MainRestoStyles'

class MainRestoScreen extends React.Component {
  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

    // Datasource is always in state
    this.state = {
      dataObjects: [],
      dataSource: ds.cloneWithRows([])
    }

    this.stateCity = { city: "ny" }
  }

  prepareCategories(){
    //check is there any data
    if(!this.props.payload){
      //no data, call api
      this.props.categoriesRequest()
    }else{
      this.setState({
        dataObjects: this.props.payload.dataObjects,
        dataSource: this.state.dataSource(cloneWithRows(this.props.dataObjects))
      })
    }
  }

  checkCategories(newProps){
    if(newProps.payload){
      this.setState({
        dataObjects: newProps.payload.dataObjects,
        dataSource: this.state.dataSource.cloneWithRows(newProps.payload.dataObjects)
      })
    }
  }

  componentWillMount(){
    this.prepareCategories()
  }

  componentWillReceiveProps(newProps){
    this.checkCategories(newProps)
  }

  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    return (
      <TouchableOpacity style={styles.row}>
        <Text style={styles.boldLabel}>Section {sectionID} - {rowData.dataObjects.name}</Text>
        <Text style={styles.label}>{rowData.dataObjects.id}</Text>
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
            selectedValue={this.state.city}
            onValueChange={(city) => this.setState({city})}>
            <Picker.Item label="New York City" value="ny" />
            <Picker.Item label="New Jersey" value="nj" />
            <Picker.Item label="Los Angeles" value="la" />
            <Picker.Item label="Oklahoma City" value="oc" />
          </Picker> 
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

//MainRestoScreen.propsTypes = {}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
    payload: state.reactResto.payload,
    errorMessage: state.reactResto.errorMessage,
    fetchCategories: state.reactResto.fetchCategories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoriesRequest: () => dispatch(ReactRestoActions.categoriesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRestoScreen)