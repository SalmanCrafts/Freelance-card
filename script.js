function toggleDivs() {
  const firstDiv = document.getElementById("inner_container");
  const secondDiv = document.getElementById("secondpage");

  if (firstDiv.style.display !== "none") {
    firstDiv.classList.add("hidden");
    setTimeout(() => {
      firstDiv.style.display = "none";
      secondDiv.style.display = "block";
      secondDiv.classList.remove("hidden");
    }, 500); // Duration should match the CSS transition
  } else {
    secondDiv.classList.add("hidden");
    setTimeout(() => {
      secondDiv.style.display = "none";
      firstDiv.style.display = "block";
      firstDiv.classList.remove("hidden");
    }, 500);
  }
}
document.getElementById("img_div").onclick = toggleDivs;
document.getElementById("upper").onclick = toggleDivs;
document.getElementById("extra_div").onclick = toggleDivs;
