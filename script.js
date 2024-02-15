const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

noBtn.addEventListener("click", () => {

  can1.src.display = "block";
  can1.src = 'https://media.discordapp.net/attachments/1079605031889797121/1207518380152717322/sad-sad-cat.gif?ex=65dff020&is=65cd7b20&hm=afb8994372c98e1e9d1bcbcd525aade0386bb3a3e42aa39f25b411786daa083c&=&width=822&height=822'
  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;

  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;

  var randomX = Math.random() * 200;
  var randomY = Math.random() * 200; 
  yesBtn.style.position = `absolute`;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}100px)`;
});

noBtn.addEventListener("mouseover", () => {
  yayText1.style.display = "none";
  can1.style.display = "block";
  can1.src = 'https://media.discordapp.net/attachments/1079605031889797121/1207518380152717322/sad-sad-cat.gif?ex=65dff020&is=65cd7b20&hm=afb8994372c98e1e9d1bcbcd525aade0386bb3a3e42aa39f25b411786daa083c&=&width=822&height=822'
 
  var randomX = Math.random() * 200;
  var randomY = Math.random() * 200; 
  yesBtn.style.position = `absolute`;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}100px)`;
 

})
yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";


  can.style.display = "none";

  can1.style.display = "none";
});
