import "./App.css";
import Champions from "./componants/champions/Champions";
import Footer from "./componants/footer/Footer";
import Header from "./componants/header/Header";
import We from "./componants/main/We";
import Tweet from "./componants/tweet/Tweet";

function App() {
  return (
    
      <div className="App">
        <Header />
        <We />
        <Tweet />
        <Champions />
        <Footer />
      </div>
  
  );
}

export default App;
