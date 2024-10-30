import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import TestimonialsPage from '../testimonialsPage/testimonialsPage';
import ContactPage from '../ContactPage/ContactPage';
import LoginPage from '../LoginPage/index';
import ForgotPassword from '../ForgotPassword/index';
import Register from '../SignUpPage/index';
import ErrorPage from '../ErrorPage/ErrorPage';
import PrivacePage from '../PrivacePage/PrivacePage';
import TermsPage from '../TermsPage/TermsPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='testimonials' element={<TestimonialsPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="register" element={<Register />} />
          <Route path='404' element={<ErrorPage />} /> 
          <Route path='privace' element={<PrivacePage />} /> 
          <Route path='terms' element={<TermsPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
