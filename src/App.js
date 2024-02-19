import { Route, Routes, useLocation } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import { PrivateRoutes } from "./components/PrivateRoutes";
import Loading from "./components/Loading";
import { removeCookie } from "./api/cookie";
import { Interceptor } from "./api/client";

// 로그인페이지
const Login = lazy(() => import("./pages/Login"));
// 기업페이지
const Business = lazy(() => import("./pages/businessPages/Business"));
const BusinessIntro = lazy(() => import("./pages/businessPages/BusinessIntro"));
const PortfolioList = lazy(() => import("./pages/businessPages/PortfolioList"));
const PortfolioDetail = lazy(
  () => import("./pages/businessPages/PortfolioDetail"),
);
const JobManagerList = lazy(
  () => import("./pages/businessPages/JobManagerList"),
);
// 수강생 페이지
const Student = lazy(() => import("./pages/studentPages/Student"));
const MyPortfolioMg = lazy(() => import("./pages/studentPages/MyPortfolioMg"));
const Mypage = lazy(() => import("./pages/studentPages/Mypage"));
const ConnectCompany = lazy(
  () => import("./pages/studentPages/ConnectCompany"),
);
const AddPortFolio = lazy(() => import("./pages/studentPages/AddPortFolio"));
const AddResume = lazy(() => import("./pages/studentPages/AddResume"));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      removeCookie("accessToken");
      removeCookie("refreshToken");
    }
  }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Interceptor>
          <Routes>
            {/* 로그인 페이지 */}
            <Route path="/" element={<Login />} />
            {/* 수강생 페이지 */}
            <Route
              path="/student/"
              element={<PrivateRoutes element={<Student />} />}
            >
              {/* 나의 포트폴리오 관리*/}
              <Route index element={<MyPortfolioMg />} />
              <Route path="myportfolio" element={<MyPortfolioMg />} />
              {/* 이력서 등록 */}
              <Route path="addresume" element={<AddResume />} />
              {/* 포트폴리오 등록 */}
              <Route path="addportfolio" element={<AddPortFolio />} />
              {/* 마이 페이지 */}
              <Route path="mypage" element={<Mypage />} />
              {/* 협약기업 리스트 */}
              <Route path="connectcompany" element={<ConnectCompany />} />{" "}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            {/* 기업페이지 */}
            <Route
              path="/business/"
              element={<PrivateRoutes element={<Business />} />}
            >
              {/* 기업 페이지 초기화면 */}
              <Route index element={<BusinessIntro />} />
              <Route path="businessintro" element={<BusinessIntro />} />
              {/* 포트폴리오 리스트 */}
              <Route path="portpoliolist" element={<PortfolioList />} />
              {/* 포트폴리오 상세내역(수강생 정보) */}
              <Route
                path="portfoliodetail/:userId"
                element={<PortfolioDetail />}
              />
              {/* 취업담당자 리스트 */}
              <Route path="jobmanagerlist" element={<JobManagerList />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            {/* 경로 외 접속 시 낫파운드 */}
            <Route index path="*" element={<NotFound />} />
          </Routes>
        </Interceptor>
      </Suspense>
    </>
  );
};

export default App;
