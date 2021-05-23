import logo from './logo.svg';
import './App.css';
import Profil from './profile/Profile';

function App() {
  const handelClick =(e)=>{
    e.preventDefault();
    alert("amina")
  }
  return (
    <div className="App">
      
      <header className="App-header">
       <Profil fullName="amina" bio="Biograph" profession="profession" handelClick={handelClick} >
           <img src={logo} className="App-logo" alt="logo" />
       </Profil>
  
      </header>
    </div>
  );
}

export default App;
