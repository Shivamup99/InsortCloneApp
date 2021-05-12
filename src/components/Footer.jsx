import React from 'react'

function Footer() {
    return (
       <>
    <div className="footer">
      <span className="name">
        News app clone made by  {"   "} @2021 privacy issues <br/>
        <spam className="sh">Shivam Upadhyay</spam>
        
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/this_is_shivam45/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/shivamup" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a> 

        <a href="https://github.com/Shivamup99" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
       </>
    )
}

export default Footer
