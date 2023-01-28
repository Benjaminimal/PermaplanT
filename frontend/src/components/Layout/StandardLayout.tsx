interface StandardLayoutProps {
  children: React.ReactNode;
  styleNames?: string;
}

const StandardLayout = ({ children, styleNames }: StandardLayoutProps) => {
  return <div className={`mx-auto w-full p-4 md:w-[900px] ${styleNames}`}>{children}</div>;
};

export default StandardLayout;
