
import './App.css';
import Profil from './profile/Profile';
import img1 from './profile/images/img1.png';
import img2 from './profile/images/img2.png';
import logo from './logo.svg';
function App() {
  const handelClick =(n)=>{
    //e.preventDefault();
    alert("hello "+n)
  }
  /*const profils ={
    items :[{
      fullName:"Amina" ,
      profession:"Integrator Web",
      img:{img1}
    },{
      fullName:"Yahia" ,
      profession:"Front-end developer",
      img:{img2}
    }]
  }*/
  return (
    <div className="App">
      
       <Profil fullName="Amina" bio="Biograph"  profession="Integrator Web" handelClick={()=>handelClick} />
       <Profil fullName="Yahia" bio="Biograph" src={img2} profession="Front-end developer" handelClick={()=>handelClick} />
          
    </div>
  );
}

export default App;
