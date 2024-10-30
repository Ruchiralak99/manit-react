import React from "react";
import { Link } from "react-router-dom";
import blogs from '../../api/blogs'
import SectionTitle from "../SectionTitle/SectionTitle";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {




    return (

        <section className="blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle subtitle="Recent News" title="Our Latest News" />
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, bkye) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card">
                                <div className="image">
                                    <img src={blog.screens} alt="" />
                                    <span>{blog.catagory}</span>
                                </div>
                                <div className="content">
                                    <ul className="date">
                                        <li>{blog.create_at}</li>
                                        <li>{blog.name}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                    <div className="link">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><span>Continue Reading</span>
                                            <i className="ti-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default BlogSection;










