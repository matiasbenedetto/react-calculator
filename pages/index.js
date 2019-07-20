import Calculator from "../components/Calculator";

export default () => (
  <div className="root">
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 95vh;
          flex-direction: column;
          font-family: Arial, Helvetica, sans-serif;
        }
      `}
    </style>
    <Calculator />
    <p>React Calculator by Matias Benedetto</p>
  </div>
);
