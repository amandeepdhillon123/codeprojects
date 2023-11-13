import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './layouts/Layout';
function App() {
  return (
    <div className="App">
     <Layout>
        <Home/>
     </Layout>
    </div>
  );
}

export default App;
