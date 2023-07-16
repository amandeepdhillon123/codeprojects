import Link from "next/link";
import "./about.css";

const layout = ({ children }) => {
  return (
    <div>
      <ul className="about-menu">
          <li>Navbar</li>
        <li>
          <Link href={"/about"}>About main</Link>{" "}
        </li>
        <li>
          <Link href={"/about/aboutCollege"}>About College</Link>
        </li>
        <li>
          <Link href={"/about/aboutStudent"}>About Student</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
