import React, { useContext, useState } from 'react'
import List from './List'
import Item from './Item'
import Form from './Form'
import { AppContext } from './ThemedApp'

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello Htin", name: "Htin" },
    { id: 2, content: "React tutorial", name: "Phyo" },
    { id: 3, content: "I love Phyo", name: "Zaw" }])

  const remove = id => {
    setData(data.filter(item => item.id !== id))
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }])
  }

  const [showForm, setShowForm] = useState(false)

  const { mode, setMode } = useContext(AppContext)
  return (
    <div style={{
      minHeight: 1500, background: mode === 'dark' ? 'black' : 'white',
      color: mode === 'dark' ? 'white' : 'black', padding: 20,
    }}>
      <div style={{ maxWidth: 600, margin: "20px auto" }}>
        <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>What on you mind?
          <button onClick={() => setShowForm(!showForm)} style={{ width: 32, height: 32, borderRadius: 50, border: '0 none', background: showForm ? '#dc3545' : '#0d6efd', color: 'white', }}>
            {showForm ? "x" : "+"}
          </button>
          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            style={{
              marginLeft: 8, padding: '0 20px',
              height: 32, borderRadius: 32, border: '0 none', background: mode === 'dark' ? '#333' : '#ddd',
              color: mode === 'dark' ? 'white' : 'black'
            }}>
            {mode === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
        </h1>
        {showForm && <Form add={add} />}
        <List>
          {data.map(i => {
            return <Item key={i.id} item={i} remove={remove} />
          })}
        </List>
      </div>
    </div>
  )
}
