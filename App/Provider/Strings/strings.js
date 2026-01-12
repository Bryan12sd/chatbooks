export const interactive_1 = [
  {
    key: 1,
    title:
      '¡Este verano ha sido genial! contaba Hugo a sus amigos a la vuelta de las vacaciones. ¿Que hizo Hugo?',
    image: require('../../Assets/Images/interactive/cuento-14.jpg'),
    buttonFirst: 'Acampar',
    buttonSecond: 'Ir en bicleta',
    buttonFirstKey: 3,
    buttonSecondKey: 2,
  },
  {
    key: 2,
    title: 'Conoció nuevos amigos con los que fue en bicicleta hasta el río',
    image: require('../../Assets/Images/interactive/cuento-01.jpg'),
    buttonFirst: 'Acampar',
    buttonSecond: 'Ayudar en el huerto',
    buttonFirstKey: 3,
    buttonSecondKey: 4,
  },
  {
    key: 3,
    title:
      'Acampó con sus amigos durmiendo bajo el cielo, pero lo que más le gusto fue ayudar a su abuelo en el huerto',
    image: require('../../Assets/Images/interactive/cuento-02.jpg'),
    buttonFirst: 'Ir en bicleta',
    buttonSecond: 'Ayudar en el huerto',
    buttonFirstKey: 2,
    buttonSecondKey: 4,
  },

  {
    key: 4,
    title:
      'El abuelo de Hugo tenía un pequeño huerto que cuidaba con esmero y al que iba con él todas las mañanas',
    image: require('../../Assets/Images/interactive/cuento-03.jpg'),
    buttonFirst: 'Regar el huerto',
    buttonSecond: 'Cosechar alimentos',
    buttonFirstKey: 5,
    buttonSecondKey: 6,
  },

  {
    key: 5,
    title:
      'Le dejaba regarlo, y le enseñaba que era todo lo que tenía plantado',
    image: require('../../Assets/Images/interactive/cuento-04.jpg'),
    buttonFirst: 'Cosechar alimentos',
    buttonSecond: 'Ir donde la abuela',
    buttonFirstKey: 6,
    buttonSecondKey: 7,
  },

  {
    key: 6,
    title:
      'Hugo conoció como eran las plantas de las que crecían los tomates, las lechugas y cómo sacar las zanahoraias',
    image: require('../../Assets/Images/interactive/cuento-05.jpg'),
    buttonFirst: 'Regar el huerto',
    buttonSecond: 'Ir donde la abuela',
    buttonFirstKey: 5,
    buttonSecondKey: 7,
  },

  {
    key: 7,
    title:
      'Luego de recoger los que estaban en su punto, se los llevaron a la abuela para que hiciera una rica ensalada',
    image: require('../../Assets/Images/interactive/cuento-06.jpg'),
    buttonFirst: 'Comer tomates del huerto',
    buttonSecond: 'Comer tomates del super',
    buttonFirstKey: 8,
    buttonSecondKey: 9,
  },

  {
    key: 8,
    title:
      'Hugo les contó a sus compañeros que nunca antes había comido unos tomates más sabrosos',
    image: require('../../Assets/Images/interactive/cuento-07.jpg'),
    buttonFirst: 'Comer tomates del super',
    buttonSecond: 'Hacer un huerto en el cole',
    buttonFirstKey: 9,
    buttonSecondKey: 10,
  },

  {
    key: 9,
    title:
      'A Hugo no le gustaba los tomates del super que compraba con su mamá porque sabían a plástico',
    image: require('../../Assets/Images/interactive/cuento-08.jpg'),
    buttonFirst: 'Comer tomates del huerco',
    buttonSecond: 'Hacer un huerto en el cole',
    buttonFirstKey: 8,
    buttonSecondKey: 10,
  },

  {
    key: 10,
    title:
      'Entonces como los amigos de Hugo también querían probar los tomates del huerto, se le ocurrió hacer uno en el cole',
    image: require('../../Assets/Images/interactive/cuento-09.jpg'),
    buttonFirst: 'Buscar al conserje Marcial',
    buttonSecond: 'Ayudar al conserje Marcial',
    buttonFirstKey: 11,
    buttonSecondKey: 12,
  },

  {
    key: 11,
    title:
      'Todos juntos fueron en busca de Marcial y al contarle el plan se puso contento porque le encantaban las plantas',
    image: require('../../Assets/Images/interactive/cuento-10.jpg'),
    buttonFirst: 'Ayudar al conserje Marcial',
    buttonSecond: 'Contribuir con el planeta',
    buttonFirstKey: 12,
    buttonSecondKey: 13,
  },

  {
    key: 12,
    title:
      'Al día siguiente Marcial llego con tierra y semillas, así entre todos plantaron en la parte de atrás del colegio',
    image: require('../../Assets/Images/interactive/cuento-11.jpg'),
    buttonFirst: 'Buscar al conserje Marcial',
    buttonSecond: 'Contribuir con el planeta',
    buttonFirstKey: 11,
    buttonSecondKey: 13,
  },

  {
    key: 13,
    title:
      'Durante todo el año, los alumnos cuidaron el huerto y aprendieron como las ciudades pueden ser más sostenibles para poder vivir mejor en ellas.',
    image: require('../../Assets/Images/interactive/cuento-12.jpg'),
  },
];
export const maze = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <title>Chatbooks - Laberinto</title>
  
    <style media="screen">
      #mazeContainer {
        background-color: #449ce7;
        display: inline-block;
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: linear;
      }
  
      #mazeContainer #mazeCanvas {
        margin: 0;
        display: block;
        border: solid 10px #449ce7;
      }
  
      input,
      select {
        transition-property: background-color opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 255.3);
        height: 45px;
        width: 300px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        color: white;
        display: inline-block;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        appearance: none;
      }
  
      input:hover,
      select:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
  
      input:active,
      select:active {
        background-color: white;
      }
  
      input:focus,
      select:focus {
        outline: none;
      }
  
      .custom-select {
        display: inline-block;
      }
  
      .custom-select select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-repeat: no-repeat;
        background-position: 125px center;
      }
  
      #Message-Container {
        visibility: hidden;
        color: white;
        display: block;
        width: '100%';
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
      }
  
      #Message-Container #message {
        width: 500px;
        height: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -150px;
        margin-top: -150px;
      }
  
      #page {
        font-family: "Segoe UI", Arial, sans-serif;
        font-size: 24;
        text-align: center;
        height: auto;
        width: auto;
        margin: auto;
      }
  
      #page #menu {
        margin: auto;
        padding: 10px;
        box-sizing: border-box;
      }
  
      #page #menu h1 {
        margin: 0;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 3.2rem;
      }
  
      #page #view {
        position: absolute;
        top: 65px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: auto;
      }
  
      .border {}
  
      #gradient {
        z-index: -1;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        color: #fff;
        background: #fff;
        background-size: 400% 400%;
        animation: Gradient 15s ease infinite;
      }
  
      @keyframes Gradient {
        0% {
          background-position: 0% 50%;
        }
  
        50% {
          background-position: 100% 50%;
        }
  
        100% {
          background-position: 0% 50%;
        }
      }
  
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 400px) {
  
        input,
        select {
          width: 120px;
        }
      }
  
      #com {
        display: block;
        text-align: center;
        width: 500px;
        margin: 0 auto;
        padding: 20px 0px;
      }
    </style>
  </head>
  
  <body>
    <!-- partial:index.partial.html -->
    <html lang="en-GB">
  
    <head>
      <meta charset="utf-8">
  
    <body>
  
      <div id="up"></div>
      <div id="down"></div>
      <div id="left"></div>
      <div id="right"></div>
  
  
      <div id="gradient"></div>
      <div id="page">
        <div id="view">
          <div id="mazeContainer">
            <canvas id="mazeCanvas" class="border" height="1100" width="1100"></canvas>
          </div>
        </div>
      </div>
  
  
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
    </body>
  
    </html>
    <!-- partial -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js'></script>
    <script type="text/javascript">
      function rand(max) {
        return Math.floor(Math.random() * max);
      }
  
      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
  
      function changeBrightness(factor, sprite) {
        var virtCanvas = document.createElement("canvas");
        virtCanvas.width = 500;
        virtCanvas.height = 500;
        var context = virtCanvas.getContext("2d");
        context.drawImage(sprite, 0, 0, 500, 500);
  
        var imgData = context.getImageData(0, 0, 500, 500);
  
        for (let i = 0; i < imgData.data.length; i += 4) {
          imgData.data[i] = imgData.data[i] * factor;
          imgData.data[i + 1] = imgData.data[i + 1] * factor;
          imgData.data[i + 2] = imgData.data[i + 2] * factor;
        }
        context.putImageData(imgData, 0, 0);
  
        var spriteOutput = new Image();
        spriteOutput.src = virtCanvas.toDataURL();
        virtCanvas.remove();
        return spriteOutput;
      }
  
      function displayVictoryMess(moves) {
        var res = {
          type: 'win',
          title: 'Ganaste!',
          content: "Haz realizado " + moves + " movimientos."
        }
        window.ReactNativeWebView.postMessage(JSON.stringify(res));
      }
  
      function toggleVisablity(id) {
        if (document.getElementById(id).style.visibility == "visible") {
          document.getElementById(id).style.visibility = "hidden";
        } else {
          document.getElementById(id).style.visibility = "visible";
        }
      }
  
      function Maze(Width, Height) {
        var mazeMap;
        var width = Width;
        var height = Height;
        var startCoord, endCoord;
        var dirs = ["n", "s", "e", "w"];
        var modDir = {
          n: {
            y: -1,
            x: 0,
            o: "s"
          },
          s: {
            y: 1,
            x: 0,
            o: "n"
          },
          e: {
            y: 0,
            x: 1,
            o: "w"
          },
          w: {
            y: 0,
            x: -1,
            o: "e"
          }
        };
  
        this.map = function() {
          return mazeMap;
        };
        this.startCoord = function() {
          return startCoord;
        };
        this.endCoord = function() {
          return endCoord;
        };
  
        function genMap() {
          mazeMap = new Array(height);
          for (y = 0; y < height; y++) {
            mazeMap[y] = new Array(width);
            for (x = 0; x < width; ++x) {
              mazeMap[y][x] = {
                n: false,
                s: false,
                e: false,
                w: false,
                visited: false,
                priorPos: null
              };
            }
          }
        }
  
        function defineMaze() {
          var isComp = false;
          var move = false;
          var cellsVisited = 1;
          var numLoops = 0;
          var maxLoops = 0;
          var pos = {
            x: 0,
            y: 0
          };
          var numCells = width * height;
          while (!isComp) {
            move = false;
            mazeMap[pos.x][pos.y].visited = true;
  
            if (numLoops >= maxLoops) {
              shuffle(dirs);
              maxLoops = Math.round(rand(height / 8));
              numLoops = 0;
            }
            numLoops++;
            for (index = 0; index < dirs.length; index++) {
              var direction = dirs[index];
              var nx = pos.x + modDir[direction].x;
              var ny = pos.y + modDir[direction].y;
  
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                //Check if the tile is already visited
                if (!mazeMap[nx][ny].visited) {
                  //Carve through walls from this tile to next
                  mazeMap[pos.x][pos.y][direction] = true;
                  mazeMap[nx][ny][modDir[direction].o] = true;
  
                  //Set Currentcell as next cells Prior visited
                  mazeMap[nx][ny].priorPos = pos;
                  //Update Cell position to newly visited location
                  pos = {
                    x: nx,
                    y: ny
                  };
                  cellsVisited++;
                  //Recursively call this method on the next tile
                  move = true;
                  break;
                }
              }
            }
  
            if (!move) {
              //  If it failed to find a direction,
              //  move the current position back to the prior cell and Recall the method.
              pos = mazeMap[pos.x][pos.y].priorPos;
            }
            if (numCells == cellsVisited) {
              isComp = true;
            }
          }
        }
  
        function defineStartEnd() {
          switch (rand(4)) {
            case 0:
              startCoord = {
                x: 0,
                y: 0
              };
              endCoord = {
                x: height - 1,
                y: width - 1
              };
              break;
            case 1:
              startCoord = {
                x: 0,
                y: width - 1
              };
              endCoord = {
                x: height - 1,
                y: 0
              };
              break;
            case 2:
              startCoord = {
                x: height - 1,
                y: 0
              };
              endCoord = {
                x: 0,
                y: width - 1
              };
              break;
            case 3:
              startCoord = {
                x: height - 1,
                y: width - 1
              };
              endCoord = {
                x: 0,
                y: 0
              };
              break;
          }
        }
  
        genMap();
        defineStartEnd();
        defineMaze();
      }
  
      function DrawMaze(Maze, ctx, cellsize, endSprite = null) {
        var map = Maze.map();
        var cellSize = cellsize;
        var drawEndMethod;
        ctx.lineWidth = cellSize / 40;
  
        this.redrawMaze = function(size) {
          cellSize = size;
          ctx.lineWidth = cellSize / 50;
          drawMap();
          drawEndMethod();
        };
  
        function drawCell(xCord, yCord, cell) {
          var x = xCord * cellSize;
          var y = yCord * cellSize;
  
          if (cell.n == false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize, y);
            ctx.strokeStyle = 'white';
            ctx.stroke();
          }
          if (cell.s === false) {
            ctx.beginPath();
            ctx.moveTo(x, y + cellSize);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.strokeStyle = 'white';
            ctx.stroke();
          }
          if (cell.e === false) {
            ctx.beginPath();
            ctx.moveTo(x + cellSize, y);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.strokeStyle = 'white';
            ctx.stroke();
          }
          if (cell.w === false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + cellSize);
            ctx.strokeStyle = 'white';
            ctx.stroke();
          }
        }
  
        function drawMap() {
          for (x = 0; x < map.length; x++) {
            for (y = 0; y < map[x].length; y++) {
              drawCell(x, y, map[x][y]);
            }
          }
        }
  
        function drawEndFlag() {
          var coord = Maze.endCoord();
          var gridSize = 4;
          var fraction = cellSize / gridSize - 2;
          var colorSwap = true;
          for (let y = 0; y < gridSize; y++) {
            if (gridSize % 2 == 0) {
              colorSwap = !colorSwap;
            }
            for (let x = 0; x < gridSize; x++) {
              ctx.beginPath();
              ctx.rect(
                coord.x * cellSize + x * fraction + 4.5,
                coord.y * cellSize + y * fraction + 4.5,
                fraction,
                fraction
              );
              if (colorSwap) {
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
              } else {
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
              }
              ctx.fill();
              colorSwap = !colorSwap;
            }
          }
        }
  
        function drawEndSprite() {
          var offsetLeft = cellSize / 50;
          var offsetRight = cellSize / 25;
          var coord = Maze.endCoord();
          ctx.drawImage(
            endSprite,
            2,
            2,
            endSprite.width,
            endSprite.height,
            coord.x * cellSize + offsetLeft,
            coord.y * cellSize + offsetLeft,
            cellSize - offsetRight,
            cellSize - offsetRight
          );
        }
  
        function clear() {
          var canvasSize = cellSize * map.length;
          ctx.clearRect(0, 0, canvasSize, canvasSize);
        }
  
        if (endSprite != null) {
          drawEndMethod = drawEndSprite;
        } else {
          drawEndMethod = drawEndFlag;
        }
        clear();
        drawMap();
        drawEndMethod();
      }
  
      function Player(maze, c, _cellsize, onComplete, sprite = null) {
        var ctx = c.getContext("2d");
  
        var drawSprite;
        var moves = 0;
        drawSprite = drawSpriteCircle;
        if (sprite != null) {
          drawSprite = drawSpriteImg;
        }
        var player = this;
        var map = maze.map();
        var cellCoords = {
          x: maze.startCoord().x,
          y: maze.startCoord().y
        };
        var cellSize = _cellsize;
        var halfCellSize = cellSize / 2;
  
        this.redrawPlayer = function(_cellsize) {
          cellSize = _cellsize;
          drawSpriteImg(cellCoords);
        };
  
        function drawSpriteCircle(coord) {
          ctx.beginPath();
          ctx.fillStyle = "yellow";
          ctx.arc(
            (coord.x + 1) * cellSize - halfCellSize,
            (coord.y + 1) * cellSize - halfCellSize,
            halfCellSize - 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
            onComplete(moves);
            player.unbindKeyDown();
          }
        }
  
        function drawSpriteImg(coord) {
          var offsetLeft = cellSize / 50;
          var offsetRight = cellSize / 25;
          ctx.drawImage(
            sprite,
            0,
            0,
            sprite.width,
            sprite.height,
            coord.x * cellSize + offsetLeft,
            coord.y * cellSize + offsetLeft,
            cellSize - offsetRight,
            cellSize - offsetRight
          );
          if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
            onComplete(moves);
            player.unbindKeyDown();
          }
        }
  
        function removeSprite(coord) {
          var offsetLeft = cellSize / 50;
          var offsetRight = cellSize / 25;
          ctx.clearRect(
            coord.x * cellSize + offsetLeft,
            coord.y * cellSize + offsetLeft,
            cellSize - offsetRight,
            cellSize - offsetRight
          );
        }
  
        function check(e) {
          var cell = map[cellCoords.x][cellCoords.y];
          moves++;
          switch (e.keyCode) {
            case 65:
            case 37: // west
              if (cell.w == true) {
                sprite = new Image();
                sprite.src =
                  "https://i.ibb.co/1sPznd7/west.png" +
                  "?" +
                  new Date().getTime();
  
                sprite.setAttribute("crossOrigin", " ");
                sprite.onload = function() {
                  removeSprite(cellCoords);
                  cellCoords = {
                    x: cellCoords.x - 1,
                    y: cellCoords.y
                  };
                  drawSprite(cellCoords);
                };
              }
              break;
            case 87:
            case 38: // north
              if (cell.n == true) {
  
                sprite = new Image();
                sprite.src =
                  "https://i.ibb.co/drrBp4Y/north.png" +
                  "?" +
                  new Date().getTime();
  
                sprite.setAttribute("crossOrigin", " ");
                sprite.onload = function() {
                  removeSprite(cellCoords);
                  cellCoords = {
                    x: cellCoords.x,
                    y: cellCoords.y - 1
                  };
                  drawSprite(cellCoords);
                };
              }
              break;
            case 68:
            case 39: // east
              if (cell.e == true) {
                sprite = new Image();
                sprite.src =
                  "https://i.ibb.co/BtmJn8n/east.png" +
                  "?" +
                  new Date().getTime();
  
                sprite.setAttribute("crossOrigin", " ");
                sprite.onload = function() {
                  removeSprite(cellCoords);
                  cellCoords = {
                    x: cellCoords.x + 1,
                    y: cellCoords.y
                  };
                  drawSprite(cellCoords);
                };
              }
              break;
            case 83:
            case 40: // south
              if (cell.s == true) {
                sprite = new Image();
                sprite.src =
                  "https://i.ibb.co/2h7V7fh/south.png" +
                  "?" +
                  new Date().getTime();
  
                sprite.setAttribute("crossOrigin", " ");
                sprite.onload = function() {
                  removeSprite(cellCoords);
                  cellCoords = {
                    x: cellCoords.x,
                    y: cellCoords.y + 1
                  };
                  drawSprite(cellCoords);
                };
              }
              break;
          }
        }
  
        this.bindKeyDown = function() {
          window.addEventListener("keydown", check, false);
  
          $('#up').on("click", function() {
            check({
              keyCode: 38
            });
          });
  
          $('#down').on("click", function() {
            check({
              keyCode: 40
            });
          });
  
          $('#left').on("click", function() {
            check({
              keyCode: 37
            });
          });
  
          $('#right').on("click", function() {
            check({
              keyCode: 39
            });
          });
  
          $("#view").swipe({
            swipe: function(
              event,
              direction,
              distance,
              duration,
              fingerCount,
              fingerData
            ) {
              // console.log(direction);
              switch (direction) {
                case "up":
                  check({
                    keyCode: 38
                  });
                  break;
                case "down":
                  check({
                    keyCode: 40
                  });
                  break;
                case "left":
                  check({
                    keyCode: 37
                  });
                  break;
                case "right":
                  check({
                    keyCode: 39
                  });
                  break;
              }
            },
            threshold: 0
          });
        };
  
        this.unbindKeyDown = function() {
          window.removeEventListener("keydown", check, false);
          $("#view").swipe("destroy");
        };
  
        drawSprite(maze.startCoord());
  
        this.bindKeyDown();
      }
  
      var mazeCanvas = document.getElementById("mazeCanvas");
      var ctx = mazeCanvas.getContext("2d");
      var sprite;
      var finishSprite;
      var maze, draw, player;
      var cellSize;
      var difficulty;
      // sprite.src = 'media/sprite.png';
  
      window.onload = function() {
        let viewWidth = $("#view").width();
        let viewHeight = $("#view").height();
  
        ctx.canvas.width = viewWidth;
        ctx.canvas.height = viewWidth;
  
  
        //Load and edit sprites
        var completeOne = false;
        var completeTwo = false;
        var isComplete = () => {
          if (completeOne === true && completeTwo === true) {
            // console.log("Runs");
            setTimeout(function() {
              makeMaze();
            }, 500);
          }
        };
        sprite = new Image();
        sprite.src =
          "https://i.ibb.co/JB3chXS/Recurso-1.png" +
          "?" +
          new Date().getTime();
        sprite.setAttribute("crossOrigin", " ");
        sprite.onload = function() {
          sprite = changeBrightness(1.2, sprite);
          completeOne = true;
          // console.log(completeOne);
          isComplete();
        };
  
        finishSprite = new Image();
        finishSprite.src = "https://i.ibb.co/3ypmpWb/Recurso-2.png" +
          "?" +
          new Date().getTime();
        finishSprite.setAttribute("crossOrigin", " ");
        finishSprite.onload = function() {
          finishSprite = changeBrightness(1.1, finishSprite);
          completeTwo = true;
          // console.log(completeTwo);
          isComplete();
        };
  
      };
  
      window.onresize = function() {
        let viewWidth = $("#view").width();
        let viewHeight = $("#view").height();
        if (viewHeight < viewWidth) {
          ctx.canvas.width = viewHeight - viewHeight / 100;
          ctx.canvas.height = viewHeight - viewHeight / 100;
        } else {
          ctx.canvas.width = viewWidth - viewWidth / 100;
          ctx.canvas.height = viewWidth - viewWidth / 100;
        }
        cellSize = mazeCanvas.width / difficulty;
        if (player != null) {
          draw.redrawMaze(cellSize);
          player.redrawPlayer(cellSize);
        }
      };
  
      function makeMaze() {
        if (player != undefined) {
          player.unbindKeyDown();
          player = null;
        }
  
        difficulty = 10;
        cellSize = mazeCanvas.width / difficulty;
        maze = new Maze(difficulty, difficulty);
        draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
        player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
        if (document.getElementById("mazeContainer").style.opacity < "100") {
          document.getElementById("mazeContainer").style.opacity = "100";
        }
      }
    </script>
  
  </body>
  
  </html>
  `;

export const words = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <title>Chatbooks - Fundación Telefónica Movistar Ecuador</title>
  
    <style media="screen">
      body {
        background: #fff;
        margin: 0;
        padding: 0;
        font-family: Helvetica;
        color: #fff;
        font-size: 40px
      }
  
      table {
        border: "2px";
        border-color: #ffffff;
        background-color: #019ee6;
      }
    </style>
  </head>
  
  <body>
  
    <head>
      <title>Sopa de Letras</title>
    </head>
  
    <body>
      <div id="div_content">
      </div>
      <br>
    </body>
    <!-- partial -->
    <script type="text/javascript">
      // window.onload = function() {
      //   _show(level = 0);
      // };
  
      var arr1 = [
        [
          ['E', 1],
          ['N', 1],
          ['S', 1],
          ['E', 1],
          ['Ñ', 1],
          ['A', 1],
          ['N', 1],
          ['Z', 1],
          ['A', 1],
          ['S', 1],
          ['E', 0]
        ],
        [
          ['Z', 0],
          ['Q', 0],
          ['M', 0],
          ['X', 0],
          ['H', 0],
          ['U', 0],
          ['R', 0],
          ['T', 0],
          ['V', 0],
          ['Z', 0],
          ['M', 0]
        ],
        [
          ['M', 0],
          ['J', 0],
          ['P', 5],
          ['L', 5],
          ['A', 5],
          ['N', 5],
          ['E', 5],
          ['T', 5],
          ['A', 5],
          ['P', 0],
          ['A', 0]
        ],
        [
          ['V', 0],
          ['Y', 0],
          ['N', 0],
          ['J', 0],
          ['A', 0],
          ['G', 0],
          ['L', 0],
          ['O', 0],
          ['R', 0],
          ['T', 0],
          ['I', 0]
        ],
        [
          ['W', 0],
          ['T', 0],
          ['H', 2],
          ['I', 2],
          ['S', 2],
          ['T', 2],
          ['O', 2],
          ['R', 2],
          ['I', 2],
          ['A', 2],
          ['S', 2]
        ],
        [
          ['T', 0],
          ['B', 0],
          ['E', 0],
          ['O', 0],
          ['K', 0],
          ['N', 0],
          ['I', 0],
          ['Q', 0],
          ['F', 0],
          ['D', 0],
          ['R', 0]
        ],
        [
          ['L', 0],
          ['C', 4],
          ['H', 4],
          ['A', 4],
          ['T', 4],
          ['B', 4],
          ['O', 4],
          ['O', 4],
          ['K', 4],
          ['S', 4],
          ['H', 0]
        ],
        [
          ['A', 0],
          ['Q', 0],
          ['O', 0],
          ['D', 0],
          ['N', 0],
          ['E', 0],
          ['R', 0],
          ['P', 0],
          ['A', 0],
          ['Z', 0],
          ['F', 0]
        ],
        [
          ['H', 0],
          ['J', 0],
          ['D', 0],
          ['C', 0],
          ['P', 0],
          ['L', 0],
          ['A', 0],
          ['B', 0],
          ['X', 0],
          ['T', 0],
          ['Z', 0]
        ],
        [
          ['M', 0],
          ['I', 0],
          ['F', 3],
          ['A', 3],
          ['M', 3],
          ['I', 3],
          ['L', 3],
          ['I', 3],
          ['A', 3],
          ['L', 0],
          ['A', 0]
        ],
        [
          ['I', 0],
          ['Z', 0],
          ['F', 0],
          ['Q', 0],
          ['B', 0],
          ['O', 0],
          ['M', 0],
          ['D', 0],
          ['X', 0],
          ['U', 0],
          ['S', 0]
        ],
      ];
  
      var arr2 = [
        [
          ['H', 4],
          ['É', 4],
          ['R', 4],
          ['O', 4],
          ['E', 4],
          ['H', 0],
          ['E', 0],
          ['R', 0],
          ['A', 0],
          ['S', 0],
          ['E', 0]
        ],
        [
          ['Z', 0],
          ['Q', 0],
          ['M', 0],
          ['X', 0],
          ['H', 0],
          ['U', 0],
          ['R', 0],
          ['T', 0],
          ['V', 0],
          ['Z', 0],
          ['M', 0]
        ],
        [
          ['M', 0],
          ['J', 0],
          ['T', 0],
          ['L', 0],
          ['A', 0],
          ['G', 0],
          ['M', 0],
          ['A', 0],
          ['M', 0],
          ['A', 0],
          ['A', 0]
        ],
        [
          ['V', 0],
          ['Y', 0],
          ['N', 0],
          ['J', 0],
          ['A', 0],
          ['G', 0],
          ['L', 0],
          ['O', 0],
          ['R', 0],
          ['T', 0],
          ['I', 0]
        ],
        [
          ['W', 0],
          ['B', 3],
          ['U', 3],
          ['R', 3],
          ['B', 3],
          ['U', 3],
          ['J', 3],
          ['A', 3],
          ['I', 0],
          ['A', 0],
          ['S', 0]
        ],
        [
          ['T', 0],
          ['P', 2],
          ['A', 2],
          ['L', 2],
          ['O', 2],
          ['M', 2],
          ['A', 2],
          ['S', 2],
          ['F', 0],
          ['D', 0],
          ['R', 0]
        ],
        [
          ['L', 0],
          ['A', 6],
          ['Y', 6],
          ['U', 6],
          ['D', 6],
          ['E', 6],
          ['M', 6],
          ['O', 6],
          ['S', 6],
          ['A', 0],
          ['H', 0]
        ],
        [
          ['A', 0],
          ['Q', 0],
          ['O', 0],
          ['D', 0],
          ['N', 0],
          ['E', 0],
          ['R', 0],
          ['P', 0],
          ['A', 0],
          ['Z', 0],
          ['F', 0]
        ],
        [
          ['H', 0],
          ['J', 0],
          ['R', 1],
          ['E', 1],
          ['G', 1],
          ['A', 1],
          ['L', 1],
          ['O', 1],
          ['X', 0],
          ['T', 0],
          ['Z', 0]
        ],
        [
          ['M', 0],
          ['I', 0],
          ['M', 5],
          ['E', 5],
          ['N', 5],
          ['S', 5],
          ['A', 5],
          ['J', 5],
          ['E', 5],
          ['L', 0],
          ['A', 0]
        ],
        [
          ['I', 0],
          ['Z', 0],
          ['F', 0],
          ['Q', 0],
          ['B', 0],
          ['O', 0],
          ['M', 0],
          ['D', 0],
          ['X', 0],
          ['U', 0],
          ['S', 0]
        ],
      ];
  
      var arr3 = [
        [
          ['F', 2],
          ['R', 2],
          ['U', 2],
          ['T', 2],
          ['A', 2],
          ['T', 4],
          ['U', 4],
          ['C', 4],
          ['A', 4],
          ['N', 4],
          ['E', 0]
        ],
        [
          ['Z', 0],
          ['Q', 0],
          ['M', 0],
          ['X', 0],
          ['H', 0],
          ['U', 0],
          ['R', 0],
          ['T', 0],
          ['V', 0],
          ['Z', 0],
          ['M', 0]
        ],
        [
          ['M', 0],
          ['J', 0],
          ['R', 1],
          ['A', 1],
          ['T', 1],
          ['U', 1],
          ['R', 1],
          ['F', 1],
          ['S', 1],
          ['I', 1],
          ['D', 1]
        ],
        [
          ['V', 0],
          ['C', 3],
          ['E', 3],
          ['R', 3],
          ['E', 3],
          ['Z', 3],
          ['A', 3],
          ['S', 3],
          ['R', 0],
          ['T', 0],
          ['I', 0]
        ],
        [
          ['W', 0],
          ['A', 5],
          ['L', 5],
          ['I', 5],
          ['M', 5],
          ['E', 5],
          ['N', 5],
          ['T', 5],
          ['A', 5],
          ['R', 5],
          ['S', 0]
        ],
        [
          ['T', 0],
          ['P', 0],
          ['E', 0],
          ['S', 0],
          ['R', 6],
          ['A', 6],
          ['D', 6],
          ['U', 6],
          ['L', 6],
          ['A', 6],
          ['S', 6]
        ],
        [
          ['L', 0],
          ['A', 0],
          ['Y', 0],
          ['U', 0],
          ['D', 0],
          ['A', 0],
          ['R', 0],
          ['O', 0],
          ['S', 0],
          ['A', 0],
          ['H', 0]
        ],
        [
          ['A', 0],
          ['Q', 0],
          ['O', 0],
          ['D', 0],
          ['N', 0],
          ['E', 0],
          ['R', 0],
          ['C', 0],
          ['A', 0],
          ['S', 0],
          ['A', 0]
        ],
        [
          ['H', 0],
          ['J', 0],
          ['R', 0],
          ['E', 0],
          ['G', 0],
          ['A', 0],
          ['L', 0],
          ['O', 0],
          ['S', 0],
          ['T', 0],
          ['Z', 0]
        ],
        [
          ['M', 0],
          ['I', 0],
          ['M', 0],
          ['E', 0],
          ['N', 0],
          ['S', 0],
          ['A', 0],
          ['J', 0],
          ['E', 0],
          ['S', 0],
          ['A', 0]
        ],
        [
          ['H', 7],
          ['E', 7],
          ['R', 7],
          ['M', 7],
          ['O', 7],
          ['S', 7],
          ['O', 7],
          ['S', 0],
          ['X', 0],
          ['U', 0],
          ['S', 0]
        ],
      ];
  
      var arr4 = [
        [
          ['R', 3],
          ['Q', 0],
          ['M', 0],
          ['P', 2],
          ['R', 2],
          ['I', 2],
          ['N', 2],
          ['C', 2],
          ['I', 2],
          ['P', 2],
          ['E', 2]
        ],
        [
          ['E', 3],
          ['R', 0],
          ['S', 6],
          ['K', 6],
          ['O', 6],
          ['O', 6],
          ['B', 6],
          ['T', 6],
          ['A', 6],
          ['H', 6],
          ['C', 6]
        ],
        [
          ['I', 3],
          ['H', 1],
          ['E', 1],
          ['C', 1],
          ['H', 1],
          ['I', 1],
          ['Z', 1],
          ['O', 1],
          ['S', 0],
          ['I', 0],
          ['G', 0]
        ],
        [
          ['N', 3],
          ['C', 0],
          ['E', 0],
          ['R', 0],
          ['E', 0],
          ['Z', 0],
          ['A', 0],
          ['S', 0],
          ['R', 0],
          ['T', 0],
          ['O', 0]
        ],
        [
          ['0', 3],
          ['A', 0],
          ['L', 0],
          ['I', 0],
          ['M', 0],
          ['E', 0],
          ['D', 0],
          ['A', 0],
          ['S', 0],
          ['A', 0],
          ['C', 0]
        ],
        [
          ['T', 0],
          ['P', 0],
          ['E', 0],
          ['S', 0],
          ['R', 0],
          ['A', 0],
          ['D', 0],
          ['U', 0],
          ['L', 0],
          ['A', 0],
          ['S', 0]
        ],
        [
          ['L', 0],
          ['A', 0],
          ['Y', 0],
          ['U', 0],
          ['D', 0],
          ['A', 0],
          ['R', 0],
          ['O', 0],
          ['S', 0],
          ['A', 0],
          ['H', 0]
        ],
        [
          ['A', 0],
          ['Q', 0],
          ['O', 0],
          ['D', 0],
          ['N', 0],
          ['E', 0],
          ['R', 0],
          ['C', 0],
          ['A', 0],
          ['S', 0],
          ['A', 0]
        ],
        [
          ['H', 0],
          ['J', 0],
          ['R', 0],
          ['A', 7],
          ['M', 7],
          ['I', 7],
          ['G', 7],
          ['O', 7],
          ['S', 7],
          ['T', 0],
          ['Z', 0]
        ],
        [
          ['T', 5],
          ['R', 5],
          ['A', 5],
          ['B', 5],
          ['A', 5],
          ['J', 5],
          ['A', 5],
          ['B', 5],
          ['A', 5],
          ['N', 5],
          ['A', 0]
        ],
        [
          ['H', 0],
          ['S', 4],
          ['E', 4],
          ['T', 4],
          ['N', 4],
          ['A', 4],
          ['T', 4],
          ['I', 4],
          ['B', 4],
          ['A', 4],
          ['H', 4]
        ],
      ];
  
      var arr5 = [
        [
          ['M', 4],
          ['O', 4],
          ['V', 4],
          ['I', 4],
          ['M', 4],
          ['I', 4],
          ['E', 4],
          ['N', 4],
          ['T', 4],
          ['O', 4],
          ['S', 0]
        ],
        [
          ['E', 0],
          ['R', 0],
          ['S', 0],
          ['K', 0],
          ['A', 5],
          ['L', 5],
          ['L', 5],
          ['I', 5],
          ['L', 5],
          ['O', 5],
          ['P', 5]
        ],
        [
          ['I', 0],
          ['H', 0],
          ['A', 1],
          ['C', 0],
          ['H', 0],
          ['I', 0],
          ['Z', 0],
          ['O', 0],
          ['S', 0],
          ['I', 0],
          ['D', 3]
        ],
        [
          ['N', 0],
          ['C', 0],
          ['J', 1],
          ['R', 0],
          ['E', 0],
          ['Z', 0],
          ['A', 0],
          ['S', 0],
          ['R', 0],
          ['T', 0],
          ['A', 3]
        ],
        [
          ['0', 0],
          ['A', 0],
          ['E', 1],
          ['I', 0],
          ['M', 0],
          ['E', 0],
          ['D', 0],
          ['A', 0],
          ['S', 0],
          ['A', 0],
          ['D', 3]
        ],
        [
          ['T', 0],
          ['P', 0],
          ['R', 1],
          ['S', 0],
          ['R', 0],
          ['A', 0],
          ['D', 0],
          ['U', 0],
          ['L', 0],
          ['A', 0],
          ['I', 3]
        ],
        [
          ['L', 0],
          ['A', 0],
          ['D', 1],
          ['U', 0],
          ['D', 0],
          ['A', 0],
          ['R', 0],
          ['O', 0],
          ['S', 0],
          ['A', 0],
          ['R', 3]
        ],
        [
          ['A', 0],
          ['Q', 0],
          ['A', 1],
          ['D', 0],
          ['N', 0],
          ['E', 0],
          ['R', 0],
          ['C', 0],
          ['A', 0],
          ['S', 0],
          ['U', 3]
        ],
        [
          ['H', 0],
          ['J', 0],
          ['M', 1],
          ['A', 0],
          ['M', 0],
          ['I', 0],
          ['G', 0],
          ['O', 0],
          ['S', 0],
          ['T', 0],
          ['C', 3]
        ],
        [
          ['T', 0],
          ['R', 0],
          ['O', 1],
          ['R', 6],
          ['I', 6],
          ['N', 6],
          ['C', 6],
          ['O', 6],
          ['N', 6],
          ['E', 0],
          ['S', 3]
        ],
        [
          ['H', 0],
          ['S', 0],
          ['C', 1],
          ['C', 2],
          ['O', 2],
          ['M', 2],
          ['A', 2],
          ['R', 2],
          ['C', 2],
          ['A', 2],
          ['O', 3]
        ],
      ];
  
  
      function _get(id) {
        return document.getElementById(id);
      }
  
      function _getArray(level) {
        switch (level) {
          case 0:
            return arr1;
          case 1:
            return arr2;
          case 2:
            return arr3;
          case 3:
            return arr4;
          case 4:
            return arr5;
        }
      }
  
      function _show(level) {
        var tb = document.createElement("table");
  
        var c = 0;
  
        var arr = _getArray(level)
  
        for (var fil = 0; fil < arr.length; fil++) {
          var tr = document.createElement("tr");
          for (var cel = 0; cel < arr.length; cel++) {
            c++;
            var td = document.createElement("th");
            var text = document.createTextNode(arr[fil][cel][0]);
            td.id = arr[fil][cel][1];
            td.style.width = "85px";
            td.style.height = "85px";
            td.onclick = function() {
              sombrear(this);
            };
            td.appendChild(text);
            tr.appendChild(td);
          }
          tb.appendChild(tr);
        }
        if (!_get("div_content")) {
          var cont = document.createElement("div");
          cont.id = "div_content";
          cont.appendChild(tb);
          document.body.appendChild(cont);
        } else {
          _get("div_content").innerHTML = "";
          _get("div_content").appendChild(tb);
  
        }
      }
  
      function sombrear(celda) {
  
        // console.log(celda.textContent);
  
        if (celda.style.backgroundColor === '' || celda.style.backgroundColor === 'rgb(1, 158, 230)') {
          celda.style.backgroundColor = '#861c82';
          if (celda.id != 0) {
            var res = {
              type: 'words',
              id: celda.id,
              letter: celda.textContent
            }
            window.ReactNativeWebView.postMessage(JSON.stringify(res));
          }
        } else {
          if (celda.id == 0) {
            celda.style.backgroundColor = '#019ee6'
          }
        }
      }
    </script>
  </body>
  
  </html>
  `;

export const link_ANDROID = '"market://details?id=com.goodbarber.chatbook2';
export const link_IOS = 'itms-apps://itunes.apple.com/us/app/id1176462115?mt=8';

export const http_ANDROID =
  'https://play.google.com/store/apps/details?id=com.goodbarber.chatbook2';
export const http_IOS =
  'https://apps.apple.com/ec/app/chatbooks-ft/id1176462115';
