import { SVGProps } from "react";

export interface StallIconType extends SVGProps<SVGSVGElement> {
  name?: string;
  size?: number | string;
  color?: string;
}


export interface IconReference {
  name: string;
  tags: string[];
  icon: React.ComponentType<StallIconType>;
}
