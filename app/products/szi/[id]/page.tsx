
import { prisma } from '@/prisma/prisma-client';
import { notFound } from "next/navigation";
import { Container } from '@/components/shared/container';
import { ProductImage } from '@/components/shared/product-image';
import { ProductName } from '@/components/shared/product-name';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import { ProductTable } from '@/components/shared/product-table';
import { Title } from '@/components/shared/title';
import { ProductContent } from '@/components/shared/product-content';
import { ProductSim } from '@/components/shared/product-sim';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' },  { id: '4' },
          { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' },
          { id: '9' }, { id: '10' }, { id: '11' }, { id: '12' },
          { id: '13' }, { id: '14' }, { id: '15' }, { id: '16' }, { id: '17' },
  ]
}

export default async function ProductPage({params:{id}} : {params:{id:string}}){
    const product = await prisma.product.findFirst({where:{id: Number(id)} })
    const tableItems = await prisma.table.findMany({where:{productId: Number(id)} })
    const sim = await prisma.simProducts.findMany((
      {where:{productId: Number(id)},
       }))
    const simItems = await prisma.product.findMany((
        {
         }))
   
 
    if (!product) {
        return notFound();
    }

    return (
      <>
        <Container className="flex items-center justify-start p-8">

        <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Оборудование</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/szi">Средства защиты информации</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{product.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </Container>
  <Container className="flex flex-col my-10 items-start md:flex-row">      
    <ProductImage imageUrl={product.imageUrl} name={product.name} className='w-full md:w-1/3'/>
    <div  className='w-full md:w-2/3'>          
      <ProductName name={product.name}  />
      <p className='flex items-center justify-end flex-1 px-8 py-2'>Артикул: 00{product.id}</p>
      <ProductTable   items={tableItems}/>
    </div>
   </Container>
   <Container className="flex flex-col  my-1 items-start">
    <Title text='Описание' size='sm' className="font-bold mb-5 px-8" />
    <ProductContent content={product.content}  />
   </Container>
  <Container className="flex flex-col  my-12 items-start">
    <Title text='Похожие товары' size='sm' className="font-bold mb-5 px-8" />
    <ProductSim items={simItems} itemsz= {sim}/> 
  </Container>
        </>
      );
      
} 