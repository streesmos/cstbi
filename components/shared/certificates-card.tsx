import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import Link from 'next/link';
import { Product } from '@prisma/client';

interface Props {
  title: string;
  name: string;
  imageUrl?: string;
  className?: string;
}

export const CertificatesCard: React.FC<Props> = ({ title,name,  imageUrl, className }) => {

  

  return (
    
    <div className={cn(className)} >
      <Link href={`/certificates/${title}`}>
      <div className="flex justify-center p-6 bg-white rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
      </div>
      <Title text={name} size="xs" className="mb-1 mt-3 font-medium" />
       </Link>
    

      
    </div>
  );
};
