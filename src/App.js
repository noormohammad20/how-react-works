import './App.css'
import Device from './Compotents/Device/Device'
import Tablet from './Compotents/Tablet/Tablet'
import Watch from './Compotents/Watch/Watch'

function App() {
  return (
    <div className="App">
      <Device name="uPhone" price="13000"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  )
}

export default App
