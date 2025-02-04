// Loader.tsx
import "./index.css";

const Loader: React.FC = () => {
  // const [rotationCount, setRotationCount] = useState(0);
  // const maxRotations = 8;

  // useEffect(() => {
  //     if (rotationCount < maxRotations) {
  //         const timer = setTimeout(() => {
  //             setRotationCount(rotationCount + 1);
  //         }, 1000);

  //         return () => clearTimeout(timer);
  //     }
  // }, [rotationCount]);
  return (
    <div className="loader">
      <div className="spinner">
        <svg
          width="76"
          height="68"
          viewBox="0 0 76 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.7316 40.3381L33.732 40.3378C34.7946 39.6083 35.4298 38.451 35.4298 37.1748V4.64894C35.4298 1.10078 30.8937 -0.629425 28.524 2.06793L28.5222 2.06997C27.5506 3.20025 26.6176 4.51133 25.76 6.00277L25.7595 6.00364L14.8932 25.0792L14.8932 25.0792L3.36165 45.3086L3.3611 45.3096C1.12376 49.2751 0.36292 52.9762 0.930325 56.1501L0.930316 56.1501L0.930713 56.1522C1.44771 58.907 4.76793 60.118 7.08251 58.5487L7.08327 58.5482L33.7316 40.3381Z"
            fill="#111827"
            stroke="#111827"
            strokeWidth="0.5"
            className="svg-elem-1"
          ></path>
          <path
            d="M69.0477 58.5482L69.0485 58.5487C71.3631 60.118 74.6833 58.907 75.2003 56.1522L75.2007 56.1501C75.7681 52.9762 75.0072 49.2751 72.7699 45.3096L72.7694 45.3086L61.2378 25.0792L61.2378 25.0792L50.3715 6.00364L50.371 6.00277C49.5134 4.51133 48.5804 3.20025 47.6088 2.06997L47.6088 2.06996L47.607 2.06794C45.2373 -0.629425 40.7012 1.10078 40.7012 4.64894V37.1748C40.7012 38.451 41.3364 39.6083 42.399 40.3378L42.3994 40.3381L69.0477 58.5482Z"
            fill="#111827"
            stroke="#111827"
            strokeWidth="0.5"
            className="svg-elem-2"
          ></path>
          <path
            d="M63.3112 59.4395L63.3109 59.4393L40.4344 44.6639C39.7714 44.2357 38.9125 44.0293 38.0669 44.0293C37.2213 44.0293 36.3623 44.2357 35.6994 44.6639L12.8235 59.4389C12.8234 59.439 12.8232 59.4391 12.8231 59.4392C11.2951 60.4201 10.1943 61.3688 9.52451 62.2498C8.85727 63.1274 8.58889 63.9791 8.82327 64.7369C9.05699 65.4926 9.76151 66.0591 10.813 66.4372C11.8696 66.8171 13.3239 67.0257 15.152 67.0347H15.1532H60.9434C62.7806 67.0347 64.2419 66.8332 65.3038 66.4579C66.3605 66.0846 67.0691 65.5207 67.3056 64.7647C67.5428 64.0068 67.2755 63.1526 66.6091 62.2707C65.94 61.3851 64.8393 60.4295 63.3112 59.4395Z"
            fill="#111827"
            stroke="#111827"
            strokeWidth="0.5"
            className="svg-elem-3"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
