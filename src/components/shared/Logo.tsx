import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="logo text-primary dark:text-white font-bold md:text-xl flex items-center justify-center gap-1"
    >
      <Image
        width={1000}
        height={1000}
        src={"/images/logo/logo.png"}
        alt="logo"
        className="size-9 object-cover"
      />
      <p>روضة الرياض</p>
    </Link>
  );
};

export default Logo;
