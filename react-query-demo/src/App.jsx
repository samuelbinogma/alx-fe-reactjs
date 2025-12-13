import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import './App.css'
import Home from './Home';
import PostsComponent from './components/PostsComponent';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5 minutes
      cacheTime: 1000 * 60 * 10  // 10 minutes
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='container'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/posts" element={<PostsComponent />}/>
            <Route />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App
