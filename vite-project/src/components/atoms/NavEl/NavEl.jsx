import "./NavEl.scss";

const NavEl = ({ link }) => {
  return (
    <li>
      <a href={link}>{link}</a>
    </li>
  );
};

export default NavEl;
