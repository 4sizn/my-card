import { Navbar } from "@/components/service/navbar";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>{children}</div>
      <Navbar />
    </div>
  );
}
