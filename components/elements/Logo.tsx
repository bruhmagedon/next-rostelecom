import Link from "next/link";
import Image from "next/image";
import rostelecomIcon from "@/images/icons/rostelecom-logo.svg";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={"/"} className={className}>
      <Image src={rostelecomIcon} alt={"Логотип ростелекома"} />
    </Link>
  );
};
