import './App.css';
import { SideMenu } from './SideMenu';
import { MainDisplay } from './MainDisplay';
import { TopNav } from './TopNav';

function App() {
  return (
    <div className="App">
	 <SideMenu/>
	 <TopNav/>
	 <MainDisplay/>
    </div>
  );
}

export default App;
