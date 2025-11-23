import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/Search'
import UserCard from './components/UserCard'
import UserList from './components/UserList'
import LoadingSpinner from './components/LoadingSpinner'
import { fetchUserData } from './services/githubService'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            GitHub User Search
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-90">
            Find GitHub users by username, location, or repository count
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <Search />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-20">
        <p className="text-sm">
          Built with React • Vite • Tailwind CSS • GitHub API
        </p>
      </footer>
    </div>
  );
}
