function GradioApp(props: { src: string }) {
  // @ts-ignore
  return <gradio-app src={props.src}></gradio-app>;
}

function ChatbotApp() {
  return (
    <div style={{alignItems: 'center', placeSelf: "center"}}>
      <GradioApp src="https://janbryanmartirez-testchatbot.hf.space"/>
    </div>
  )
}

export default ChatbotApp