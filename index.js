// bod=document.body;
function previous(){
    document.getElementById('veh').style.removeProperty('background-image');
}
button1=document.getElementById('airplane')
button1.addEventListener('click',function(){
  document.getElementById('veh').style.backgroundImage="url('air1.png')"
  let aud=new Audio('airplane-sound.mp3');
  setTimeout(previous,18000);
  aud.play();
})
button1=document.getElementById('ship')
button1.addEventListener('click',function(){
  document.getElementById('veh').style.backgroundImage="url('ship.png')"
  let aud=new Audio('boat_sound.mp3');
  setTimeout(previous,22000);
  aud.play();
})
button1=document.getElementById('train')
button1.addEventListener('click',function(){
  document.getElementById('veh').style.backgroundImage="url('train.jpg')"
  let aud=new Audio('train_sound.mp3');
  setTimeout(previous,37000);
  aud.play();
})
button1=document.getElementById('car')
button1.addEventListener('click',function(){
  document.getElementById('veh').style.backgroundImage="url('car.png')"
  let aud=new Audio('Car_sound.mp3');
  setTimeout(previous,19000);
  aud.play();
})
button1=document.getElementById('bike')
button1.addEventListener('click',function(){
  document.getElementById('veh').style.backgroundImage="url('bike.png')"
  let aud=new Audio('bike_sound.mp3');
  setTimeout(previous,30000);
  aud.play();
})