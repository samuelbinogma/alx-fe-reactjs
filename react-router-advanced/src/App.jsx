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
import { useState } from 'react';
import './App.css'
import './index.css'

// Protected Route Wrapper
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Layout for Profile (with nested routes)
function ProfileLayout() {
  return (
    <div className='container'>
      <div className='profile-section'>
        <h2>Profile Section</h2>
        <nav className='profile-nav'>
          <a href="/profile">Overview</a> 
          <a href="/profile/details">Details</a>
          <a href="/profile/settings">Settings</a>
        </nav>
        <div className='profile-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
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
              <ProfileLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path='details' element={<ProfileDetails />} />
          <Route path='settings' element={<ProfileSettings />} />
        </Route>

        <Route path="/blog/:postId" element={<BlogPost />} />

        <Route path='*' element={<NotFound />}/>
      </Routes>
  );
}

export default App
