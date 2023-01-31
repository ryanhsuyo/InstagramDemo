import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes  from './routes/routes';
import CreateArticleProvider from './context/createArticle'

const App = () => {
  return (
      <CreateArticleProvider>
          {useRoutes(routes)}
      </CreateArticleProvider>
  )
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
