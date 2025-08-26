import ChatbotApp from './components/ChatbotApp'
import FreeTierImage from './assets/freeTier.jpg'

function App() {
  return (
    <>
      <div style={{placeSelf: 'center'}}>
        <img src={FreeTierImage} />
      </div>
      <p style={{textAlign: 'center', fontSize: "14px"}}>This is an actual LLM model (1.5B) running on free-tier CPU it will be slow, please bear 🐻 with us</p>
      <ChatbotApp/>
    </>
  )
}

export default App
