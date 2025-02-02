import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import toast, { Toaster } from "react-hot-toast";
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Toaster />
    <div>
      <Header />
      <main className="pt-12 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
  );
}

export default App;
