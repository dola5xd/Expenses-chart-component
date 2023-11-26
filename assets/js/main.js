// import json
fetch("./data.json")
  .then((Response) => Response.json())
  .then((data) => showinfo(data));

let height = [];

function showinfo(data) {
  let jsonData = data;

  // declare char div

  let chartDiv = document.getElementById("chart");

  for (let i = 0; i < 7; i++) {
    // make elements
    let dayDiv = document.createElement("div");
    let bar = document.createElement("div");
    let day = document.createElement("span");
    let infoDiv = document.createElement("div");

    //  adjust id and style
    // parent styles
    dayDiv.id = jsonData[i].day;
    dayDiv.classList.add("gap-[15px]", "flex", "flex-col", "items-center");
    dayDiv.style.textAlign = "center";

    // day style

    day.textContent = jsonData[i].day;
    day.classList.add("text-MediumBrown-0", "text-[13px]");
    //  info style

    infoDiv.textContent = `$${jsonData[i].amount}`;
    infoDiv.classList.add(
      "bg-DarkBrown-0",
      "text-paleOrange-0",
      "text-[10px]",
      "py-[5px]",
      "px-[3px]",
      "font-semibold",
      "rounded",
      "opacity-0"
    );
    infoDiv.style.transition = "0.7s all ease";

    // bar style
    bar.id = `bar${i + 1}`;
    bar.classList.add("bg-Soft_Red-0", "rounded", "bars", "cursor-pointer");
    bar.style.minWidth = "35px";
    bar.style.maxWidth = "35px";
    bar.style.display = "block";
    bar.style.transition = "0.7s all ease";
    bar.style.transitionDelay = `${0.5 + i / 3}s`;
    height.push(Math.round(jsonData[i].amount) * 2.5);
    // wed style
    if (i === 2) {
      bar.classList.remove("bg-Soft_Red-0");
      bar.classList.add("bg-Cyan-0");
    }
    // Hover styles
    bar.addEventListener("mouseenter", () => {
      bar.classList.add("bg-opacity-50");
      infoDiv.classList.remove("opacity-0");
    });
    bar.addEventListener("mouseleave", () => {
      bar.classList.remove("bg-opacity-50");
      infoDiv.classList.add("opacity-0");
    });
    //   append divs

    dayDiv.append(infoDiv, bar, day);
    chartDiv.appendChild(dayDiv);
  }

  let bars = document.querySelectorAll(".bars");
  bars.forEach((e, i) => {
    e.style.height = `${height[i]}px`;
    e.classList.add(
      "transtion-all",
      "duration-700",
      "opacity-0",
      `delay-[${Math.floor(height[i]) * 10}ms]`
    );
    setInterval(() => {
      e.classList.remove("opacity-0");
    }, 5500);
  });
}
let Total = document.getElementById("total");
let balance = document.getElementById("balance");
let continer = document.getElementById("continer");
let loader = document.getElementById("loader");

let final1 = 921;
let final2 = 48;
let final3 = 478;
let final4 = 33;

let i = 1;
let y = 1;
let f3 = 1;
let f4 = 1;

window.onload = () => {
  setInterval(() => {
    loader.remove();
    continer.classList.remove("hidden");
    setInterval(() => {
      if (i < final1) {
        i++;
      } else {
        clearInterval();
      }
      if (f3 < final3) {
        f3++;
      } else {
        clearInterval();
      }

      balance.textContent = `$${i}.${y}`;
      Total.textContent = `$${f3}.${f4}`;
    }, 0.5);

    setInterval(() => {
      if (y < final2) {
        y++;
      } else {
        clearInterval();
      }
      if (f4 < final4) {
        f4++;
      } else {
        clearInterval();
      }
    }, 50);
    setInterval(() => {
      continer.classList.remove("opacity-0");
    }, 100);
  }, 5000);
};

//
