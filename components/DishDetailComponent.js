import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'

function RenderDish(prop) {
  const dish = prop.dish
  if (dish)
    return (
      <Card
        featuredTitle={dish.name}
        image={require('./images/uthappizza.png')}
      >
        <Text style={{ margine: 10 }}>
          {dish.description}
        </Text>
      </Card>
    )
}

function DishDetail(props) {
  return (
    <RenderDish dish={props.dish} />
  )
}

export default RenderDish