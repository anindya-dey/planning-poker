function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/12 p-6 border border-gray-200 rounded shadow-sm">
        <div className="my-4 text-3xl text-center text-indigo-600">Planning Poker</div>
        <form className="w-full">
          <div className="flex w-full">
            <input type="text" className="my-4 py-2 w-3/5 rounded mr-2 border border-gray-300 placeholder:text-indigo-300 text-indigo-600 focus:ring-indigo-600" placeholder="Room Id"/>
            <button type="submit" className="my-4 px-6 py-2 w-2/5 bg-indigo-600 text-white rounded mr-2 hover:bg-indigo-800 hover:cursor-pointer">Join a Room</button>
          </div>
        </form>
        <div className="my-4 px-6 py-2 rounded-md text-center text-indigo-600 border border-indigo-600 hover:text-white hover:bg-indigo-600 mr-2 hover:cursor-pointer">Create New Room</div>
      </div>
    </div>
  );
}

export default App;
