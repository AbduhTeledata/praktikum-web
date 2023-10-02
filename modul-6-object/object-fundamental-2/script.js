function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }
  
  const player1 = new Player('steve', 'X')
  const player2 = new Player('also steve', 'O')
  
  player1.sayName() // logs 'steve'
  player2.sayName() // logs 'also steve'

  