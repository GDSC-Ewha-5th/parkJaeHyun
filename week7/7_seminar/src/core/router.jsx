
import { BrowserRouter, Route, Routes } from 'react-router-dom';'react-router-dom';
import Home from '../pages/Home';
import Write from '../pages/Write';
import Edit from '../pages/Edit';

function Router()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      </BrowserRouter>
  );
}

export default Router;
