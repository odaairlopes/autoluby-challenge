import AppRoutes from "./routes/routes";
import { Suspense } from "react";
import { LazyLoad } from "./utils/lazyLoad";

function App() {
  return (
    <Suspense fallback={<LazyLoad />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
