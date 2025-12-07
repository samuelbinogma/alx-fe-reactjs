import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">TastyHub</Link>
            <div className="space-x-6">
                <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
                <Link to="/add-recipe" className="text-orange-600 font-medium">Add Recipe</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;