import { useEffect } from "react";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

NProgress.configure({ easing: "ease", speed: 800 });
NProgress.configure({ showSpinner: true });

export const LazyLoad = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return null;
};
