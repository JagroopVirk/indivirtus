import React from "react"
import { Menu } from "@headlessui/react"

export const NavBar = () => {
  return (
    <div className="flex justify-between min-w-full">
      <div>
        <img src="./indivirtus-logo.png" alt="logo" />
      </div>

      <nav className="flex justify-between w-4/5 text-primary">
        <Menu>
          <Menu.Button>
            <a href="#">Home</a>
          </Menu.Button>
        </Menu>
        <Menu>
          <Menu.Button>About us</Menu.Button>
          <Menu.Items>
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
        <Menu>
          <Menu.Button>
            <a href="#">Downloads</a>
          </Menu.Button>
        </Menu>
        <Menu>
          <Menu.Button>
            <a href="#">Our Clients</a>
          </Menu.Button>
        </Menu>
        <Menu>
          <Menu.Button>
            <a href="#">Career</a>
          </Menu.Button>
        </Menu>
        <Menu>
          <Menu.Button>
            <a href="#">Honors</a>
          </Menu.Button>
        </Menu>
        <Menu>
          <Menu.Button>
            <a href="#">Gallery</a>
          </Menu.Button>
        </Menu>
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
