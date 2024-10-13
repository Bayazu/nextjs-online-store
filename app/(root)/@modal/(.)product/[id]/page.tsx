import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { ChooseProductModal } from '@/components/shared/modals';

// TODO не использовать модальное окно, как отдельную страницу, это полное говнище, за исключением того, если после f5 нужно открыть новую страницу
export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
