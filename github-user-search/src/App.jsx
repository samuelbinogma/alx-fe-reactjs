// src/App.jsx
import Search from './components/Search';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16 shadow-2xl">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">GitHub User Search</h1>
          <p className="mt-4 text-xl md:text-2xl opacity-90">Advanced search by location & repos</p>
        </div>
      </header>

      <main className="flex-1 py-12">
        <Search />
      </main>

      <footer className="bg-gray-900 text-gray-400 text-center py-8 text-sm">
        <p>React + Vite + Tailwind CSS + GitHub API</p>
      </footer>
    </div>
  );
}