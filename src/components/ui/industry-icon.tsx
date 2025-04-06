"use client"

import { ReactNode } from "react";
import { 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  Stethoscope, 
  GraduationCap, 
  Home 
} from "lucide-react";
import { IconType } from "@/data/industries";

export function IndustryIcon({ iconType }: { iconType: IconType }): ReactNode {
  switch (iconType) {
    case 'building2':
      return <Building2 className="h-6 w-6" />;
    case 'shopping-bag':
      return <ShoppingBag className="h-6 w-6" />;
    case 'briefcase':
      return <Briefcase className="h-6 w-6" />;
    case 'stethoscope':
      return <Stethoscope className="h-6 w-6" />;
    case 'graduation-cap':
      return <GraduationCap className="h-6 w-6" />;
    case 'home':
      return <Home className="h-6 w-6" />;
    default:
      return <Building2 className="h-6 w-6" />;
  }
} 