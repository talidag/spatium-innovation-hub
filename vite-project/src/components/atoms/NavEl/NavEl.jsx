import "./NavEl.scss";

const NavEl = ({ link }) => {
  return (
    <li>
      <a href={link.toLowerCase()}>{link}</a>
    </li>
  );
};

export default NavEl;
