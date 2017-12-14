import React, { Component } from 'react'
import { Image, Picker, TouchableOpacity, View, ListView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Header } from 'react-native-elements'
import { Button, Container, Content, Footer, Title} from 'native-base'
import  ReactRestoActions from '../Redux/ReactRestoRedux'
import { Images } from '../Themes'

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
      categories: [],
      dataSource: ds.cloneWithRows([])
    }

    this.stateCity = { city: "ny" }
  }

  prepareCategories(){
    //check is there any data
    if(!this.props.categoriesPayload){
      //no data, call api
      this.props.categoriesRequest()
    }else{
      this.setState({
        categories: this.props.categoriesPayload.categories,
        dataSource: this.state.dataSource(cloneWithRows(this.props.categories))
      })
    }
  }

  checkCategories(newProps){
    if(newProps.categoriesPayload){
      this.setState({
        categories: newProps.categoriesPayload.categories,
        dataSource: this.state.dataSource.cloneWithRows(newProps.categoriesPayload.categories)
      })
    }
  }

  componentWillMount(){
    this.prepareCategories()
  }

  componentWillReceiveProps(newProps){
    this.checkCategories(newProps)
  }

  _navigateToRestoList (navigate) {
    navigate('RestoListScreen')
  }

  renderRow (rowData) {
    // const { navigate } = this.props.navigation
    return (
      <TouchableOpacity style={styles.row} onPress={() => this._navigateToRestoList(navigate)}>    
        <Image source={Images[rowData.categories.id]} style={styles.categoriesBackground} />
        <Text style={styles.boldLabel}>{rowData.categories.name}</Text>
      </TouchableOpacity>
    )
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    //const { navigate } = this.props.navigation
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

//const { navigate } = this.props.navigation

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
    categoriesPayload: state.reactResto.categoriesPayload,
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