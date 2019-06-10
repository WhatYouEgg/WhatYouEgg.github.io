document.getElementById('confirm').style.display = "none";
document.getElementById('confirm1').style.display = "none";
function LfirstDialogue() {
  document.getElementById('moon').style.display = "none"
  document.getElementById('confirm').style.display = "none";
  document.getElementById('reject').style.display = "none";
  document.getElementById('FF').style.display = "none";
  document.getElementById('AL').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Thank you for being here, I need your help. The moon has fallen apart, we need to fix it together! <br>Will you come on the adventure with me?"
  setTimeout(function(){ document.getElementById('confirm').style.display = "inline"}, 2000)
  setTimeout(function(){ document.getElementById('reject').style.display = "inline"}, 2000)
}

function returnfDialogue(){
  document.getElementById('reject').style.display = "none"
  document.getElementById('confirm').style.display = "none";
  document.getElementById('dialogue').innerHTML = "That's okay, you can find Twilight and help Princess Celestia instead!";
  setTimeout(function(){ window.location.href = "twilightLetter.htm"}, 3000)
}

function LsecondDialogue() {
  document.getElementById('confirm').style.display = "none";
  document.getElementById('reject').style.display = "none";
  document.getElementById('FF').style.display = "none";
  document.getElementById('AL').style.display = "none";
  document.getElementById('moon').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Moon pieces look like this!";
  setTimeout(function(){ document.getElementById('moon').style.display = "inline"}, 2000);
  setTimeout(function(){
    var remember = confirm("Do you remember it?");
    if (remember === true) {
      document.getElementById('moon').style.display = "none"
    } else {
      alert("You get 2 more seconds! Look at it carefully!")
      setTimeout(function(){document.getElementById('moon').style.display = "none"}, 2000)}
    },4000);
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "So where should we start looking?"}, 10000)
  setTimeout(function(){ document.getElementById('FF').style.display = "inline"}, 13000)
  setTimeout(function(){ document.getElementById('AL').style.display = "inline"}, 13000)
}

function LthirdDialogue() {
document.getElementById('rabbit').style.display = "none";
document.getElementById('piece').style.display = "none";
document.getElementById('dialogue').innerHTML = "Hi guys, what brings you to the forest today?"
setTimeout(animationLeft, 3500)
setTimeout(function(){ document.getElementById('dialogue').innerHTML = "My friend and I are looking for moon pieces. Have you seen any?"}, 4000)
setTimeout(animationRight, 7500)
setTimeout(function(){ document.getElementById('dialogue').innerHTML = "My bunny friend saw something shiny in a tree. But she got stuck. Can you help her?"}, 8000)
setTimeout(animationLeft, 10500)
setTimeout(function(){ document.getElementById('dialogue').innerHTML = "You can save the bunny, then get the moon piece. Or you can find the moon piece while I rescue the bunny. <br>What do you want to do?"}, 11000)
setTimeout(function(){ document.getElementById('rabbit').style.display = "inline"}, 12000)
setTimeout(function(){ document.getElementById('piece').style.display = "inline"}, 12000)
}

function animationLeft() {
  var elem = document.getElementById("triangle");
  var pos = 780;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 470) {
      clearInterval(id);
    } else {
      pos = pos - 10;
      elem.style.left = pos + 'px';
    }
  }
}
function animationRight() {
  var elem = document.getElementById("triangle");
  var pos = 470;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos >= 780) {
      clearInterval(id);
    } else {
      pos = pos + 14;
      elem.style.left = pos + 'px';
    }
  }
}

function LfourthDialogue() {
  document.getElementById('fishing').style.display = "none";
  document.getElementById('swim').style.display = "none";
  document.getElementById('rod').style.display = "none";
  document.getElementById('table').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Now, let's save the bunny!"
}

function LfifthDialogue() {
  document.getElementById('fishing').style.display = "none";
  document.getElementById('swim').style.display = "none";
  document.getElementById('rod').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Let's go through the tree to find the moon piece!";
}

function changeSquare() {
    alert("This is not the moonpiece. Keep looking!");
    img.style.visibility = "none"
  }

function rightSquare() {
  document.getElementById("block7").src="moon2.png";
  document.getElementById('dialogue').innerHTML = "You found the moon piece! Now, no time to waste, let's continue our adventure!";
  setTimeout(function(){ document.getElementById('table').style.display = "none"}, 3000)
  setTimeout(function(){
  document.body.style.background="url(lake.png)";
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundSize="cover";
  document.getElementById('dialogue').innerHTML = "Hey guys, are you here for the shiny meteor in the lake? <br>Well, we can get it with a fishing rod or we can dive in! What should we do?"
  }, 5000)
  setTimeout(function(){ document.getElementById('swim').style.display = "inline"}, 7000)
  setTimeout(function(){ document.getElementById('rod').style.display = "inline"}, 7000)
}

function rightSquarePlus() {
    document.getElementById("block7").src="moon2.png";
    document.getElementById('dialogue').innerHTML = "You found the moon piece! Finally, we fixed the moon! Let's go celebrate!";
    setTimeout(function(){ document.getElementById('table').style.display = "none"}, 3000)
    setTimeout(function(){ window.location.href = "party.htm"}, 4000)
}

function animationDown() {
  var down = false;
  var elem = document.getElementById("rabbitpic");
  var pos = 200;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos >= 600) {
      clearInterval(id);
    } else {
      pos = pos + 2;
      elem.style.top = pos + 'px';
      var down = true;
    }
  }
}

function LseventhDialogue() {
  document.getElementById('table').style.display = "none";
  animationDown();
  document.getElementById('dialogue').innerHTML = "Yay, the bunny has been saved! Now let's go get the moon piece!";
  setTimeout(function(){
    document.getElementById('dialogue').innerHTML = "Let's go through the tree to find the moon piece!"
    document.getElementById('rabbitpic').style.display = "none";
    document.body.style.background = "url(ground.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById('table').style.display = "inline";
  }, 5000)
}

function LeighthDialogue() {
  document.getElementById('triangle').style.display = "none"
  document.getElementById('rabbit').style.display = "none";
  document.getElementById('piece').style.display = "none";
  document.getElementById('fishing').style.display = "none";
  document.getElementById('swim').style.display = "none";
  document.getElementById('rod').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Hey guys, are you here for the shiny meteor in the lake? <br>Well, we can get it with a fishing rod or we can dive in! What should we do?";
  setTimeout(function(){ document.getElementById('swim').style.display = "inline"},2000)
  setTimeout(function(){ document.getElementById('rod').style.display = "inline"},2000)
}

function LninthDialogue() {
  document.getElementById('fishing').style.display = "none";
  document.getElementById('swim').style.display = "none";
  document.getElementById('rod').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Catch the moon piece by clicking it!"
  document.body.style.background = "url(fishing.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.getElementById('fishing').style.display = "inline"

}

function LtenthDialogue() {
  document.getElementById('swim').style.display = "none";
  document.getElementById('rod').style.display = "none";
  document.getElementById('dialogue').innerHTML = "You got it!"
  document.getElementById('fishing').style.display = "none"
  setTimeout(function(){ window.location.href="party.htm"}, 2000)
}

function LtenthPlusDialogue() {
  document.getElementById('swim').style.display = "none";
  document.getElementById('rod').style.display = "none";
  document.getElementById('dialogue').innerHTML = "You got it!"
  document.getElementById('fishing').style.display = "none"
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "Let's continue our adventure!"}, 2000)
  setTimeout(function(){
    document.body.style.background = "url(forest.png)"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById('triangle').style.display = "inline"
    document.getElementById('dialogue').innerHTML = "Hi guys, what brings you to the forest today?"
    setTimeout(animationLeft, 3500)
    setTimeout(function(){ document.getElementById('dialogue').innerHTML = "My friend and I are looking for moon pieces. Have you seen any?"}, 4000)
    setTimeout(animationRight, 7500)
    setTimeout(function(){ document.getElementById('dialogue').innerHTML = "My bunny friend saw something shiny in a tree. But she got stuck. Can you help her?"}, 8000)
    setTimeout(animationLeft, 10500)
    setTimeout(function(){ document.getElementById('dialogue').innerHTML = "You can save the bunny, then get the moon piece. Or you can find the moon piece while I rescue the bunny. <br>What do you want to do?"}, 11000)
    setTimeout(function(){ document.getElementById('rabbit').style.display = "inline"}, 12000)
    setTimeout(function(){ document.getElementById('piece').style.display = "inline"}, 12000)
  }, 5000)

}

function finalDialogue() {
  document.getElementById('dialogue').innerHTML = "Hey, welcome back! Thank you for your help! Now, let's PARTY!!!";
  setTimeout(function(){ alert("Find Easter Eggs on the page for surprises!")}, 2000)
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "Hey, would you like to go help Princess Celestia too?"}, 4000)
  setTimeout(function(){ document.getElementById('yes').style.display = "inline"}, 6000)
  setTimeout(function(){ document.getElementById('no').style.display = "inline"}, 6000)
}


function playMusic() {
  return music.paused ? music.play() : music.pause();
}

function playEffect1() {
  return horn.play();
}

function playEffect2() {
  return cheer.play();
}
