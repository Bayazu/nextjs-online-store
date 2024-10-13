import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CartButton } from '@/components/shared/cart-button';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { Container } from './container';
import { SearchInput } from './search-input';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className={'flex items-center justify-between py-8'}>
        {/*Левая часть*/}
        <Link href={'/'}>
          <div className={'flex items-center gap-4'}>
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className={'text-2xl uppercase font-black'}>Next Pizza</h1>
              <h1 className={'text-sm text-gray-400 leading-3'}>вкуснее уже некуда</h1>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant={'outline'} className={'flex items-center gap-1'}>
            <User size={16} />
            Войти
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
