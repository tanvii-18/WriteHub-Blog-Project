import "../index.css";

function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center p-5 shadow-md">
        <div className="logo">
          <h1 className="font-bold text-3xl">WriteHub.</h1>
        </div>
        <div className="links w-40 flex flex-row justify-between">
          <a href="/">Home</a>
          <a href="/myblogs">My Blogs</a>
        </div>
        <div className="btns">
          <button className="login border-2 px-5 py-2 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600 cursor-pointer hover:scale-100 duration-200">
            Login
          </button>
        </div>
      </nav>

      {/* cards */}

      <div className="container mx-auto">
        <div className="text-center mt-10">
          <h1 className=" text-4xl font-bold mt-10">Welcome to WriteHub!</h1>
          <p className="text-[14px] m-2 text-gray-600">
            Write freely. Publish securely. Own your content.
          </p>
        </div>
        <div className="flex flex-row flex-wrap grid-cols-4 mt-10">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg m-4">
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover cursor-pointer"
                src="https://i.pinimg.com/736x/cc/d8/67/ccd867b39f5b51ca6bd6be6775e65ad4.jpg"
                alt="Sample Blog"
              />
            </div>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                This is the most-popular Apple iPhone in India in 2025
              </div>
              <p className="text-gray-700 text-base">
                This is another sample description for a different blog post. It
                highlights key points of the article.
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row gap-2 justify-end items-end">
              <button className="">
                <svg
                  stroke="#0a62fa"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942"
                    stroke="#0a62fa"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                    stroke="#9b1010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                    stroke="#9b1010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
