


function unsafeAddProp(style, key, value) {
  var dict = {};
  dict[key] = value;
  return Object.assign({}, style, dict);
}

export {
  unsafeAddProp ,
  
}
/* No side effect */
