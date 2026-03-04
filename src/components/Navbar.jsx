function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Todo App</h1>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">About</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;