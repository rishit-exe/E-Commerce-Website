import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div>
        <h1>Contact me anytime</h1>
        <button>
            <Link href={"https://www.linkedin.com/in/the-rishit-srivastava/"}>
                LinkedIn (Click me)
            </Link>
        </button>

    </div>
  )
}

export default Contact