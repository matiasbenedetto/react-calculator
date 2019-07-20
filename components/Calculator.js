import Viewr from "./Viewr";
import Button from "./Button";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      operation: "",
      newNumber: 0
    };
    this.calculate = this.calculate.bind(this);
  }

  calculate(inputType, input) {
    const { result, operation, newNumber } = this.state;
    if (inputType === "number") {
      if (result === 0 || operation === "") {
        this.setState({ result: Number(`${result}${input}`) });
      } else {
        this.setState({ newNumber: Number(`${newNumber}${input}`) });
      }
    } else {
      let newResult = 0;
      let newOperation = "+";
      let inputNumber;
      switch (input) {
        case "+":
        case "-":
        case "x":
        case "/":
          newOperation = input;
          newResult = result;
          inputNumber = 0;
          break;
        case "C":
          newOperation = "";
          newResult = 0;
          inputNumber = 0;
          break;
        case "=":
          newOperation = "";
          newResult = result;
          switch (operation) {
            case "+":
              newResult = result + newNumber;
              inputNumber = 0;
              break;
            case "-":
              newResult = result - newNumber;
              inputNumber = 0;
              break;
            case "x":
              newResult = result * newNumber;
              inputNumber = 0;
              break;
            case "/":
              if (newNumber !== 0) {
                newResult = result / newNumber;
                inputNumber = 0;
              } else {
                newResult = result;
                inputNumber = 0;
                alert("You cant divide by zero");
              }
              break;
          }
      }
      this.setState({
        result: newResult,
        operation: newOperation,
        newNumber: inputNumber
      });
    }
  }

  render() {
    const { result, operation, newNumber } = this.state;
    const previsualization =
      operation != "" || operation === "="
        ? `${result} ${operation} ${newNumber}`
        : `${result}`;
    return (
      <div className="calculator">
        <style jsx>
          {`
            .calculator {
              border: 2px solid blue;
              width: 600px;
              font-family: Arial, Helvetica, sans-serif;
            }
            .buttons {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
            }
          `}
        </style>
        <Viewr result={`${result}`} previsualization={previsualization} />
        <div className="buttons">
          <Button character={"0"} onClick={() => this.calculate("number", 0)} />
          <Button character={"1"} onClick={() => this.calculate("number", 1)} />
          <Button character={"2"} onClick={() => this.calculate("number", 2)} />
          <Button character={"3"} onClick={() => this.calculate("number", 3)} />
          <Button character={"4"} onClick={() => this.calculate("number", 4)} />
          <Button character={"5"} onClick={() => this.calculate("number", 5)} />
          <Button character={"6"} onClick={() => this.calculate("number", 6)} />
          <Button character={"7"} onClick={() => this.calculate("number", 7)} />
          <Button character={"8"} onClick={() => this.calculate("number", 8)} />
          <Button character={"9"} onClick={() => this.calculate("number", 9)} />
          <Button
            character={"+"}
            onClick={() => this.calculate("operator", "+")}
          />
          <Button
            character={"-"}
            onClick={() => this.calculate("operator", "-")}
          />
          <Button
            character={"/"}
            onClick={() => this.calculate("operator", "/")}
          />
          <Button
            character={"X"}
            onClick={() => this.calculate("operator", "x")}
          />
          <Button
            character={"="}
            onClick={() => this.calculate("operator", "=")}
          />
          <Button
            character={"C"}
            onClick={() => this.calculate("operator", "C")}
          />
        </div>
      </div>
    );
  }
}
