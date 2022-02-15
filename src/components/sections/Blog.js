import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

const Blog = ({ owner, description, title, Category, id }) => {
    id = btoa(id);

    const [flag, setFlag] = useState('');
    const [response, setResponse] = useState('');



    const check = () => {


        axios.get(`http://127.0.0.1:8000/api/Flag/${id}/${flag}`)
            .then(res => setResponse(res.data))
            .then(response.state == "success" ? window.location.href = `/Blogs/${id}` : "Blogs")
        /* 
                if (response.state == "success") {
                    console.log(id);
                    console.log(flag);
                    console.log(response);
        
        
                    //let check_flag = true;
                    //window.location.href = check_flag ? `/Blogs/${id}` : "Blogs";
                }
        
                else
                    alert('something went wrong'); */
    }

    return (


        /*   <div className="tiles-item reveal-from-middle" data-reveal-delay="200" > */
        <div className="tiles-item " data-reveal-delay="200">
            <div className="tiles-item-inner" >{owner}
                <div className="testimonial-item-content" >
                    <p style={{ width: "200px", color: "red", wordWrap: "break-word" }}>
                        {description}
                    </p>

                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name text-color-high">{title}</span>
                    <span className="testimonial-item-link"><Link to={`/Blogs/Category/${Category}`} className="text-color-low">/ {Category}</Link>
                    </span>

                    <Popup trigger={<Link>see more</Link>}>
                        <input onChange={event => setFlag(event.target.value)} type="text" name="flag" className="form-control" placeholder="you need to enter the flag first" required style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }} />

                        <Link onClick={check}>check</Link>
                    </Popup>

                </div>

            </div>

        </div >


    )
}

export default Blog;