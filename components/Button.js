export default ({ character, handleClick }) => (
  <button onClick={handleClick}>
    <style jsx>
      {`
        button {
          padding: 20px;
          background: transparent;
          color: darkblue;
          border: 1px solid cyan;
          cursor: pointer;
          font-size: 1.4em;
        }
        button:hover {
          background: CornflowerBlue;
          color: white;
          border: none;
        }
      `}
    </style>
    {character}
  </button>
);
