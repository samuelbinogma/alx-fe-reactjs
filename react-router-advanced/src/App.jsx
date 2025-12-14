import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';
import { AuthContext } from './components/AuthContext';
import './App.css'
import './index.css'
import ProfileOverview from './components/ProfileOverview';

// Protected Route Wrapper
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/profile',
//     element: (
//       <ProtectedRoute>\
//         <ProfileLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <Profile /> },
//       { path: 'details', element: <ProfileDetails /> },
//       { path: 'settings', element: <ProfileSettings /> },
//     ],
//   },
//   {
//     path: '/blog/:postId',
//     element: <BlogPost />,
//   },
//   {
//     path: '*',
//     element: <NotFound />
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        
        <Route path="/blog/:Id" element={<BlogPost />} />

        <Route path='*' element={<NotFound />}/>
      </Routes>
  );
}

export default App
