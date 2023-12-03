document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  body.setAttribute("class","fade");
  let content = document.querySelector("#item-1");
  const menu = document.querySelector(".menu-icon");
  const sidemenu = document.querySelector("#menu");
  const close = document.querySelector("#close");
  const rules = document.querySelector("#rules");
  const staff = document.querySelector("#staff");
  const keybinds = document.querySelector("#keybinds");
  const socials = document.querySelector("#socials");

  function revert() {
    content.innerHTML = `
    <p style="font-size: 14px;margin-bottom:-50px;">Fivem Server</p>
    <h1 style="letter-spacing: 3px;font-family: 'Roboto';font-size: 5.2vw;">SERVER NAME</h1>
    <p style="font-size: 14px;margin-top:-50px;">Loading...</p>
    `
  }

  menu.addEventListener("click", () => {
    menu.style.opacity = "0";
    sidemenu.classList.toggle("open");
    close.addEventListener("click", () => {
      content.setAttribute("class","fade");
      revert();
      menu.style.opacity = "1";
      sidemenu.classList.remove("open");
    })
  });

  rules.addEventListener("click", () => {
    content.innerHTML = `
    <h1 class="fade" style="font-size: 4vh">RULES</h1>

    <div id="set1" class="fade">
      <p class="darker">Rule 1</p>
      <p>Rule 2</p>
      <p class="darker">Rule 3</p>
      <p>Rule 4</p>
      <p class="darker">Rule 5</p>
      <p>Rule 6</p>
      <p class="darker">Rule 7</p>
      <p>Rule 8</p>
    </div>
  `;
});

  staff.addEventListener("click", () => {
    content.innerHTML = `
    <div id="person1" class="fade">
    <h1>Name</h1>
    <img src="https://t4.ftcdn.net/jpg/02/15/12/79/360_F_215127926_9v0YpAOn5HpLGtxxdxgC0Lg63Nu7rPLr.jpg" alt="person1">
    <p>Role</p>
  </div>

  <div id="person1" class="fade">
  <h1>Jibz</h1>
  <img src="https://avatars.githubusercontent.com/u/67398418?v=4" alt="person1">
  <p>Developer</p>
    </div>
    `;
  });

  socials.addEventListener("click", () => {
    content.innerHTML = `
    <h1 class="fade">Follow our Socials</h1>
    <p class="fade">Be ontop when it comes to news and be updated about Your Server.</p>
    <div id="socials" class="fade">
    <a href="https://tiktok.com/@neon_airlines" style="margin-right: 15px;"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
    <a href="https://instagram.com/neon_airlines" style="margin-right: 15px;"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
    <a href="https://www.facebook.com/marketplace/profile/100092312194657/?ref=share_attachment" style="margin-right: 15px;"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
    </div>
    `;
  });

  keybinds.addEventListener("click", () => {
    content.innerHTML = `

    <h1 class="fade" style="font-size: 4vh">KEY BINDS</h1>

    <div id="set2" class="fade">
      <p class="darker">Keybind 1</p>
      <p>Keybind 2</p>
      <p class="darker">Keybind 3</p>
      <p>Keybind 4</p>
      <p class="darker">Keybind 5</p>
      <p>Keybind 6</p>
    </div>

    <div id="set3" class="fade">
    <p class="darker">Keybind 7</p>
    <p>Keybind 8</p>
    <p class="darker">Keybind 9</p>
    <p>Keybind 10</p>
    <p class="darker">Keybind 11</p>
    <p>Keybind 12</p>
  </div>
    `;
  });
});