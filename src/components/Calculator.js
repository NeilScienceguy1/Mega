import React from "react";
import $ from "jquery";
import "../calculator.css";
import Sidebar from "./Sidebar";


const Calculator = () => {
  $(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = "0";
    updateScreen(result);

    $(".button").on("click", function (evt) {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);

      if (buttonPressed === "C") {
        result = 0;
        currentEntry = "0";
      } else if (buttonPressed === "CE") {
        currentEntry = "0";
      } else if (buttonPressed === "back") {
        //currentEntry = currentEntry.substring(0, currentEntry.length-1);
      } else if (buttonPressed === "+/-") {
        currentEntry *= -1;
      } else if (buttonPressed === ".") {
        currentEntry += ".";
      } else if (isNumber(buttonPressed)) {
        if (currentEntry === "0") currentEntry = buttonPressed;
        else currentEntry = currentEntry + buttonPressed;
      } else if (isOperator(buttonPressed)) {
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
        currentEntry = "";
      } else if (buttonPressed === "%") {
        currentEntry = currentEntry / 100;
      } else if (buttonPressed === "sqrt") {
        currentEntry = Math.sqrt(currentEntry);
      } else if (buttonPressed === "1/x") {
        currentEntry = 1 / currentEntry;
      } else if (buttonPressed === "pi") {
        currentEntry = Math.PI;
      } else if (buttonPressed === "=") {
        currentEntry = operate(prevEntry, currentEntry, operation);
        operation = null;
      }

      updateScreen(currentEntry);
    });
  });

  const updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $(".screen").html(displayValue.substring(0, 10));
  };

  const isNumber = function (value) {
    return !isNaN(value);
  };

  const isOperator = function (value) {
    return value === "/" || value === "*" || value === "+" || value === "-";
  };

  const operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "*") return a * b;
    if (operation === "/") return a / b;
  };

  return (
    <div className="">
      <Sidebar />
      <section class="home-section">
        <div class="calculator">
          <p>Mega</p>
          <div class="calc-row">
            <div class="screen">0123456789</div>
          </div>

          <div class="calc-row">
            <div class="button">C</div>
            <div class="button">CE</div>
            <div class="button backspace">back</div>
            <div class="button plus-minus">+/-</div>
            <div class="button">%</div>
          </div>

          <div class="calc-row">
            <div class="button">7</div>
            <div class="button">8</div>
            <div class="button">9</div>
            <div class="button divice">/</div>
            <div class="button root">sqrt</div>
          </div>

          <div class="calc-row">
            <div class="button">4</div>
            <div class="button">5</div>
            <div class="button">6</div>
            <div class="button multiply">*</div>
            <div class="button inverse">1/x</div>
          </div>

          <div class="calc-row">
            <div class="button">1</div>
            <div class="button">2</div>
            <div class="button">3</div>
            <div class="button">-</div>
            <div class="button pi">pi</div>
          </div>

          <div class="calc-row">
            <div class="button zero">0</div>
            <div class="button decimal">.</div>
            <div class="button">+</div>
            <div class="button equal">=</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
