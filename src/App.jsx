import Item from './components/Item'
import Form from './components/Form'
import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Header from './components/Header'

export default function App() {


  // const { mode, setMode } = useContext(AppContext);
  // const { mode, setMode } = useApp();
  return (
    // * no UI Theme Style
    // <div style={{
    //   minHeight: 1500, background: mode === 'dark' ? 'black' : 'white',
    //   color: mode === 'dark' ? 'white' : 'black', padding: 20,
    // }}>
    //   <div style={{ maxWidth: 600, margin: "20px auto" }}>
    //     <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>What on you mind?
    //       <button onClick={() => setShowForm(!showForm)} style={{ width: 32, height: 32, borderRadius: 50, border: '0 none', background: showForm ? '#dc3545' : '#0d6efd', color: 'white', }}>
    //         {showForm ? "x" : "+"}
    //       </button>
    //       <button
    //         onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    //         style={{
    //           marginLeft: 8, padding: '0 20px',
    //           height: 32, borderRadius: 32, border: '0 none', background: mode === 'dark' ? '#333' : '#ddd',
    //           color: mode === 'dark' ? 'white' : 'black'
    //         }}>
    //         {mode === 'dark' ? 'LIGHT' : 'DARK'}
    //       </button>
    //     </h1>
    //     {showForm && <Form add={add} />}
    //     <List>
    //       {data.map(i => {
    //         return <Item key={i.id} item={i} remove={remove} />
    //       })}
    //     </List>
    //   </div>
    // </div>
    <Box>

      {/* <Header /> */}
    </Box>
  )
}
