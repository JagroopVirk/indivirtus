import React from "react"

export const NavBar = () => {
  return (
    <div className="flex justify-between min-w-full">
      <div className="logo">
        <img src="./indivirtus-logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex">
          <li>Home</li>
          <ul>
            <li>About us</li>
            <li>Vision, Mission and Quality Policy</li>
            <li>Security and Confidentiality</li>
            <li>Terms, Policy, Payments and Refunds</li>
          </ul>
          <ul>
            <li>Group Companies and Services</li>
            <li>Indivirtus Healthcare Services Pvt. Ltd.</li>
            <li>Indivirtus Solutions Pvt. Ltd.</li>
            <li>Indivirtus Strategic Solutions Pvt. Ltd.</li>
            <li>Indivirtus AB7 Scribing and RCM Pvt. Ltd.</li>
          </ul>
          <li>Downloads</li>
          <li>Our Clients</li>
          <li>Career</li>
          <li>Honors</li>
          <li>Gallery</li>
          <ul>
            <li>Contact Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </ul>
      </nav>
    </div>
  )
}
