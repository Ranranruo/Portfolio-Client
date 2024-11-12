import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const GetMainPage = lazy(()=> import("../pages/MainPage"));

const root = createBrowserRouter([
    {
        path: '',
        // 인덱스 페이지 접근시 Main 페이지를 import해서 보여주고 데이터를 불러오기 전까지 Loading 표시
        // element: <Suspense><Main /></Suspense>
    }
]);
export default root;