import Link from "next/link";
import Image from "next/image";
import LogoImage from "/public/assets/Logo.webp";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Image
        className="object-contain max-w-full"
        src={LogoImage}
        width={90}
        height={50}
        alt="Logo"
        priority></Image>
    </Link>
  );
};

export default Logo;
