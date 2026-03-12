import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="logo text-primary dark:text-white font-bold text-xl"
    >
      روضة الرياض
    </Link>
  );
};

export default Logo;
