'use client';

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { FC } from 'react';

import { CartDrawer } from '@/components/shared/cart-drawer';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cart';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  const cartState = useCartStore((state) => state);

  return (
    <CartDrawer>
      <Button
        loading={cartState.loading}
        className={cn('group relative', { 'w-[105px]': cartState.loading }, className)}
      >
        <b>{cartState.totalAmount} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>{cartState.items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
