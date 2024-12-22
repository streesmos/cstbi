import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import Link from 'next/link';
import { Product } from '@prisma/client';

interface Props {
  id: string;
  name: string;
  imageUrl?: string;
  className?: string;
  categoryTitle: string;
}

export const ProductCard: React.FC<Props> = ({ id,name,  imageUrl, className,categoryTitle }) => {

  

  return (
    
    <div className={cn(className)} >
      <Link href={`/products/${categoryTitle}/${id}`}>
      <div className="flex justify-center p-6 bg-white rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
      </div>
      <Title text={name} size="xs" className="mb-1 mt-3 font-medium" />
       </Link>
    

      
    </div>
  );
};
