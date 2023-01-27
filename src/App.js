import './App.css';
// import Header from './components/header'
// import Blog from './components/blog'
// import StoryConainter from './components/storyConainter'
// import StoryClass from './components/storyClass'
// import StoryCard from './components/storyPostCard'
// import RelevantAccount from './components/relevantAccount'
// import Footer from './components/footer'
// import Home from './pages/home'
import { useRoutes } from 'react-router-dom'
import routes  from './routes/routes';


const App = () =>{
  const element = useRoutes(routes);
  return element
}

// 原本
// function App() {
//   return (
    
//     <div className="App">
//         <Header />
//         <Home />
//         <Footer />
//     </div>
//   );
// }

export default App;
