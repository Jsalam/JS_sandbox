function UIGuides(){
  this.dp = 8;

  this.vertKeylines = function (guideX, guideY){
    stroke(255,0, 175, 100);
    // Left 12
    line (guideX + 12, guideY, guideX + 12, guideY + 812);
    // Left 72
    line (guideX + 72, guideY, guideX + 72, guideY + 812);
    // Right 12
    line (guideX + 375-12, guideY, guideX + 375-12, guideY + 812);
    // Right 32
    line (guideX + 375-32, guideY, guideX + 375-32, guideY + 812);
    // Right 56
    line (guideX + 375-56, guideY, guideX + 375-56, guideY + 812);
  };

  this.hrzKeylines = function(guideX, guideY){
    stroke(0,55, 275, 100);
    // Status
    var gap = this.dp * 4;
    line (guideX, guideY + gap , guideX + 375, guideY + gap);
    // Toolbar
    gap = gap + this.dp * 7;
    line (guideX, guideY + gap , guideX + 375, guideY + gap);
    // content spacer
    gap = gap + this.dp;
    line (guideX, guideY + gap , guideX + 375, guideY + gap);
    // Item List
    for (var i=0; i < 4; i++){
      gap = gap + this.dp * 9;
      line (guideX, guideY + gap , guideX + 375, guideY + gap);
    }
    // Content spacer
    gap = gap + this.dp;
    line (guideX, guideY + gap , guideX + 375, guideY + gap);
    // Item List
    for (var i=0; i < 6; i++){
      gap = gap + this.dp * 9;
      line (guideX, guideY + gap , guideX + 375, guideY + gap);
    }
  }

  this.spacers = function(guideX, guideY){
    var gap = 0;
    this.statusBar(guideX, guideY, 375);
    gap = gap + this.dp * 4;
    this.toolBar(guideX, guideY + gap, 375);
    gap = gap + this.dp * 7;
    this.contentSpacer(guideX,guideY+gap, 375, 1);
    gap = gap + this.dp;
    this.itemList(4, guideX, guideY + gap, 375, 9);
    gap = gap + this.dp*4*9;
    this.contentSpacer(guideX,guideY+gap, 375, 1);
    gap = gap + this.dp;
    this.itemList(6, guideX, guideY + gap, 375, 9);
  }

  this.statusBar = function(posX,posY, w){

    fill(0,150,150,100);
    noStroke();
    rect(posX, posY, w, this.dp*4);
  }

  this.toolBar = function(posX, posY, w){
    fill(170,10,150,100);
    noStroke();
    rect(posX, posY, w, this.dp*7);
  }

  this.contentSpacer = function(posX, posY, w){
    fill(252,50,150);
    noStroke();
    rect(posX, posY, w, this.dp);
  }

  this.itemList = function(quantity, posX, posY, w, factor){
    fill(62,79,177,100)
    noStroke()
    var inc = 0;
    for(var i = 0; i < quantity; i++){
      rect(posX, posY + inc, w, this.dp*factor)
      text(" Item " + i, posX + 72, inc + posY + (this.dp*factor)/2);
      inc = inc + (this.dp*factor);
    }
  }
}