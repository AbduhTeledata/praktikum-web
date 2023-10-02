function Bird() {
    this.fly = true;
  }
  
  Bird.prototype.color = 'brown';
  
  var eagle = new Bird();
  
  console.log('eagle.fly: ' + eagle.fly);
  console.log('eagle.color: ' + eagle.color);