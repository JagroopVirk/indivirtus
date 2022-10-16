import React from "react"
// <script src="https://kit.fontawesome.com/6f5fce968f.js" crossorigin="anonymous"></script>
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter } from "@fortawesome/free-brand-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

export const TopBar = () => {
  return (
    <section className="bg-primary w-full text-secondary">
      <h3>
        <p>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>{" "}
          Indivirtus Healthcare Services +91 9131925456, +91 6280918142
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>{" "}
          Indivirtus Solutions (+1) 323.412.5391, (+1) 323.522.5967
        </p>
      </h3>
      <h3>
        <a href="#">Click here</a> to upload your resume for Medical Scribe job.
        For queries call +91 78142 08906
      </h3>
    </section>
  )
}
