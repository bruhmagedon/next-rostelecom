"use client";
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
import { useAppDispatch } from "@/lib/store/hooks";
import { openModal } from "@/lib/features/modals/modalsSlice";
import { reverseBodyOverflowHidden } from "@/lib/utils/common";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const {} = props;
  const dispatch = useAppDispatch();

  // Открытие меню
  const handleOpenMenu = () => {
    reverseBodyOverflowHidden();
    dispatch(openModal());
  };

  return (
    <header className="relative shadow-md shadow-black/2">
      <div className="container flex justify-between items-center py-[24px] px-[15px]">
        <button
          onClick={handleOpenMenu}
          className="flex items-center gap-3 font-medium text-2xl leading-8 hover:text-[#9466ff]"
        >
          <Icon20MenuOutline />
          <p>Меню</p>
        </button>
        <div className="absolute translate-x-[-65%] left-2/4 top-2">
          <Logo />
        </div>
        <ul className="flex gap-8">
          <li className="text-[#e8e9ea] hover:text-[#9466ff]">
            <button>
              <Icon20Search />
            </button>
          </li>
          <li className="text-[#e8e9ea] hover:text-[#9466ff]">
            <Link href="/favorite" className="">
              <Icon20LikeOutline />
            </Link>
          </li>
          <li className="text-[#e8e9ea] hover:text-[#9466ff]">
            <Link href="/comparison">
              <Icon20ListPlusOutline />
            </Link>
          </li>
          <li className="text-[#e8e9ea] hover:text-[#9466ff]">
            <Link href="/cart">
              <Icon20ShoppingCartOutline />
            </Link>
          </li>
          <li className="text-[#e8e9ea] hover:text-[#9466ff]">
            <Link href="/profile" className="overflow-hidden rounded-[50%]">
              <Icon20UserCircleOutline />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
