import "./container.css";
type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="tw-container mx-auto px-5">{children}</div>;
};

export default Container;
