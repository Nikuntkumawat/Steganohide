var imgdatauri;
var encodedurl;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector("#image1").src = e.target.result;
      imgdatauri = e.target.result;
    };
  }
  reader.readAsDataURL(input.files[0]);
}


function decode(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
          console.log(steg.decode(e.target.result));
          data = steg.decode(e.target.result);
          console.log(data);
        
        document.querySelector('#decoded').innerText = decrypt(data);
      };
    }
    reader.readAsDataURL(input.files[0]);
  }


function hideText() {  
  document.querySelector("#image2").src = steg.encode(encrypt(document.querySelector('#text').value), imgdatauri);
  encodedurl = document.querySelector("#image2").src;
}

function DownloadImage() {    
  document.getElementById("imageurl").href = encodedurl;     
}

const encrypt = (message)=>{
  let encryptedMessage;

  const messageArr = message.split("");


let encryptedMessageArr = [];

for(i=0; i<messageArr.length; i++){
  let letter;
  switch(messageArr[i]){
    case "a":
      letter = "!";
      break;

      case "b":
        letter = "€";
        break;
        
      case "c":
        letter = "•";
        break;
        
      case "d":
        letter = "ღ";
        break;

      case "e":
      letter = "@";
      break;

      case "f":
        letter = "✘";
        break;
        
      case "g":
        letter = "™";
        break;
        
      case "h":
        letter = "⇝";
        break;

      case "i":
      letter = "#";
      break;
      case "j":
        letter = "☸";
        break;
       
     case "k":
          letter = "☮";
          break;

      case "l":
            letter = "☣";
            break;

      case "m":
              letter = "♚";
              break;

        case "n":
                letter = "✚";
                break;

                case "o":
                  letter = "$";
                  break;
                
          case "p":
                  letter = "☄";
                  break;
          case "q":
                    letter = "☯";
                    break;
         case "r":
                      letter = "☉";
                      break;
          case "s":
                        letter = "✞";
                        break;

                        case "t":
                          letter = ")";
                          break;
                          

                          case "u":
                           letter = "%";
                             break;
      

                          case "v":
                              letter = "→";
                              break;

                              case "w":
                                letter = "❆";
                                break;

                                case "x":
                                  letter = "✡";
                                  break;

                                  case "y":
                                    letter = "✠";
                                    break;

                                    case "z":
                                      letter = "✧";
                                      break;

      default:
      letter = messageArr[i];
      break;   
  }
encryptedMessageArr.push(letter);


}
encryptedMessage = encryptedMessageArr.join("");
return encryptedMessage;
};

const decrypt = (message)=>{
  let decryptedMessage;

  const messageArr = message.split("");
  

let decryptedMessageArr = [];

for(i=0; i<messageArr.length; i++){
  let letter;
  switch(messageArr[i]){
    case "!":
      letter = "a";
      break;

      case "€":
        letter = "b";
        break;

        case "•":
          letter = "c";
          break;
          
        case "ღ":
          letter = "d";
          break;
  
      case "@":
      letter = "e";
      break;

      case "✘":
        letter = "f";
        break;
        
      case "™":
        letter = "g";
        break;
        
      case "⇝":
        letter = "h";
        break;


      case "#":
      letter = "i";
      break;

      case "☸":
        letter = "j";
        break;
       
     case "☮":
          letter = "k";
          break;

      case "☣":
            letter = "l";
            break;

      case "♚":
              letter = "m";
              break;

        case "✚":
                letter = "n";
                break;


      case "$":
      letter = "o";
      break;

      case "☄":
                  letter = "p";
                  break;
          case "☯":
                    letter = "q";
                    break;
         case "☉":
                      letter = "r";
                      break;
          case "✞":
                        letter = "s";
                        break;

                        case ")":
                          letter = "t";
                          break;
                          


      case "%":
      letter = "u";
      break;


                             case "→":
                              letter = "v";
                              break;

                              case "❆":
                                letter = "w";
                                break;

                                case "✡":
                                  letter = "x";
                                  break;

                                  case "✠":
                                    letter = "y";
                                    break;

                                    case "✧":
                                      letter = "z";
                                      break;

      default:
      letter = messageArr[i];
      break;          
  }
decryptedMessageArr.push(letter);


}
decryptedMessage = decryptedMessageArr.join("");
return decryptedMessage;
};



function SendMail() {
  var emailid = document.querySelector('#enteremail').value;
  var subject = "Gift from your beloved friend!"; // Add your Subject here
  var body = "Greetings my dear friend, "+
  " I've sent you a gift from my side hope you find your way! Good Luck my Alan Turing "; // Add your body here

  window.open('https://mail.google.com/mail/u/0/?fs=1&to='+emailid+'&su='+subject+'&body='+body+'&tf=cm','_blank');
}
