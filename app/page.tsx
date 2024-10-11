import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className={'mt-10'}>
        <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'} />
      </Container>
      <TopBar />

      <Container className={'mt-10 pb-14'}>
        <div className={'flex gap-[80px]'}>
          <div className={'w-[250px]'}>
            <Filters />
          </div>

          <div className={'flex-1'}>
            <div className={'flex flex-col gap-16'}>
              <ProductsGroupList
                title={'Пиццы'}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Завтрак'}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D613B84A5DBB4C1C50FB9583B7E.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
