import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import ManajemenKas from "./pages/ManajemenKas/ManajemenKas";
import UnitUsaha from "./pages/UnitUsaha/UnitUsaha";
import FormElements from "./pages/Forms/FormElements";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Piutang from "./pages/PiutangUtang/Piutang";
import Utang from "./pages/PiutangUtang/Utang";
import Pengeluaran from "./pages/Transaksi/Pengeluaran";
import Pemasukan from "./pages/Transaksi/Pemasukan";
import DetailUnit from "./pages/UnitUsaha/DetailUnit";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/manajemen-kas" element={<ManajemenKas />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Unit Usaha */}
            <Route path="/unit-usaha" element={<UnitUsaha />} />
            <Route path="/unit-usaha/detail/:id" element={<DetailUnit />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />

            {/* Piutang & Utang */}
            <Route path="/piutang" element={<Piutang />} />
            <Route path="/utang" element={<Utang />} />

            {/* Transaksi */}
            <Route path="/pengeluaran" element={<Pengeluaran />} />
            <Route path="/pemasukan" element={<Pemasukan />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
