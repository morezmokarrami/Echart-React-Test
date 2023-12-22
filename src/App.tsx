import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react"
import Loading from "./components/Loading/SuspenseLoading"
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))



function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
