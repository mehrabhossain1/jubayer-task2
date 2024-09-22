import Link from "next/link";

const Navigation = () => {
  return (
    <div className="space-x-4 font-bold">
      <Link href="#" className="hover:text-gray-400">
        Home
      </Link>
      <Link href="#" className="hover:text-gray-400">
        Contact
      </Link>
      <Link href="#" className="hover:text-gray-400">
        About Us
      </Link>
    </div>
  );
};

export default Navigation;
