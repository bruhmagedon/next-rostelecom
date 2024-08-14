import {
  Icon20LikeOutline,
  Icon20ListPlusOutline,
  Icon20MenuOutline,
  Icon20Search,
  Icon20ShoppingCartOutline,
  Icon20UserCircleOutline,
} from "@vkontakte/icons";
import { Logo } from "@/components/elements/Logo";
import Link from "next/link";
import "./header.scss";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const {} = props;

  return (
    <header className="header">
      <div className="container header__container">
        <button className="header__burger">
          <Icon20MenuOutline />
          <p>Меню</p>
        </button>
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links">
          <li className="header__links__item">
            <button className="header__links__btn">
              <Icon20Search />
            </button>
          </li>
          <li className="header__links__item">
            <Link href="/favorite" className="header__links__btn">
              <Icon20LikeOutline />
            </Link>
          </li>
          <li className="header__links__item">
            <Link href="/comparison" className="header__links__btn">
              <Icon20ListPlusOutline />
            </Link>
          </li>
          <li className="header__links__item">
            <Link href="/cart" className="header__links__btn">
              <Icon20ShoppingCartOutline />
            </Link>
          </li>
          <li className="header__links__item">
            <Link
              href="/profile"
              className="header__links__btn header__links__btn--profile"
            >
              <Icon20UserCircleOutline />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
