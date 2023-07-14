import Styles from "./logos.module.scss";

type Props = { width: number };

export const LogoFullHorizontal = (props: Props) => {
  return (
    <svg
      width={props.width}
      height="auto"
      viewBox="0 0 406 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1604_333)">
        <path
          d="M0 60.8053C0 38.6061 17.9959 20.6104 40.1951 20.6104H46.7028C74.1873 20.6104 96.4676 42.891 96.4676 70.3755C96.4676 87.2896 82.7572 101 65.8433 101H40.1951C17.9959 101 0 83.0047 0 60.8053Z"
          className={Styles.themeEight}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.84014 48.7466C0.644542 52.5533 0 56.6039 0 60.8051C0 83.0045 17.9959 101 40.1951 101H48.2341V80.9023C48.2341 63.1433 33.8373 48.7466 16.078 48.7466H1.84014Z"
          className={Styles.themeTen}
        />
        <path
          d="M48.2341 52.766C50.454 52.766 52.2536 50.9664 52.2536 48.7465C52.2536 46.5266 50.454 44.7271 48.2341 44.7271C46.0142 44.7271 44.2146 46.5266 44.2146 48.7465C44.2146 50.9664 46.0142 52.766 48.2341 52.766Z"
          className={Styles.themeTen}
        />
        <path
          d="M95.7386 1.31401C80.6372 9.68468 75.1815 28.7124 83.5523 43.8136L84.7645 46.001L96.577 39.4533C106.362 34.0291 109.898 21.6993 104.474 11.9137L99.1391 2.28894C98.4694 1.08082 96.9468 0.644421 95.7386 1.31401Z"
          className={Styles.themeEight}
        />
        <path
          d="M128.477 60.3752C113.375 68.7459 94.3478 63.2897 85.9776 48.1886L84.7646 46.0012L96.577 39.4536C106.362 34.0294 118.692 37.565 124.117 47.3504L129.452 56.9752C130.121 58.1833 129.685 59.7055 128.477 60.3752Z"
          className={Styles.themeEight}
        />
        <path
          d="M160.661 85.662H153.195V16.3351H160.661V45.7725L179.219 16.3351H187.538L168.66 46.199L188.818 85.662H180.605L164.181 53.3451L160.661 58.9979V85.662ZM200.559 72.3299V16.3351H208.024V72.3299C208.024 75.0319 208.594 77.1296 209.731 78.6226C210.94 80.1159 213.109 80.8625 216.237 80.8625C219.366 80.8625 222.246 79.6538 224.876 77.2362C227.508 74.8186 228.822 72.472 228.822 70.1968V16.3351H236.289V85.662H233.089L230.316 78.836C228.752 81.3957 226.725 83.4577 224.236 85.0222C221.819 86.5153 219.153 87.2619 216.237 87.2619C205.785 87.2619 200.559 82.2845 200.559 72.3299ZM270.461 16.3351H277.927V73.3965C277.927 77.9473 276.647 81.3957 274.087 83.7422C271.527 86.0887 267.972 87.2619 263.421 87.2619C258.871 87.2619 255.351 86.0887 252.862 83.7422C250.374 81.3957 249.129 77.9473 249.129 73.3965V66.4639H256.596V73.8231C256.596 78.516 258.871 80.8625 263.421 80.8625C268.114 80.8625 270.461 78.516 270.461 73.8231V16.3351ZM305.645 85.662H298.179V16.3351H305.645V85.662ZM334.392 85.662H326.926V16.3351H330.126L333.219 24.2277C335.495 17.8994 339.12 14.7354 344.098 14.7354C352.559 14.7354 356.79 19.3571 356.79 28.6007V35.5334H349.644V28.174C349.644 23.4812 347.689 21.1347 343.778 21.1347C341.431 21.1347 339.263 22.4857 337.271 25.1877C335.352 27.8896 334.392 31.8005 334.392 36.92V85.662ZM402.694 85.662H399.494L396.721 78.836C395.228 81.3957 393.273 83.4577 390.855 85.0222C388.438 86.5153 385.771 87.2619 382.855 87.2619C372.617 87.2619 367.497 82.2845 367.497 72.3299V61.6643C367.497 51.7098 372.617 46.7323 382.855 46.7323H395.228V29.2406C395.228 26.6808 394.411 24.6899 392.775 23.2678C391.139 21.8457 388.722 21.1347 385.522 21.1347C379.195 21.1347 376.03 23.8367 376.03 29.2406V35.5334H368.564V29.6672C368.564 24.9033 369.95 21.2414 372.723 18.6817C375.568 16.0508 379.834 14.7354 385.522 14.7354C391.211 14.7354 395.478 16.0508 398.321 18.6817C401.237 21.2414 402.694 24.9033 402.694 29.6672V85.662ZM395.228 53.1317H382.855C379.869 53.1317 377.807 53.8784 376.669 55.3715C375.533 56.8647 374.963 58.9624 374.963 61.6643V72.3299C374.963 75.0319 375.533 77.1296 376.669 78.6226C377.807 80.1159 379.869 80.8625 382.855 80.8625C385.842 80.8625 388.616 79.7247 391.175 77.4494C393.735 75.103 395.086 72.792 395.228 70.5168V53.1317Z"
          className={Styles.themeTen}
        />
        <path
          d="M160.661 85.6622V88.3286H163.327V85.6622H160.661ZM153.195 85.6622H150.528V88.3286H153.195V85.6622ZM153.195 16.3354V13.669H150.528V16.3354H153.195ZM160.661 16.3354H163.327V13.669H160.661V16.3354ZM160.661 45.7726H157.995V55.0019L162.917 47.1946L160.661 45.7726ZM179.219 16.3354V13.669H177.747L176.964 14.9133L179.219 16.3354ZM187.538 16.3354L189.792 17.7601L192.379 13.669H187.538V16.3354ZM168.66 46.1993L166.406 44.7746L165.594 46.059L166.285 47.4122L168.66 46.1993ZM188.818 85.6622V88.3286H193.174L191.193 84.4493L188.818 85.6622ZM180.605 85.6622L178.229 86.8705L178.97 88.3286H180.605V85.6622ZM164.18 53.3452L166.558 52.1371L164.415 47.9228L161.917 51.9358L164.18 53.3452ZM160.661 58.9981L158.397 57.5886L157.995 58.2357V58.9981H160.661ZM160.661 82.9958H153.195V88.3286H160.661V82.9958ZM155.861 85.6622V16.3354H150.528V85.6622H155.861ZM153.195 19.0018H160.661V13.669H153.195V19.0018ZM157.995 16.3354V45.7726H163.327V16.3354H157.995ZM162.917 47.1946L181.474 17.7574L176.964 14.9133L158.405 44.3507L162.917 47.1946ZM179.219 19.0018H187.538V13.669H179.219V19.0018ZM185.284 14.9106L166.406 44.7746L170.914 47.6239L189.792 17.7601L185.284 14.9106ZM166.285 47.4122L186.443 86.8753L191.193 84.4493L171.035 44.9862L166.285 47.4122ZM188.818 82.9958H180.605V88.3286H188.818V82.9958ZM182.982 84.4541L166.558 52.1371L161.803 54.5535L178.229 86.8705L182.982 84.4541ZM161.917 51.9358L158.397 57.5886L162.924 60.4075L166.444 54.7547L161.917 51.9358ZM157.995 58.9981V85.6622H163.327V58.9981H157.995ZM200.559 16.3354V13.669H197.892V16.3354H200.559ZM208.024 16.3354H210.691V13.669H208.024V16.3354ZM209.731 78.6229L207.61 80.2388L207.634 80.2702L207.658 80.3007L209.731 78.6229ZM228.822 16.3354V13.669H226.157V16.3354H228.822ZM236.289 16.3354H238.955V13.669H236.289V16.3354ZM236.289 85.6622V88.3286H238.955V85.6622H236.289ZM233.089 85.6622L230.619 86.666L231.294 88.3286H233.089V85.6622ZM230.316 78.8363L232.786 77.8325L230.797 72.9357L228.041 77.4457L230.316 78.8363ZM224.236 85.0223L225.638 87.2909L225.656 87.2797L224.236 85.0223ZM203.224 72.3302V16.3354H197.892V72.3302H203.224ZM200.559 19.0018H208.024V13.669H200.559V19.0018ZM205.358 16.3354V72.3302H210.691V16.3354H205.358ZM205.358 72.3302C205.358 75.3678 205.992 78.1166 207.61 80.2388L211.853 77.0071C211.193 76.1429 210.691 74.6966 210.691 72.3302H205.358ZM207.658 80.3007C209.621 82.725 212.804 83.5291 216.237 83.5291V78.1963C213.414 78.1963 212.259 77.5072 211.803 76.9452L207.658 80.3007ZM216.237 83.5291C220.129 83.5291 223.633 82.0005 226.681 79.1996L223.072 75.273C220.858 77.3072 218.602 78.1963 216.237 78.1963V83.5291ZM226.681 79.1996C229.553 76.5602 231.489 73.5535 231.489 70.197H226.157C226.157 71.3914 225.461 73.0773 223.072 75.273L226.681 79.1996ZM231.489 70.197V16.3354H226.157V70.197H231.489ZM228.822 19.0018H236.289V13.669H228.822V19.0018ZM233.622 16.3354V85.6622H238.955V16.3354H233.622ZM236.289 82.9958H233.089V88.3286H236.289V82.9958ZM235.559 84.6586L232.786 77.8325L227.846 79.8399L230.619 86.666L235.559 84.6586ZM228.041 77.4457C226.686 79.6617 224.95 81.4242 222.818 82.7649L225.656 87.2797C228.5 85.4918 230.816 83.1302 232.59 80.2267L228.041 77.4457ZM222.835 82.7538C220.85 83.9798 218.67 84.5957 216.237 84.5957V89.9285C219.633 89.9285 222.788 89.0513 225.638 87.2909L222.835 82.7538ZM216.237 84.5957C211.391 84.5957 208.25 83.4396 206.317 81.5983C204.408 79.7802 203.224 76.8623 203.224 72.3302H197.892C197.892 77.7526 199.322 82.3008 202.639 85.4599C205.933 88.5961 210.631 89.9285 216.237 89.9285V84.5957ZM270.461 16.3354V13.669H267.795V16.3354H270.461ZM277.927 16.3354H280.593V13.669H277.927V16.3354ZM249.129 66.464V63.7976H246.462V66.464H249.129ZM256.596 66.464H259.261V63.7976H256.596V66.464ZM270.461 19.0018H277.927V13.669H270.461V19.0018ZM275.26 16.3354V73.3968H280.593V16.3354H275.26ZM275.26 73.3968C275.26 77.4447 274.136 80.0798 272.284 81.7768L275.888 85.7082C279.157 82.7121 280.593 78.4501 280.593 73.3968H275.26ZM272.284 81.7768C270.353 83.547 267.517 84.5957 263.421 84.5957V89.9285C268.426 89.9285 272.7 88.6307 275.888 85.7082L272.284 81.7768ZM263.421 84.5957C259.321 84.5957 256.54 83.5451 254.691 81.8023L251.033 85.6824C254.161 88.6327 258.42 89.9285 263.421 89.9285V84.5957ZM254.691 81.8023C252.897 80.1104 251.796 77.4662 251.796 73.3968H246.462C246.462 78.4286 247.85 82.6815 251.033 85.6824L254.691 81.8023ZM251.796 73.3968V66.464H246.462V73.3968H251.796ZM249.129 69.1304H256.596V63.7976H249.129V69.1304ZM253.929 66.464V73.8233H259.261V66.464H253.929ZM253.929 73.8233C253.929 76.5607 254.591 79.1071 256.387 80.959C258.198 82.8262 260.713 83.5291 263.421 83.5291V78.1963C261.577 78.1963 260.681 77.7259 260.216 77.2468C259.736 76.7521 259.261 75.7789 259.261 73.8233H253.929ZM263.421 83.5291C266.179 83.5291 268.737 82.838 270.586 80.9883C272.435 79.1386 273.127 76.5807 273.127 73.8233H267.795C267.795 75.7589 267.312 76.7207 266.815 77.2174C266.318 77.7142 265.356 78.1963 263.421 78.1963V83.5291ZM273.127 73.8233V16.3354H267.795V73.8233H273.127ZM305.645 85.6622V88.3286H308.311V85.6622H305.645ZM298.179 85.6622H295.512V88.3286H298.179V85.6622ZM298.179 16.3354V13.669H295.512V16.3354H298.179ZM305.645 16.3354H308.311V13.669H305.645V16.3354ZM305.645 82.9958H298.179V88.3286H305.645V82.9958ZM300.846 85.6622V16.3354H295.512V85.6622H300.846ZM298.179 19.0018H305.645V13.669H298.179V19.0018ZM302.978 16.3354V85.6622H308.311V16.3354H302.978ZM334.392 85.6622V88.3286H337.058V85.6622H334.392ZM326.926 85.6622H324.259V88.3286H326.926V85.6622ZM326.926 16.3354V13.669H324.259V16.3354H326.926ZM330.126 16.3354L332.609 15.3624L331.944 13.669H330.126V16.3354ZM333.218 24.228L330.736 25.2009L333.326 31.81L335.728 25.1301L333.218 24.228ZM356.79 35.5336V38.2H359.456V35.5336H356.79ZM349.644 35.5336H346.978V38.2H349.644V35.5336ZM337.271 25.1879L335.125 23.6062L335.112 23.6247L335.098 23.6434L337.271 25.1879ZM334.392 82.9958H326.926V88.3286H334.392V82.9958ZM329.593 85.6622V16.3354H324.259V85.6622H329.593ZM326.926 19.0018H330.126V13.669H326.926V19.0018ZM327.644 17.3083L330.736 25.2009L335.701 23.255L332.609 15.3624L327.644 17.3083ZM335.728 25.1301C336.77 22.2323 338.037 20.306 339.398 19.1177C340.707 17.9751 342.229 17.4019 344.098 17.4019V12.0691C340.989 12.0691 338.209 13.078 335.892 15.0995C333.627 17.0755 331.943 19.8953 330.71 23.3257L335.728 25.1301ZM344.098 17.4019C347.853 17.4019 350.198 18.4168 351.65 20.0022C353.143 21.6323 354.124 24.3345 354.124 28.6009H359.456C359.456 23.6236 358.322 19.3932 355.584 16.4015C352.804 13.3651 348.803 12.0691 344.098 12.0691V17.4019ZM354.124 28.6009V35.5336H359.456V28.6009H354.124ZM356.79 32.8672H349.644V38.2H356.79V32.8672ZM352.311 35.5336V28.1743H346.978V35.5336H352.311ZM352.311 28.1743C352.311 25.5232 351.768 23.0386 350.226 21.1877C348.606 19.2438 346.285 18.4685 343.778 18.4685V23.8013C345.182 23.8013 345.794 24.1992 346.129 24.6017C346.542 25.0974 346.978 26.1325 346.978 28.1743H352.311ZM343.778 18.4685C340.261 18.4685 337.389 20.5332 335.125 23.6062L339.419 26.7696C341.135 24.4386 342.602 23.8013 343.778 23.8013V18.4685ZM335.098 23.6434C332.727 26.9818 331.726 31.5285 331.726 36.9201H337.058C337.058 32.0726 337.977 28.798 339.446 26.7322L335.098 23.6434ZM331.726 36.9201V85.6622H337.058V36.9201H331.726ZM402.694 85.6622V88.3286H405.36V85.6622H402.694ZM399.494 85.6622L397.024 86.666L397.699 88.3286H399.494V85.6622ZM396.721 78.8363L399.191 77.8325L397.15 72.8085L394.419 77.4926L396.721 78.8363ZM390.855 85.0223L392.257 87.2909L392.28 87.2762L392.303 87.2611L390.855 85.0223ZM395.228 46.7325V49.3989H397.894V46.7325H395.228ZM376.029 35.5336V38.2H378.696V35.5336H376.029ZM368.564 35.5336H365.897V38.2H368.564V35.5336ZM372.723 18.6818L374.532 20.6412L374.535 20.6392L372.723 18.6818ZM398.321 18.6818L396.51 20.6392L396.536 20.6627L396.561 20.6854L398.321 18.6818ZM395.228 53.1319H397.894V50.4655H395.228V53.1319ZM391.174 77.4497L392.947 79.4425L392.961 79.4289L392.977 79.4154L391.174 77.4497ZM395.228 70.517L397.89 70.6833L397.894 70.6002V70.517H395.228ZM402.694 82.9958H399.494V88.3286H402.694V82.9958ZM401.964 84.6586L399.191 77.8325L394.251 79.8399L397.024 86.666L401.964 84.6586ZM394.419 77.4926C393.129 79.702 391.463 81.4533 389.407 82.7836L392.303 87.2611C395.083 85.4628 397.327 83.09 399.024 80.1799L394.419 77.4926ZM389.454 82.7538C387.468 83.9798 385.29 84.5957 382.855 84.5957V89.9285C386.252 89.9285 389.406 89.0513 392.257 87.2909L389.454 82.7538ZM382.855 84.5957C378.129 84.5957 375.077 83.4462 373.195 81.6173C371.328 79.802 370.164 76.8772 370.164 72.3302H364.831C364.831 77.7379 366.226 82.2788 369.479 85.441C372.717 88.5895 377.344 89.9285 382.855 89.9285V84.5957ZM370.164 72.3302V61.6645H364.831V72.3302H370.164ZM370.164 61.6645C370.164 57.1174 371.328 54.1926 373.195 52.3773C375.077 50.5484 378.129 49.3989 382.855 49.3989V44.0661C377.344 44.0661 372.717 45.4053 369.479 48.5538C366.226 51.7158 364.831 56.2567 364.831 61.6645H370.164ZM382.855 49.3989H395.228V44.0661H382.855V49.3989ZM397.894 46.7325V29.2409H392.562V46.7325H397.894ZM397.894 29.2409C397.894 26.0632 396.849 23.2773 394.525 21.256L391.025 25.2802C391.971 26.1029 392.562 27.299 392.562 29.2409H397.894ZM394.525 21.256C392.218 19.2503 389.066 18.4685 385.522 18.4685V23.8013C388.378 23.8013 390.061 24.4416 391.025 25.2802L394.525 21.256ZM385.522 18.4685C382.042 18.4685 378.932 19.2027 376.672 21.1337C374.33 23.1334 373.363 26.0081 373.363 29.2409H378.696C378.696 27.0696 379.313 25.8913 380.134 25.1891C381.037 24.4181 382.675 23.8013 385.522 23.8013V18.4685ZM373.363 29.2409V35.5336H378.696V29.2409H373.363ZM376.029 32.8672H368.564V38.2H376.029V32.8672ZM371.231 35.5336V29.6674H365.897V35.5336H371.231ZM371.231 29.6674C371.231 25.4395 372.441 22.5704 374.532 20.6412L370.915 16.7225C367.458 19.9128 365.897 24.3675 365.897 29.6674H371.231ZM374.535 20.6392C376.698 18.6381 380.195 17.4019 385.522 17.4019V12.0691C379.472 12.0691 374.437 13.4638 370.913 16.7244L374.535 20.6392ZM385.522 17.4019C390.849 17.4019 394.347 18.6381 396.51 20.6392L400.132 16.7244C396.606 13.4638 391.573 12.0691 385.522 12.0691V17.4019ZM396.561 20.6854C398.772 22.6259 400.027 25.4809 400.027 29.6674H405.36C405.36 24.326 403.701 19.8572 400.08 16.6781L396.561 20.6854ZM400.027 29.6674V85.6622H405.36V29.6674H400.027ZM395.228 50.4655H382.855V55.7983H395.228V50.4655ZM382.855 50.4655C379.533 50.4655 376.43 51.2868 374.549 53.7559L378.791 56.9876C379.185 56.4702 380.205 55.7983 382.855 55.7983V50.4655ZM374.549 53.7559C372.932 55.8781 372.296 58.627 372.296 61.6645H377.63C377.63 59.298 378.133 57.8517 378.791 56.9876L374.549 53.7559ZM372.296 61.6645V72.3302H377.63V61.6645H372.296ZM372.296 72.3302C372.296 75.3678 372.932 78.1166 374.549 80.2388L378.791 77.0071C378.133 76.1429 377.63 74.6966 377.63 72.3302H372.296ZM374.549 80.2388C376.43 82.7078 379.533 83.5291 382.855 83.5291V78.1963C380.205 78.1963 379.185 77.5244 378.791 77.0071L374.549 80.2388ZM382.855 83.5291C386.591 83.5291 389.975 82.0839 392.947 79.4425L389.403 75.4568C387.256 77.3662 385.094 78.1963 382.855 78.1963V83.5291ZM392.977 79.4154C395.785 76.841 397.686 73.9327 397.89 70.6833L392.567 70.3506C392.485 71.6521 391.684 73.3655 389.373 75.484L392.977 79.4154ZM397.894 70.517V53.1319H392.562V70.517H397.894Z"
          className={Styles.themeTen}
        />
      </g>
      <defs>
        <clipPath id="clip0_1604_333">
          <rect
            width="405.36"
            height="100"
            fill="white"
            transform="translate(0 0.553223)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};