export default ({ character, onClick }) => (
  <button onClick={onClick}>
    <style jsx>
      {`
        button {
          padding: 20px;
          background: transparent;
          color: darkblue;
          border: 1px solid cyan;
          cursor: pointer;
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
