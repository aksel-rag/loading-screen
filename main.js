
const toggleButton = document.querySelector('.sidebar-toggle');
const menu = document.querySelector('.sidebar-menu');

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('open');
  menu.classList.toggle('open');
  menu.innerHTML = `
    <div class="sidebar-content">
      <a hreg="" id="rules">RULES</a><br>
      <a id="keys" >KEY BINDS</a><br>
      <a id="staff" >STAFF</a><br>
      <a id="socials" >SOCIALS</a>
    </div>
    <svg id="shut" xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' style="position: absolute;"><line x1='0' y1='0' x2='100%' y2='350%' stroke='#fff' stroke-width='20%'/></svg>
  `;

  let rules = menu.querySelector("#rules");
  let keys = menu.querySelector("#keys");
  let staff = menu.querySelector("#staff");
  let socials = menu.querySelector("#socials");
  let main = document.querySelector(".item-1");
  rules.addEventListener("click", () =>  {
    main.innerHTML = `
    <p class="fade-in">rules</p>
    `;
  });
  
  staff.addEventListener("click", () =>  {
    main.innerHTML = `
    <p class="fade-in">staff</p>
    `;
  });
  
  socials.addEventListener("click", () =>  {
    main.innerHTML = `
    <p class="fade-in">socials</p>
    `;
  });
  
  keys.addEventListener("click", () =>  {
    main.innerHTML = `
    <p class="fade-in">keys</p>
    `;
  });
  
  toggleButton.addEventListener("click", () =>  {
    main.innerHTML = `
    <p class="fade-in" style="font-size: 14px;margin-bottom:-50px;">Drifting Server</p>
    <h1 class="fade-in" style="letter-spacing: 3px;font-family: 'Roboto'">UNIDRIFT</h1>
    <p class="fade-in" style="font-size: 14px;margin-top:-50px;">Loading...</p>
    `;
  });

  const svg = menu.querySelector('#shut');
  if (menu.classList.contains('open')) {
    svg.animate([
      { opacity: '0', transform: 'translateX(50%)' },
      { opacity: '1', transform: 'translateX(0)' }
    ], {
      duration: 800,
      easing: 'ease-out'
    });
  }
  else{
   svg.style.opacity = "0"; 
  }
});


