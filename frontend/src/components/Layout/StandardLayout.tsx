const StandardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto w-full p-4 md:w-[900px]">{children}</div>;
};

export default StandardLayout;
