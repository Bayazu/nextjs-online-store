'use client';

import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/@types/prisma';
import { ProductForm } from '../product-form';
import { Dialog } from '@/components/ui';
import { cn } from '@/lib/utils';
import { DialogContent } from '@/components/ui/dialog';
import { FC } from 'react';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

// TODO не использовать модальное окно, как отдельную страницу, это полное говнище, за исключением того, если после f5 нужно открыть новую страницу
export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
