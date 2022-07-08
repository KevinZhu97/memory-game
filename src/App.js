import Header from './Components/header'
import Main from './Components/main'
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
        <Header currentScore={1} highScore={20}/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
