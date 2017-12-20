import React, { Component } from 'react'
import { Image, Picker, View, ListView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import  ReactRestoActions from '../Redux/ReactRestoRedux'
import { Button, Container, Content,  Footer, Title} from 'native-base'
import { SearchBar, Tile, Icon, Header } from 'react-native-elements'

// Styles
import styles from './Styles/RestoListStyles'

class RestoListScreen extends Component {
  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    //const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      restaurants: [],
      dataSource: ds.cloneWithRows([]),
      city: this.props.navigation.state.params.cityId,
      categoryId: null
    }
  }

  navigateToHome(navigate){
    navigate('MainRestoScreen')
  }

  // call this when user navigate to this page
  // also when the city value changes
  prepareRestaurants(){
    const {state} = this.props.navigation
    this.state.categoryId = state.params.categoryId
    this.props.restaurantsRequest(this.props.city, state.params.categoryId)
  }

  checkRestaurants(newProps){
    if(newProps.restaurantsPayload){
      this.setState({
        restaurants: newProps.restaurantsPayload.restaurants,
        dataSource: this.state.dataSource.cloneWithRows(newProps.restaurantsPayload.restaurants)
      })
    }
  }

  componentWillMount(){
    this.prepareRestaurants()
  }

  componentWillReceiveProps(newProps){
    this.checkRestaurants(newProps)
  }

  renderRow (rowData) {
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity style={styles.rowContainer}>
        <Tile
          imageSrc={{uri: rowData.restaurant.thumb}}
          title={rowData.restaurant.name}
          height={250}
        >
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <View style={styles.infoLeft}>
              <Icon name='bowl' type='entypo' color='#fb5f26' size={15}/>
              <Text style={{ marginLeft: 3 }}>{rowData.restaurant.cuisines}</Text>  
            </View>
            <View style={ styles.infoRight }>
              <Icon name='thumbs-up' type='entypo' color='#fb5f26' size={15}/>
              <Text style={{ marginLeft: 3 }}>{rowData.restaurant.user_rating.rating_text}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.infoLeft}>
              <Icon name='location-pin' type='entypo' color='#fb5f26' size={15}/>
              <Text style={{ marginLeft: 3 }}>{rowData.restaurant.location.address}</Text>
            </View>
            <View style={styles.infoRight}>
              <Icon name='credit' type='entypo' color='#fb5f26' size={15}/>
              <Text style={{ marginLeft: 3 }}>{rowData.restaurant.average_cost_for_two} (Average)</Text>
            </View>
          </View>
        </View>
        </Tile>
      </TouchableOpacity>
    )
  }

  searchResto(data){
    let resto = this.state.restaurants
    var newResto = []
    for(var i=0; i<resto.length; i++){
      if(resto[i].restaurant.name.includes(data)){
        newResto.push(resto[i])
      }
    }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newResto)
    })
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header
          innerContainerStyles={styles.bars}
          outerContainerStyles={styles.bars}
          leftComponent={<TouchableOpacity><Icon style={styles.leftComponent} onPress={() => this.navigateToHome(navigate)} name='arrow-back' type='MaterialIcons' color='white'/></TouchableOpacity>}
          centerComponent={<TouchableOpacity><Text onPress={() => this.navigateToHome(navigate)} style={styles.centerComponent}>ReactResto</Text></TouchableOpacity>}
          rightComponent={ 
          <Picker
            style={styles.rightComponent}
            selectedValue={this.state.city}
            onValueChange={(city) => this.setState({city})}>
            <Picker.Item label="New York City" value="280" />
            <Picker.Item label="Los Angeles" value="281" />
            <Picker.Item label="Las Vegas" value="282" />
            <Picker.Item label="Washington DC" value="283" />
          </Picker>}
        />
        <SearchBar
          onChangeText={(data)=>this.searchResto(data)}
          placeholder='Find restaurant' 
        />       
        <Content>        
          <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            onLayout={this.onLayout}
            renderRow={this.renderRow.bind(this)}
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
    restaurantsPayload: state.reactResto.restaurantsPayload,
    fetchRestaurants: state.reactResto.fetchRestaurants,
    restaurantsErrorMessage: state.reactResto.restaurantsErrorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //redux action
    restaurantsRequest: (cityId, categoryId) => dispatch(ReactRestoActions.restaurantsRequest(cityId, categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestoListScreen)
