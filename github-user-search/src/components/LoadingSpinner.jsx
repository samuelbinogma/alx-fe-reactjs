// src/components/LoadingSpinner.jsx
export default function LoadingSpinner() {
  return (
    <div className="text-center py-32">
      <div className="inline-block w-16 h-16 border-8 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-8 text-2xl text-gray-600 font-medium">Searching GitHub users...</p>
    </div>
  );
}