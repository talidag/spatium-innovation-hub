import "./NavEl.scss";

const NavEl = ({ link }) => {
  return (
    <li>
      <a
        href={
          link === "About Us"
            ? "about"
            : link === "Home"
            ? ""
            : link.toLowerCase()
        }
      >
        {link}
      </a>
    </li>
  );
};

export default NavEl;
