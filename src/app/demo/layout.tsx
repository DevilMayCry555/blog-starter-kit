import Container from "../_components/container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
