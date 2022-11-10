var http = require("http");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

http
  .createServer((request, response) => {
    if (request.url === "/api" || request.url === "/api/") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(beatles));
    }

    // recibo "/api/John Lennon" ..... /api/pindonga   John Lennon automaticamente pasa a John%20Lennon
    // 1) pregunto si los primeros caracter son igual /api/ && el largo es mayor a 5

    if (request.url.substring(0, 5) === "/api/" && request.url.length > 5) {
      //                                                                               req.url = /api/ALGO
      let capturaBeatle = request.url.split("/").pop(); // req.url =  ['', 'api', 'ALGO'] Y luego req.url = 'ALGO'
      let encuentraElBeatle = beatles.find(
        (beatle) => capturaBeatle === encodeURI(beatle.name)
      );

      if (encuentraElBeatle) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(encuentraElBeatle));
      } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("La pagina no se encuentra papi");
      }
    }

    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const index = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
      return response.end(index);
    }

    let capturaBeat = request.url.split("/").pop();
    let encuentraBeat = beatles.find((beatle) => {
      capturaBeat === encodeURI(beatle.name);
    });

    if (encuentraBeat) {
      response.writeHead(200, { "Content-Type": "text/html" });
      let read = fs.readFileSync(`${__dirname}/beatle.html`, "utf-8");
      read = read.replace(/{name}/g, encuentraBeat.name);
      read = read.replace("{birth}", encuentraBeat.birthdate);
      read = read.replace("{profilePic}", encuentraBeat.profilePic);
      response.end(read);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("no hay beatles papu");
    }
  }).listen(3007, "127.0.0.1");
