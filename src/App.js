import { Route, Routes } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
// 기업페이지
import Business from "./pages/businessPages/Business";
import BusinessIntro from "./pages/businessPages/BusinessIntro";
import PortfolioList from "./pages/businessPages/PortfolioList";
import PortfolioDetail from "./pages/businessPages/PortfolioDetail";
import JobManagerList from "./pages/businessPages/JobManagerList";
// 수강생 페이지
import Student from "./pages/studentPages/Student";
import MyPortfolioMg from "./pages/studentPages/MyPortfolioMg";
import Mypage from "./pages/studentPages/Mypage";
import ConnectCompany from "./pages/studentPages/ConnectCompany";
import { PrivateRoutes } from "./components/PrivateRoutes";
import AddPortFolio from "./pages/studentPages/AddPortFolio";

function App() {
  return (
    <>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />
        {/* 수강생 페이지 */}
        <Route
          path="/student/*"
          element={<PrivateRoutes element={<Student />} />}
        >
          {/* 나의 포트폴리오 관리*/}
          <Route index element={<MyPortfolioMg />} />
          <Route path="myportfolio" element={<MyPortfolioMg />} />
          {/* 이력서 등록 */}
          <Route path="addportfolio" element={<AddPortFolio />} />
          {/* 마이 페이지 */}
          <Route path="mypage" element={<Mypage />} />
          {/* 협약기업 리스트 */}
          <Route path="connectcompany" element={<ConnectCompany />} />
        </Route>

        {/* 기업페이지 */}
        <Route
          path="/business/*"
          element={<PrivateRoutes element={<Business />} />}
        >
          {/* 기업 페이지 초기화면 */}
          <Route index element={<BusinessIntro />} />
          {/* <Route path="businessintro" element={<BusinessIntro />} /> */}
          {/* 포트폴리오 리스트 */}
          <Route path="portpoliolist" element={<PortfolioList />} />
          {/* 포트폴리오 상세내역(수강생 정보) */}
          <Route path="portfoliodetail/:userId" element={<PortfolioDetail />} />
          {/* 취업담당자 리스트 */}
          <Route path="jobmanagerlist" element={<JobManagerList />} />
        </Route>
        {/* 경로 외 접속 시 낫파운드 */}
        <Route index path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
