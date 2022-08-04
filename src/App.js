import './App.css';
import Welcome from './HomePage';
import MyName from './TextName';
import ProductPhoto from './ProductPhoto';
import Text from './TitleClass';
function App() {
  return (
    <div className="App">
      <Welcome />
      <MyName />
      <ProductPhoto src='Image/Smile1.jpg' />
      <Text name='natanhh'/>
    </div>
  )
}
export default App;
