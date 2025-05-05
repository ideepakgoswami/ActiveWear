import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";

const NavLinks = () => {
  return (
    <nav className="flex flex-col items-center justify-center gap-6 text-lg md:flex-row md:gap-14 tracking-wide text-cloud">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/sign-in">Sign In</Link>
      <Link className="text-2xl" href="/cart">
        {<IoBagHandleOutline />}
      </Link>
    </nav>
  );
};
export default NavLinks;
