// import Card from "./components/Card"
import Greeting from "./components/Greeting"

function App() {
  let name = 'Sangam'
  return (
    <>
      <h1 className="heading" style={{backgroundColor:"red",color:"white"}}>Hi Everyone, I'm {name}</h1>
      <p>I'm Learning Full Stack Share Market</p>
      <Greeting/>
      <Greeting/>
      {/* <Card/> */}
    </>
  )
}

export default App
