import './App.css'
import AboutUs from './component/AboutUs/AboutUs'
import Definition from './component/Definition/Definition'
import Ocean from './component/Ocean/Ocean'
import OceanZone from './component/OceanZone/OceanZone'
import Process from './component/Process/Process'
import Title from './component/Title/Title'

function App() {

  return (
    <div>
		<Ocean/>
		<Title/>
		<Definition/>
		<OceanZone/>
		<Process/>
		<AboutUs/>
    </div>
  )
}

export default App
