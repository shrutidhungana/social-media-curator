export type Provider = {
  id: string;
  label: string;
  LogoComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};
