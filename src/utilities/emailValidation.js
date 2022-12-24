let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 

export default function emailValidation(str) {
  return !str.match(pattern);
}
