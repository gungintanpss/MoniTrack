import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        <div
          className="relative items-center hidden h-full lg:w-[480px] bg-cover bg-center lg:grid"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="absolute inset-0 bg-[#D9DDFF] opacity-40 z-10"></div>

          <img
            src="/images/logo.png"
            alt="Logo"
            className="absolute z-20"
            style={{
              width: 158,
              height: 38,
              left: 42,
              top: 33,
            }}
          />

          <div
            className="absolute z-20 leading-tight"
            style={{
              left: 40,
              top: 100,
              fontSize: 38,
              color: "white",
              fontWeight: "bold",
            }}
          >
            TRACK EVERY{" "}
            <span style={{ color: "#3A3F63" }}>RUPIAH</span>
            <br />
            FOR EVERY <span style={{ color: "#3A3F63" }}>BUSINESS</span>
            <br />
            GROW <span style={{ color: "#3A3F63" }}>SMARTER</span>
          </div>
        </div>

        {children}

        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
