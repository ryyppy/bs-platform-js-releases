

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as TestUtils from "react-dom/test-utils";

function act(func) {
  var reactFunc = function () {
    Curry._1(func, undefined);
    
  };
  TestUtils.act(reactFunc);
  
}

function actAsync(func) {
  return TestUtils.act(function () {
              return Curry._1(func, undefined);
            });
}

function changeWithValue(element, value) {
  var $$event = {
    target: {
      value: value
    }
  };
  TestUtils.Simulate.change(element, $$event);
  
}

function changeWithChecked(element, value) {
  var $$event = {
    target: {
      checked: value
    }
  };
  TestUtils.Simulate.change(element, $$event);
  
}

var Simulate = {
  changeWithValue: changeWithValue,
  changeWithChecked: changeWithChecked
};

function findBySelector(element, selector) {
  return element.querySelector(selector);
}

function findByAllSelector(element, selector) {
  return Array.from(element.querySelectorAll(selector));
}

function findBySelectorAndTextContent(element, selector, content) {
  return Belt_Array.getBy(Array.from(element.querySelectorAll(selector)), (function (node) {
                return node.textContent === content;
              }));
}

function findBySelectorAndPartialTextContent(element, selector, content) {
  return Belt_Array.getBy(Array.from(element.querySelectorAll(selector)), (function (node) {
                return node.textContent.includes(content);
              }));
}

var DOM = {
  findBySelector: findBySelector,
  findByAllSelector: findByAllSelector,
  findBySelectorAndTextContent: findBySelectorAndTextContent,
  findBySelectorAndPartialTextContent: findBySelectorAndPartialTextContent
};

function prepareContainer(container, param) {
  var containerElement = document.createElement("div");
  Belt_Option.map(document.body, (function (body) {
          return body.appendChild(containerElement);
        }));
  container.contents = Caml_option.some(containerElement);
  
}

function cleanupContainer(container, param) {
  Belt_Option.map(container.contents, (function (prim) {
          prim.remove();
          
        }));
  container.contents = undefined;
  
}

function getContainer(container) {
  return Belt_Option.getExn(container.contents);
}

export {
  act ,
  actAsync ,
  Simulate ,
  DOM ,
  prepareContainer ,
  cleanupContainer ,
  getContainer ,
  
}
/* react-dom/test-utils Not a pure module */
