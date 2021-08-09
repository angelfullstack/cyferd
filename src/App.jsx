import "typeface-montserrat";
import Input from './components/UI/atoms/Input/Input'
function App() {
  return <div className="App">
    <Input 
      formControlName="username"
      type="text"
      placeholder="Write your username"
    />
  </div>;
}

export default App;
