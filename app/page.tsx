import Navbar from "@/components/navbar";

export default function Home({ children }: Readonly<{children:React.ReactNode}>) {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main className="">{children}</main>
      <footer className=""></footer>
    </div>
  );
}
