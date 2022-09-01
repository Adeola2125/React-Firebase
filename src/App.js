// import logo from './logo.svg';
import './App.css';
import MagicMatch from './components/MagicMatch';

const cardImages = [
  { "src": "/images/cup-flowers-sparkle.gif"},
  { "src": "/images/flower-cloud1.jpg"},
  { "src": "/images/whitish-flower1.jpg"},
  { "src": "/images/flower1.jpg"},
  { "src": "/images/flower3.jpg"},
]

function App() {

  const ShuffleCards = () => {
    const ShuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
  }

  return (
    <div className="App">
     <MagicMatch />
    </div>
  );
}

export default App;
