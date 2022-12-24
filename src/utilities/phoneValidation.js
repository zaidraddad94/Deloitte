let pattern = /^07[789]\d{7}$/;

export default function phoneValidation(str) {
  return !str.match(pattern);
}
