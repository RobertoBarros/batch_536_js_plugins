import { confetti } from "dom-confetti";

const initConfetti = () => {
  const button = document.querySelector(".my-button");

  button.addEventListener("click", () => {
    confetti(button, { duration: 10000 });
  });
};

export { initConfetti };
