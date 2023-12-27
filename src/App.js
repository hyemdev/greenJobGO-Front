import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Student from "./pages/Student";
import Business from "./pages/Business";
import JobManager from "./components/business/managerlist/JobManager";
import PortfolioList from "./components/business/portfolio/PortfolioList";
import ResumeAdd from "./components/student/ResumeAdd/ResumeAdd";
import Mypage from "./components/student/Mypage/Mypage";
import StudentIntro from "./components/student/StudentIntro";
import BusinessIntro from "./components/business/BusinessIntro";
import PortfolioDetail from "./components/business/portfolio/PortfolioDetail";
import { createBrowserRouter } from "react-router-dom";
import { RouterInfo } from "./pages/RouterInfo";

function App() {
  const RouterObj = createBrowserRouter(RouterInfo);
  return (
    // <>
    //   <RouterProvider router={RouterObj} />
    // </>
    <>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />
        {/* 수강생 페이지 */}
        <Route path="/student/*" element={<Student />}>
          {/* 수강생 페이지 초기화면 */}
          <Route index element={<StudentIntro />} />
          {/* 마이 페이지 */}
          <Route path="mypage" element={<Mypage />} />
          {/* 이력서 등록 */}
          <Route path="resumeadd" element={<ResumeAdd />} />
        </Route>

        {/* 기업페이지 */}
        <Route path="/business/*" element={<Business />}>
          {/* 기업 페이지 초기화면 */}
          <Route index element={<BusinessIntro />} />
          {/* 포트폴리오 리스트 */}
          <Route path="portpoliolist" element={<PortfolioList />} />
          {/* 포트폴리오 상세내역(수강생 정보) */}
          <Route
            path="portfoliodetail/:iportNum"
            element={<PortfolioDetail />}
          />
          {/* 취업담당자 리스트 */}
          <Route path="jobmanager" element={<JobManager />} />
        </Route>
        {/* 경로 외 접속 시 낫파운드 */}
        <Route index path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
