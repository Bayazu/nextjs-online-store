'use client';

import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: 'Пиццы',
  },
  { id: 2, name: 'Завтрак' },
];
const activeIndex = 0;

export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((cat, index) => {
        return (
          <a
            href={`/#${cat.name}`}
            key={index}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              categoryActiveId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary',
            )}
          >
            <button>{cat.name}</button>
          </a>
        );
      })}
    </div>
  );
};
