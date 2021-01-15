export default () => {
  let menuvisible = false;

  document.getElementById("mobilemenu").addEventListener("click", function () {
    document.getElementById("mobilemenu-container").style.opacity = menuvisible
      ? "0"
      : "1";
    document.getElementById("mobilemenu-container").style.height = menuvisible
      ? "0"
      : "unset";
    menuvisible = !menuvisible;
  });
};
