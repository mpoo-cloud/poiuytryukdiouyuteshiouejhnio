import './App.css';
import { TopHeader } from './header';
import { Pagge } from './page/page';

function App() {
  return (
    <div className="App">

        <TopHeader />
        
        <p style={{
          width:'100%',
          height:'50px',
          // border:'1px solid red',
          marginTop:'0',
          zIndex:'-20'
        }}></p>

        <Pagge />

    </div>
  );
}

export default App;
