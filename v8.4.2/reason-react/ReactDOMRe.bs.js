

import * as React from "react";
import * as ReactDom from "react-dom";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function renderToElementWithClassName(reactElement, className) {
  var elements = document.getElementsByClassName(className);
  if (elements.length !== 0) {
    ReactDom.render(reactElement, elements[0]);
  } else {
    console.error("ReactDOMRe.renderToElementWithClassName: no element of class " + (className + " found in the HTML."));
  }
  
}

function renderToElementWithId(reactElement, id) {
  var element = document.getElementById(id);
  if (element == null) {
    console.error("ReactDOMRe.renderToElementWithId : no element of id " + (id + " found in the HTML."));
  } else {
    ReactDom.render(reactElement, element);
  }
  
}

function createRootWithClassName(className) {
  var elements = document.getElementsByClassName(className);
  if (elements.length !== 0) {
    return Caml_option.some(ReactDom.createRoot(elements[0]));
  }
  
}

function createRootWithId(id) {
  var element = document.getElementById(id);
  if (!(element == null)) {
    return Caml_option.some(ReactDom.createRoot(element));
  }
  
}

var Experimental = {
  createRootWithClassName: createRootWithClassName,
  createRootWithId: createRootWithId
};

function hydrateToElementWithClassName(reactElement, className) {
  var elements = document.getElementsByClassName(className);
  if (elements.length !== 0) {
    ReactDom.hydrate(reactElement, elements[0]);
  } else {
    console.error("ReactDOMRe.hydrateToElementWithClassName: no element of class " + (className + " found in the HTML."));
  }
  
}

function hydrateToElementWithId(reactElement, id) {
  var element = document.getElementById(id);
  if (element == null) {
    console.error("ReactDOMRe.hydrateToElementWithId : no element of id " + (id + " found in the HTML."));
  } else {
    ReactDom.hydrate(reactElement, element);
  }
  
}

var Ref = {};

function createElementVariadic(domClassName, props, children) {
  var variadicArguments = [
      domClassName,
      props
    ].concat(children);
  return React.createElement.apply(null, variadicArguments);
}

var Style;

export {
  renderToElementWithClassName ,
  renderToElementWithId ,
  Experimental ,
  hydrateToElementWithClassName ,
  hydrateToElementWithId ,
  Ref ,
  createElementVariadic ,
  Style ,
  
}
/* react Not a pure module */
