export interface NavItem {
  title: string;
  link: string;
  icon?: string;
  isActive?: boolean;
  subItems?: NavItem[];
  sortOrder?: number;
}


export interface InfobarItem{
  src:string,
  alt:string
}
