import React from "react"
import { Menu } from "@headlessui/react"

export const NavBar = () => {
  return (
    //   <Menu>
    //   <Menu.Button>More</Menu.Button>
    //   <Menu.Items>
    //     <Menu.Item>
    //       {({ active }) => (
    //         <a
    //           className={`${active && 'bg-blue-500'}`}
    //           href="/account-settings"
    //         >
    //           Account settings
    //         </a>
    //       )}
    //     </Menu.Item>
    //     <Menu.Item>
    //       {({ active }) => (
    //         <a
    //           className={`${active && 'bg-blue-500'}`}
    //           href="/account-settings"
    //         >
    //           Documentation
    //         </a>
    //       )}
    //     </Menu.Item>
    //     <Menu.Item disabled>
    //       <span className="opacity-75">Invite a friend (coming soon!)</span>
    //     </Menu.Item>
    //   </Menu.Items>
    // </Menu>

    <div className="flex justify-between min-w-full">
      <div className="logo">
        <img src="./indivirtus-logo.png" alt="logo" />
      </div>

      <nav className="flex justify-between w-4/5">
        <a href="#">Home</a>
        <Menu>
          <Menu.Button>About us</Menu.Button>
          <Menu.Items className="flex">
            <Menu.Item>
              <a href="#">Vision, Mission and Quality Policy</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Security and Confidentiality</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Terms, Policy, Payments and Refunds</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <Menu>
          <Menu.Button>Group Companies and Services</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              <a href="#">Indivirtus Healthcare Services Pvt. Ltd.</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Indivirtus Solutions Pvt. Ltd.</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Indivirtus Strategic Solutions Pvt. Ltd.</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">Indivirtus AB7 Scribing and RCM Pvt. Ltd.</a>
            </Menu.Item>
          </Menu.Items>
          </Menu>
          <a href="#">Downloads</a>
          <a href="#">Our Clients</a>
          <a href="#">Career</a>
          <a href="#">Honors</a>
          <a href="#">Gallery</a>
          <Menu>
          <Menu.Button>Contact Us</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              <a href="#">Contact Us</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">FAQs</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </nav>
    </div>
  )
}
