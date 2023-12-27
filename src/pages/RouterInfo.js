import BusinessIntro from "../components/business/BusinessIntro";
import JobManager from "../components/business/managerlist/JobManager";
import PortfolioDetail from "../components/business/portfolio/PortfolioDetail";
import PortfolioList from "../components/business/portfolio/PortfolioList";
import Mypage from "../components/student/Mypage/Mypage";
import ResumeAdd from "../components/student/ResumeAdd/ResumeAdd";
import StudentIntro from "../components/student/StudentIntro";
import Business from "./Business";
import Layout from "./Layout";
import Login from "./Login";
import NotFound from "./NotFound";
import Student from "./Student";

export const RouterInfo = [
  {
    path: "/",
    element: <Layout />,
    // 기업페이지
    children: [
      {
        path: "business",
        element: <Business />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <BusinessIntro /> },
          { path: "portpoliolist", element: <PortfolioList /> },
          { path: "portfoliodetail/:iportNum", element: <PortfolioDetail /> },
          { path: "jobmanager", element: <JobManager /> },
        ],
      },
      // 수강생 페이지
      {
        path: "student",
        element: <Student />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <StudentIntro /> },
          { path: "mypage", element: <Mypage /> },
          { path: "resumeadd", element: <ResumeAdd /> },
        ],
      },
    ],
  },
];
