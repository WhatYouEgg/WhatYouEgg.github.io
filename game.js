var dialogue = "";
var name = "";
var music = document.getElementById('music')
var horn = document.getElementById('horn')
var cheer = document.getElementById('cheer')
document.getElementById('confirm').style.display = "none";
document.getElementById('reject').style.display = "none";
document.getElementById('C').style.display = "none";
document.getElementById('L').style.display = "none";



function startGame() {
  document.body.style.backgroundImage = "url('BG.png')";
  document.getElementById('dialogue').innerHTML = "Hello, I am Rainbow Dash. <br> I haven't seen you around here, what's your name?";
  setTimeout(getName, 3000);
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "Nice to meet you, " + name + "."; }, 7500 )
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "Do you want to go on an adventure?"}, 10000)
  setTimeout(function(){ document.getElementById('confirm').style.display = "inline"}, 13000)
  setTimeout(function(){ document.getElementById('reject').style.display = "inline"}, 13000)
}

function getName() {
  name = prompt("Enter your name: ");
}


function firstDialogue() {
  document.getElementById('confirm').style.display = "none";
  document.getElementById('reject').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Awesome! We need YOU now! Princess Luna and Princess Celestia both need your help! <br>Who do you want to help?"
  setTimeout(function(){document.getElementById('C').style.display = "inline";}, 3000)
  setTimeout(function(){document.getElementById('L').style.display = "inline";}, 3000)
}

function returnfDialogue() {
  document.getElementById('confirm').style.display = "none";
  document.getElementById('reject').style.display = "none";
  document.getElementById('dialogue').innerHTML = "That's okay, you can go help Princess Luna instead!"
  setTimeout(function(){ window.location.href = "lunagreeting.htm"}, 3000)
}

//twilightLetter

function secondDialogue() {
  document.getElementById('crown').style.display = "none";
  document.body.style.backgroundImage = "url('BG2.gif')";
  document.getElementById('PR').style.display = "none";
  document.getElementById('SF').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Dear Princess Celestia, I found a friend to help you.";
  setTimeout(function(){ document.body.style.backgroundImage = "url('BG3.png')";}, 3000 )
  setTimeout(function(){ document.getElementById('crown').style.display = "inline";}, 3000 )
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "Hey, nice to meet you-";}, 3000);
  setTimeout(animation, 4000);
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "oh no, my CROWN HAS ROLLED AWAY. It has been broken into four pieces. <br>I need your help finding my crown. Will you help me?";}, 6000);
  setTimeout(function(){ document.getElementById('crown').style.display = "none";}, 6000 )
  setTimeout(function(){ document.getElementById('confirm').style.display = "inline"}, 9000)
  setTimeout(function(){ document.getElementById('reject').style.display = "inline"}, 9000)
}

function animation() {
  var elem = document.getElementById("crown");

  var pos = 820;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 1500) {
      clearInterval(id);
    } else {
      pos = pos + 3;
      elem.style.left = pos + 'px';
    }
  }
}

function thirdDialogue() {
  document.getElementById('confirm').style.display = "none";
  document.getElementById('reject').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Great, thank you so much. You are the best; I will have a party for you, if you can return it."
  setTimeout(function(){ document.getElementById('dialogue').innerHTML = "Here is a map and a picture of my crown. Each place on the map holds one pieces of my crown. <br>Where do you want to go first?";}, 3000);
  setTimeout(function(){ document.getElementById('PR').style.display = "inline"}, 6000)
  setTimeout(function(){ document.getElementById('SF').style.display = "inline"}, 6000)
}

//Pony Race

function fourthDialogue() {
  document.getElementById('Magnet').style.display = "none";
  document.getElementById('Fly').style.display = "none";
  document.getElementById('magnetpic').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Hi! I heard you were looking for Princess Celestia's crown! I saw a shiny piece roll into the middle of the track. <br>You can use a magnet to get it, or I could fly to get it for you."
  setTimeout(function(){ document.getElementById('Magnet').style.display = "inline"}, 3000)
  setTimeout(function(){ document.getElementById('Fly').style.display = "inline"}, 3000)
}

function fifthDialogue() {
  document.getElementById('Magnet').style.display = "none";
  document.getElementById('Fly').style.display = "none";
  alert("Congratulations! You found a piece of the crown!")
  document.getElementById('dialogue').innerHTML = "Good job! You got a piece of the crown! Now, let's head to the School of Friendship"
  setTimeout(function() { var travel = confirm("Ready?");
  if (travel === true) {
    document.body.style.backgroundImage = "url('school.png')";
    document.getElementById('dialogue').innerHTML = "Darling, to get the piece you need to solve one math question to open the treasure chest!"
    var x = Math.floor(10*Math.random()+1);
    var y = Math.floor(10*Math.random()+1);
    var answer = x+y;
    var response = 0;
    setTimeout(function() {
    while (response != answer) {
      var response = prompt("What is " + x + " + " + y + "?")
      if (response != answer) {
        alert("Think harder!")
      }
    }
    alert("Good job, you found the moon piece! Now, let's continue!")
    }, 3000)
  setTimeout(function(){ window.location.href = "NewYork.htm"}, 5000)
  }}, 5000)
}

function magnetSuccess() {

  var x = Math.floor(1*Math.random()+2);
    if (x==1) {

      fifthDialogue()
    } else if (x==2) {
      document.getElementById('Magnet').style.display = "none";
      document.getElementById('dialogue').innerHTML = "Oh no, the magnet does not work :(!!!! :("
    }
}

//school of Friendship

function sixthDialogue() {
  document.getElementById('Magnet').style.display = "none";
  document.getElementById('Fly').style.display = "none";
  document.getElementById('dialogue').innerHTML = "Darling, to get the piece you need to solve one math question to open the treasure chest!"
  var x = Math.floor(10*Math.random()+1);
  var y = Math.floor(10*Math.random()+1);
  var answer = x+y;
  var response = 0;
  setTimeout(function() {
  while (response != answer) {
    var response = prompt("What is " + x + " + " + y + "?")
    if (response != answer) {
      alert("Think harder!")
    }
  }
  alert("Good job, you found the moon piece! Now, let's go to the Pony Race!")
  document.body.style.backgroundImage = "url('race.jpg')";
  document.getElementById('dialogue').innerHTML = "Hi! I heard you were looking for Princess Celestia's crown! I saw a shiny piece roll into the middle of the track. <br>You can use a magnet to get it, or I could fly to get it for you."
  }, 3000)
  setTimeout(function(){ document.getElementById('Magnet').style.display = "inline"}, 5000)
  setTimeout(function(){ document.getElementById('Fly').style.display = "inline"}, 5000)

}

function sixthPlusDialogue() {
  document.getElementById('Magnet').style.display = "none";
  document.getElementById('Fly').style.display = "none";
  alert("Congratulations! You found a piece of the crown!")
  document.getElementById('dialogue').innerHTML = "Good job! You got a piece of the crown! Now, let's head to New York for the final piece!"
  setTimeout(function(){ window.location.href = "NewYork.htm"}, 3000)
}

function seventhDialogue() {
  document.getElementById('dialogue').innerHTML = "Hi folks! I saw a piece of the crown here in Central Park. <br>It's somewhere in this picture! You need to find it!"
}

function findCrown() {
  alert("Good job! You found the last piece of the crown!")
  document.getElementById('dialogue').innerHTML = "Now, I remember Princess Celestia planning a party for you! <br> Let's go celebrate!"
  setTimeout(function(){ window.location.href = "party.htm"}, 5000)
}

function finalDialogue() {
  document.getElementById('dialogue').innerHTML = "Hey, welcome back! Thank you for your help! Now, let's PARTY!!!";
  setTimeout(function(){ alert("Find Easter Eggs on the page for surprises!")}, 2000)
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
