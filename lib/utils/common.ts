// меняем overflow hidden на body
export const reverseBodyOverflowHidden = () => {
  const body = document.querySelector("body") as HTMLBodyElement;
  body.classList.toggle("container-overflow");
};
