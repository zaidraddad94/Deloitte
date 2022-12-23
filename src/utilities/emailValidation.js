let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

export default function emailValidation(str) {
  return !str.match(pattern);
}
