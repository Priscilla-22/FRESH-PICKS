
function Hero() {
  return (
    <div className="flex-grow bg-center bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D)` }}>
      <div className="container mx-auto px-4 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Fresh Picks!</h2>
        <p className="mb-8">We deliver the freshest produce right to your door.</p>
        <button className="bg-white text-green-700 py-2 px-4 rounded-full hover:bg-blue-100">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
