'use strict';

var Caml_exceptions = require("./caml_exceptions.js");

function is_val(l) {
  return l.RE_LAZY_DONE;
}

var Undefined = Caml_exceptions.create("CamlinternalLazy.Undefined");

function forward_with_closure(blk, closure) {
  var result = closure();
  blk.value = result;
  blk.RE_LAZY_DONE = true;
  return result;
}

function raise_undefined() {
  throw {
        RE_EXN_ID: Undefined,
        Error: new Error()
      };
}

function force(lzv) {
  if (lzv.RE_LAZY_DONE) {
    return lzv.value;
  } else {
    var closure = lzv.value;
    lzv.value = raise_undefined;
    try {
      return forward_with_closure(lzv, closure);
    }
    catch (e){
      lzv.value = (function () {
          throw e;
        });
      throw e;
    }
  }
}

function force_val(lzv) {
  if (lzv.RE_LAZY_DONE) {
    return lzv.value;
  } else {
    var closure = lzv.value;
    lzv.value = raise_undefined;
    return forward_with_closure(lzv, closure);
  }
}

exports.Undefined = Undefined;
exports.force = force;
exports.force_val = force_val;
exports.is_val = is_val;
/* No side effect */