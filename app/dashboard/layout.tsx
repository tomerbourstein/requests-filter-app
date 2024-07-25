const goBack: string = "<- GO BACK";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 px-10 py-5">
      <header
        id="header"
        className="flex flex-row gap-5 justify-between w-full"
      >
        <div id="header-logo-back" className="flex gap-5">
          <button>LOGO</button>
          <button>{goBack}</button>
        </div>
        <div id="navbar-buttons" className="flex flex-row gap-5">
          <button>Overview</button>
          <button>Requests</button>
          <button>Visuals</button>
        </div>
      </header>

      {children}
      <footer className="">
        <p>Designed and Built by</p>
        <p>© Tomer Bourstein </p>
      </footer>
    </main>
  );
}
