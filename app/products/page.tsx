import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton";
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { prisma } from '@/prisma/prisma-client';


export default async function Products() {
  const category = await prisma.category.findMany({
    include:{
      products:true,
    },
  })

  return ( <>
  <div className="bg-sky-700">
  <Container className="flex items-center justify-center p-8">
 
  <Title text="Оборудование" size="lg" className="font-bold text-gray-100"/>


  </Container>
  </div>
  
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
          <BreadcrumbPage>Оборудование</BreadcrumbPage>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>

    </Container>
    
    <Container className="px-8">
    {
    category.map((category) =>(
      category.products.length > 0 && category.id === (1 || 2 || 3) &&(
        <ProductsGroupList
        key={category.id}
        title={category.name}
        items={category.products}
        categoryTitle={category.categoryTitle}
        className="mt-12"
        />
      )))
    }

   
    
    </Container>
   </>
  );
}
