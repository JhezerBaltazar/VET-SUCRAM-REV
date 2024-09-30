let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});
 
typewriter
  .pauseFor(2500)
  .typeString(' San Juan de Lurigancho 15446')
  .pauseFor(200)
  .deleteChars(10)
  .start();