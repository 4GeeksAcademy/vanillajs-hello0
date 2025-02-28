let pronoun = ['El', 'Tu', 'Mi'];
let adj = ['increible', 'pequeño', 'gran' ];
let noun = ['perro', 'rata', 'gato', 'pantalon', 'coche'];

for(let i = 0; i < pronoun.length; i++) {
  for(let j = 0; j < adj.length; j++) {
    for(let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k]+'.com'); 
    }
  }
}