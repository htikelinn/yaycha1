import React from 'react'
import List from './List'
import Item from './Item'

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "20px auto"}}>
      <h1>What on you mind?</h1>
      <List>
        <Item content="Hello Htin" name="Htin" />
        <Item content="React tutorial" name="Phyo" />
        <Item content="I love Phyo" name="Zaw" />
      </List>
    </div>
  )
}
