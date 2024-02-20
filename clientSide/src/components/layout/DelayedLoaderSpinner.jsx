import React, { useState, useEffect } from "react";
import LoaderSpinner from "./LoaderSpinner";  

function DelayedLoaderSpinner() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLoader(true);
    }, 1000); // 这里设置了1秒的延迟

    return () => clearTimeout(delay);
  }, []); // 空数组确保只在组件挂载后执行一次

  return (
    <div>
      {showLoader && <LoaderSpinner />}{" "}
      {/* 当showLoader为true时显示Loader Spinner */}
    </div>
  );
}

export default DelayedLoaderSpinner;
