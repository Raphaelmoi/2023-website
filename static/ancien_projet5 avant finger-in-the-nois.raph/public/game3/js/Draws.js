class Draws {
    constructor() {
    }

    gamePlay(){
	    let randomHeightJump = random(5, 15);
	    let randomYorigin = random(0, height);

	    if (Math.random()<= 0.05) {
	       	characteres.push(new Coin());
	    }
	    if (Math.random()<= 0.007) {
	       	characteres.push(new JumperEnnemie(randomHeightJump, randomYorigin));
	    }
	    if (Math.random()<= 0.004) {
	    	characteres.push(new Dragon());
	    }
        if (baseUnit%100 == 0) {
			blocStep.push(new BlockStep(-0.5, 11, 1.2));
	    }

	    switch (baseUnit){
	    	case 1:
				blocStep.push(new BlockStep(-0.5, 30, 1.2));
				blocStep[blocStep.length-1].x = 0;
	    	break;
	    	case 30 : 
				flyingStep.push(new FlyingStep(1.5, 4, 1));
			break;
			case 90 :
				flyingStep.push(new FlyingStep(2.5, 3, 1));
			break;
			case 150 : 
	    		blocStep.push(new BlockStep(0, 4, 2));
	    	break;
	    	case 200 : 
	    		blocStep.push(new BlockStep(0, 10, 4));
	    	break;
	    	case 290:
	    		characteres.push(new Dragon());
	    	break;
	    	case 330:
	    		blocStep.push(new BlockStep(0, 4, 4));
	    	break;
	    	case 400 : 
				flyingStep.push(new FlyingStep(3, 4, 1));
			break;
	    	case 460 : 
				flyingStep.push(new FlyingStep(3, 4, 1));
			break;
			case 510:
				blocStep.push(new BlockStep(0, 20, 2));
				break;
			case 520:
				blocStep.push(new BlockStep(1, 5 , 2));
				break;
			case 530:
				blocStep.push(new BlockStep(2, 3 , 2));
				break;
		    case 620:
				blocStep.push(new BlockStep(1, 6 , 2));
				break;
			case 660:
				flyingStep.push(new FlyingStep(4, 15, 1));
			break;			
			case 810 :
				flyingStep.push(new FlyingStep(3, 12, 1));
			break;
			case 880:
				blocStep.push(new BlockStep(0, 12 , 3));
			break;

			case 1100:
				flyingStep.push(new FlyingStep(1, 20, 1));
			break;
			case 1300:
				flyingStep.push(new FlyingStep(2.7, 4, 1));
			break;
			case 1320:
				flyingStep.push(new FlyingStep(4, 4, 1));
			break;
			case 1340:
				flyingStep.push(new FlyingStep(4, 8, 1));
			break;
			case 1410:
				flyingStep.push(new FlyingStep(3, 3, 1));
			break;
			case 1430:
				flyingStep.push(new FlyingStep(2, 3, 1));
			break;
			case 1450:
				flyingStep.push(new FlyingStep(1, 3, 1));
			break;
		    case 1500:
		    	blocStep.push(new BlockStep(0, 7, 3))
		    break;
		    case 1570:
		    	blocStep.push(new BlockStep(0, 10, 2))
		    break;
		    case 1630:
		    	blocStep.push(new BlockStep(1, 4, 2))
		    break;		    
			case 1700:
				flyingStep.push(new FlyingStep(3, 5, 1));
			break;
		    case 1740 :
		    	blocStep.push(new BlockStep(0, 17, 2))
		    break;
		    case 1810:
				blocStep.push(new BlockStep(1, 10, 2))
		    break;
		    case 1840:
				blocStep.push(new BlockStep(2, 2, 2))
		    break;
		    case 1890:
				blocStep.push(new BlockStep(2, 2, 2))
		    break;
		    case 1920:
		    	blocStep.push(new BlockStep(0, 12, 2));
				blocStep.push(new BlockStep(1, 8, 2));
				blocStep.push(new BlockStep(2, 3, 2));
		    break;
		    case 1960:
				blocStep.push(new BlockStep(2, 3, 2));
		    break;
		    case 2000:
				flyingStep.push(new FlyingStep(3, 5, 1));
		    break;
		    case 2100:
				flyingStep.push(new FlyingStep(3, 5, 1));
		    break;
		    case 2200:
				flyingStep.push(new FlyingStep(3, 8, 1));
		    break;
		}
    }

drawHealthAndText() {
        //health bar
        noStroke();
        fill(255);
        textSize(20*screenSizeAdaptator);
        textAlign(LEFT);
        
        text("Santé", 18*screenSizeAdaptator, 32*screenSizeAdaptator);
        stroke(255);
        strokeWeight(2);
        noFill();
        rect(100*screenSizeAdaptator, 12*screenSizeAdaptator, 250*screenSizeAdaptator, 22*screenSizeAdaptator);
        noStroke();
        fill(81, 221, 37);
        rect(101*screenSizeAdaptator, 13*screenSizeAdaptator, map(life, 0, 100, 0, 248*screenSizeAdaptator), 20*screenSizeAdaptator);
        noStroke();        

        //Points
        push();
        textAlign(RIGHT);
        fill(255);
        text(" Score : ", width - 120, 30);
        textSize(24);
        text(score, width - 50, 30);
        pop();
    }

}