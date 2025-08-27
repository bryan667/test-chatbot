import ChatbotApp from './components/ChatbotApp'
import FreeTierImage from './assets/freeTier.jpg'

function App() {
  return (
    <>
    <div style={{display: 'flex', placeSelf: 'center', padding: '0px 10px'}}>
      <p style={{textAlign: 'center', fontSize: "14px", alignContent: "center", maxWidth: '400px'}}>This is an actual LLM model (1.5B) running on free-tier CPU it will be slow, please bear 🐻 with us</p>
      <div>
        <img src={FreeTierImage} />
      </div>
    </div>
      <ChatbotApp/>
    </>
  )
}

export default App
