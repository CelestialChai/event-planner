import { Outlet } from "react-router-dom";
import './App.css'; // Keep your existing CSS if needed
import './index.css'; // Ensure you import the file where Tailwind is set up

function App() {
  return (
    <>
      {/* Apply Tailwind utility classes to style the main layout */}
      <main className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;