function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log (string.toUpperCase())
}

function logWhisper(string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string) {
  console.log(eval(string) === eval('4'));
  console.log(string.toLowerCase())
  return "I can't hear you!"
}

//function sayHiToGrandma(string) {
//    console.log('string.toUpperCase()')
//    return "YES INDEED!"
//}
  
//function sayHiToGrandma(string) {
//    console.log('string = "I love you, Grandma."')
//    return "I love you, too."
//}