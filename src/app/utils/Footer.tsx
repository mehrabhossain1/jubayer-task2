const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          © 2024 MD. Jubayer. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
