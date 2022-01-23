import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
function App() {
  return (
    <div className="App">
   
  <Button variant="primary" size="lg" active>
    Primary button
  </Button>{' '}
  <Button variant="secondary" size="lg" active>
    Button
  </Button>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
