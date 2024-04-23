
function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto text-center">
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
        <p className="mt-4">© 2024 Fresh Picks</p>
      </div>
    </footer>
  );
}

export default Footer;
