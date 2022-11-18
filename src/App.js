import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto dark:bg-slate-700 dark:text-white'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
