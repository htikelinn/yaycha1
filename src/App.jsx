import React, { useState } from 'react'
import List from './List'
import Item from './Item'

export default function App() {
  const [data, setData] = useState([
    { id: 1, content : "Hello Htin",     name : "Htin" },
    { id: 2, content : "React tutorial", name : "Phyo" },
    { id: 3, content : "I love Phyo",    name : "Zaw" }])

    const remove = id => {
      setData(data.filter(item => item.id !== id))
    }
  return (

    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>What on you mind?</h1>
      <List>
        {data.map(i => {
          return <Item key={i.id} item={i} remove={remove}/>
        })}
      </List>
    </div>
  )
}
