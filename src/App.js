
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/tools/header/NavBar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Footer from './components/tools/footer/Footer';
import SignUp from './components/tools/signUp/SignUp';
import Login from './components/tools/login/Login';
import StudentDashboard from './components/studentDashboard/StudentDashboard';
import CourseDetails from './components/coursePageTools/CourseDetails';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<StudentDashboard />} />
          <Route exact path='/courses/course-details/:id' element={<CourseDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
