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

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  heading: string;
  links?: FooterLink[];
  contactInfo?: {
    addressLines: string[];
    phone: string;
    fax: string;
    email: string;
  };
}
