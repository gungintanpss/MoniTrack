import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import ManajemenKas from "./pages/ManajemenKas/ManajemenKas";
import UnitUsaha from "./pages/UnitUsaha/UnitUsaha";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Piutang from "./pages/PiutangUtang/Piutang";
import Utang from "./pages/PiutangUtang/Utang";
import Pengeluaran from "./pages/Transaksi/Pengeluaran";
import Pemasukan from "./pages/Transaksi/Pemasukan";
import Laporan from "./pages/Laporan";
import DetailUnit from "./pages/UnitUsaha/DetailUnit";
import DetailKas from "./pages/ManajemenKas/DetailKas";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/manajemen-kas" element={<ManajemenKas />} />
            <Route path="/manajemen-kas/detail/:id" element={<DetailKas />} />

            <Route path="/unit-usaha" element={<UnitUsaha />} />
            <Route path="/unit-usaha/detail/:id" element={<DetailUnit />} />

            <Route path="/piutang" element={<Piutang />} />
            <Route path="/utang" element={<Utang />} />

            <Route path="/pengeluaran" element={<Pengeluaran />} />
            <Route path="/pemasukan" element={<Pemasukan />} />

            <Route path="/laporan" element={<Laporan />} />

          </Route>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
