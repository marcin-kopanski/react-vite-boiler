import { Route, Routes } from 'react-router-dom';
import { Demo } from 'src/views/demo/Demo';

export const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Demo />}></Route>
    </Routes>
  );
};
