import './App.css';
import './cards.css';
import Card from "./Components/Card";

function App() {
  return (
      <div className="playingCards">
          <Card suit='spades' rank='2' symbol="♠" />
          <Card suit='diams' rank='k' symbol="♦" />
          <Card suit='diams' rank='5' symbol="♦" />
          <Card suit='hearts' rank='2' symbol="♥" />
      </div>
  );
}

export default App;
