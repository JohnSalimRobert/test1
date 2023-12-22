import React from "react";
import FormCalulator from "./FormCalulator";
import headerImg from '../assets/headerImg.png'

const HeroSection = () => {
  return (
    <main className="grid-container">
      <div className="grid-item item1">
        <div className="item1-heading">
          <h1>My Perfect Writing: Premier Essay Writing Service in UK</h1>
          <h2>
            Expert Academic Assistance for Students, Academic Professionals, and
            Researchers
          </h2>
        </div>
        <div className="item1-body">
          <div>
            <FormCalulator />
          </div>
          <div>
            <div className="item2-body">
              <ul className="">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_237_39013)">
                      <path
                        d="M19.6256 0.194336C30.1344 0.277134 38.5536 8.41085 38.5899 19.3464C38.623 29.3706 30.4346 38.3282 19.1489 38.1084C8.85478 37.9077 0.446459 29.5225 0.676485 18.5739C0.87985 8.90393 8.76932 0.294315 19.6256 0.194336ZM15.6323 22.0205C16.3064 22.0205 16.9808 22.0219 17.6549 22.0197C17.9772 22.0187 18.1791 22.0916 18.104 22.4956C17.9387 23.3843 17.8033 24.2782 17.6581 25.17C17.3846 26.8512 17.1119 28.5326 16.8401 30.2142C16.814 30.3744 16.7303 30.5457 16.9368 30.6563C17.2881 30.8443 18.2491 30.6049 18.4478 30.2731C20.9668 26.0696 23.4846 21.8652 26.001 17.66C26.5239 16.7854 26.2495 16.3125 25.224 16.3048C24.0442 16.2965 22.8643 16.2965 21.6844 16.3048C21.318 16.307 21.069 16.2586 21.1573 15.7791C21.4205 14.3529 21.6609 12.9225 21.902 11.4923C22.0905 10.3725 22.2712 9.25144 22.444 8.12913C22.4697 7.96176 22.5716 7.7544 22.2988 7.65516C22.0147 7.57263 21.7119 7.58041 21.4324 7.67742C21.1528 7.77443 20.9103 7.95587 20.7384 8.19667C18.8006 11.4238 16.8643 14.6519 14.9295 17.8809C14.3456 18.8551 13.7441 19.819 13.1878 20.8089C12.7709 21.5502 13.0446 22.0094 13.8629 22.0182C14.4526 22.0246 15.0427 22.0196 15.6326 22.0208L15.6323 22.0205Z"
                        fill="#305F63"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_237_39013">
                        <rect
                          width="37.9181"
                          height="37.9181"
                          fill="white"
                          transform="translate(0.673828 0.194336)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Fixed Pricing at £6.99/Page
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="31"
                    viewBox="0 0 37 31"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_237_39015)">
                      <path
                        d="M36.0786 11.8758C32.1948 4.55029 -2.48117 -2.93487 1.27296 1.90681C5.02708 6.74835 21.6593 13.392 22.645 13.5155C17.5421 15.1177 3.92196 17.9921 6.83737 20.4132C9.75291 22.8343 23.601 20.1303 23.5782 20.1734C19.7434 23.0631 14.9688 31.7869 19.766 29.923C27.3348 26.9821 38.3417 16.1443 36.0786 11.8758Z"
                        fill="#16CEC6"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_237_39015">
                        <rect
                          width="35.3902"
                          height="29.8605"
                          fill="white"
                          transform="translate(0.989258 0.368164)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  No Additional Charges for Add-On Services
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_237_39017)">
                      <path
                        d="M29.6664 29.3502C30.3795 28.6645 30.8458 27.7594 30.9555 26.772C30.9555 26.3606 30.8458 26.0863 30.5989 25.5652C30.3522 25.0441 27.3077 19.778 26.4026 18.3245C25.8815 17.4742 25.6072 16.4594 25.6072 15.4721C25.6072 14.4572 25.8815 13.4698 26.4026 12.6196C27.3077 11.1659 30.352 5.87254 30.599 5.35141C30.8458 4.83027 30.9555 4.58357 30.9555 4.17204C30.8458 3.18463 30.4069 2.27957 29.6939 1.62134C29.0082 0.908241 28.1031 0.441969 27.1431 0.359615C26.7318 0.359615 26.4575 0.469339 25.9637 0.71628C25.4701 0.963104 20.0944 3.9251 18.6408 4.83027C18.531 4.88513 18.4214 4.96737 18.2841 5.02223L11.0983 9.27344C11.2628 7.90211 11.8662 6.58564 12.8536 5.62572C13.0455 5.43376 13.2375 5.26905 13.4571 5.10459C13.2924 5.02235 13.1004 4.93988 12.9359 4.83027C11.4822 3.92521 6.18888 0.880869 5.66775 0.633928C5.14661 0.387106 4.89979 0.27738 4.46089 0.27738C3.47348 0.387106 2.56842 0.826008 1.91019 1.53898C1.19697 2.22471 0.730819 3.12976 0.621094 4.11717C0.648466 4.52859 0.758191 4.94 0.97776 5.29655C1.22446 5.81768 4.26893 11.111 5.17398 12.5647C5.69512 13.415 5.96943 14.4023 5.96943 15.4171C5.96943 16.432 5.69512 17.4194 5.17398 18.2696C4.26893 19.778 1.19709 25.0715 0.977642 25.5927C0.758191 25.9493 0.648466 26.3606 0.621094 26.772C0.730819 27.7594 1.16972 28.6645 1.8827 29.3502C2.56842 30.0632 3.47348 30.5021 4.46089 30.6118C4.8723 30.5844 5.28371 30.4747 5.66775 30.2551C6.10653 30.0632 9.97382 27.8142 12.0309 26.6074L12.497 26.3331C12.6616 26.2235 12.7987 26.1412 12.9084 26.0863L13.1279 25.9492L20.4508 21.6158C20.2863 23.2614 19.4361 24.7698 18.1196 25.7846C18.2843 25.8668 18.4762 25.9493 18.6407 26.0589C20.0944 26.964 25.3877 30.0358 25.9089 30.2553C26.2655 30.4747 26.6768 30.5844 27.1157 30.6118C28.0869 30.501 28.989 30.0548 29.6664 29.3502ZM16.1723 13.4973L17.7356 15.0607C17.9551 15.28 17.9551 15.6092 17.7356 15.8285L16.1722 17.3919C15.9529 17.6114 15.6237 17.6114 15.4044 17.3919L13.841 15.8285C13.6215 15.6092 13.6215 15.28 13.841 15.0607L15.4044 13.4973C15.5964 13.3053 15.953 13.3053 16.1723 13.4973Z"
                        fill="#FF694A"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_237_39017">
                        <rect
                          width="30.3344"
                          height="30.3344"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.621094 30.6118)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Complimentary Plagiarism/AI Detection Reports
                </li>
              </ul>
              <div className="item1-button">
                <button>Get Started Today!</button>
              </div>
              <div className="item1-footer">
                <p><strong>Service Benefits:</strong> Unlock academic success with My Perfect Writing! Our transparent pricing and inclusive services ensure you get the best value for your investment. Experience stress-free submissions with our reliable and efficient essay writing service, tailored specifically for the UK’s educational standards</p>
                <p><strong>Commitment to Quality:</strong> At My Perfect Writing, quality is at the forefront of our services. Each essay is meticulously crafted by our team of experienced writers, ensuring adherence to the highest academic standards. Trust us to deliver excellence, ensuring your academic journey is nothing short of perfect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item item2">

        <img className="item2-img" src={headerImg} 
        alt="Img of a book"/>
      </div>
    </main>
  );
};

export default HeroSection;
