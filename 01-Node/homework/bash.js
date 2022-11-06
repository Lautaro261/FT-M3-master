const commands = require ('./commands/index');

// commands { eco: , data: , ls: }

const print = function(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

// Output un prompt
 process.stdout.write('prompt > ');
 // El evento stdin 'data' se dispara cuando el user escribe una línea
 process.stdin.on('data', function (data) {

   let args = data.toString().trim().split(" "); // remueve la nueva línea 
   // args ['eco', 'hola', 'papi']
   let cmd = args.shift();
   // cmd ['hola', 'papi'] se borró el primer valor del array [0]

   if(commands[cmd]){
    commands[cmd] (args, print);
   }else{
    print('cmd not found')
   }

 });
