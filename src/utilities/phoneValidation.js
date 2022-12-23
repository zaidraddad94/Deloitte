let pattern = /(079|078|077)([0-9]{7})$/;

export default function phoneValidation(str) {
  return !str.match(pattern);
}
