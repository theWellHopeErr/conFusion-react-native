import React, { Component } from 'react'
import { View } from 'react-native'

import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent'
import { DISHES } from '../shared/dishes'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    }
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId
    })
  }

  render() {
    return (
      <>
        <Menu
          dishes={this.state.dishes}
          onPress={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          dish={this.state.filter((dish) => dish.id === this.state.selectedDish)[0]}
        />
      </>
    )
  }
}

export default Main