import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>

        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="mailto:antech1527@gmail.com">
              <FaEnvelope size={24} color="currentColor" />
            </a>


            <a href="https://www.youtube.com/@ANTech1527" target="_none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Books provide a wealth of information, offering insights into topics ranging from science and technology to philosophy and fiction. <br />They’re a lifelong source of learning.</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
