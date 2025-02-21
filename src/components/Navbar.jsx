import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-dark-bg fixed w-full z-50">
      <Link to="/">
        <h1 className="luxury-gold text-2xl font-bold">My Brand</h1>
      </Link>
      <div className="flex space-x-6">
        {[
          "AboutMe",
          "Skills",
          "Hobbies",
          "Passions",
          "Academic Background",
        ].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(" ", "-")}`}
            className="text-light-text hover:luxury-gold"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
