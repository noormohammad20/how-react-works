import './App.css'
import Device from './Compotents/Device/Device'
import Watch from './Compotents/Watch/Watch'

function App() {
  return (
    <div className="App">
      <Device name="uPhone" price="13000"></Device>
      <Watch></Watch>
    </div>
  )
}

export default App
