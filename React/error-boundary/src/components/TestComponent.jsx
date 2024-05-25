import { useEffect } from "react";

const TestComponent = ({ isLogin = false }) => {
  useEffect(() => {
    if(!isLogin) {
      throw new Error('test error');
    }
  }, [isLogin]);
  return <p>Test</p>;
}

export default TestComponent;