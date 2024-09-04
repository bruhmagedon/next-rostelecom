'use client';
import { closeModal } from '@/lib/features/modals/modalsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import './menu.scss';
import { Icon20Cancel } from '@vkontakte/icons';
import { reverseBodyOverflowHidden } from '@/lib/utils/common';
import Image from 'next/image';
import bgImage from '@/images/MenuBG.png';
import { Logo } from '@/components/elements/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface MenuProps {
  className?: string;
}

export const Menu = (props: MenuProps) => {
  const {} = props;
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const [showCatalogList, setShowCatalogList] = useState(false); // Меню каталога
  const [showBuyersList, setShowBuyersList] = useState(false); // Меню покупателя
  const [showContactsList, setShowContactsList] = useState(false); // Меню контактов

  const handleCloseMenu = () => {
    reverseBodyOverflowHidden();
    dispatch(closeModal());
  };

  const clothLinks = [
    {
      id: 1,
      text: 'Футболки',
      href: '/catalog/cloth?offset=0&type=t-shirts'
    },
    {
      id: 2,
      text: 'Лонгсливы',
      href: '/catalog/cloth?offset=0&type=long-sleeves'
    },
    {
      id: 3,
      text: 'Худи',
      href: '/catalog/cloth?offset=0&type=hoodie'
    },
    {
      id: 4,
      text: 'Верхняя одежда',
      href: '/catalog/cloth?offset=0&type=outerwear'
    }
  ];

  const accessoriesLinks = [
    {
      id: 1,
      text: 'Сумки',
      href: '/catalog/accessories?offset=0&type=bags'
    },
    {
      id: 2,
      text: 'Головные уборы',
      href: '/catalog/accessories?offset=0&type=headdress'
    },
    {
      id: 3,
      text: 'Зонты',
      href: '/catalog/accessories?offset=0&type=umbrella'
    }
  ];

  const souvenirsLinks = [
    {
      id: 1,
      text: 'Бизнес-суверниры',
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs'
    },
    {
      id: 2,
      text: 'Промо-суверниры',
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs'
    }
  ];

  const officeLinks = [
    {
      id: 1,
      text: 'Тетради',
      href: '/catalog/office?offset=0&type=notebook'
    },
    {
      id: 2,
      text: 'Ручки',
      href: '/catalog/office?offset=0&type=pen'
    }
  ];

  return (
    // Анимация открытия навигации
    <nav
      className={`nav-menu fixed z-[1] h-full w-full overflow-x-hidden overflow-y-scroll bg-[#101828] ${isOpen ? 'top-0' : '-top-full'} `}
    >
      <div className='container relative pt-[25px]'>
        <div className='mb-[150px]'>
          <Logo />
        </div>
        <ul>
          <li>
            <button>Каталог</button>
            <AnimatePresence>
              {showCatalogList && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=''
                >
                  {''}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
        <Image className='absolute right-10 top-0 h-screen' src={bgImage} alt={'Текстура фона'} />
        <button
          onClick={handleCloseMenu}
          className={`absolute right-3 top-10 z-[1] opacity-100 hover:text-[#9466ff]`}
        >
          <Icon20Cancel width={30} height={30} />
        </button>
      </div>
    </nav>
  );
};

{
  /* <button onClick={() => dispatch(openModal())}>Open</button>;
<button onClick={() => dispatch(closeModal())}>Close</button>; */
}
