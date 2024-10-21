const topRowClick = document.querySelectorAll(".topRow"); //selects the Top Row
const topClick = document.getElementById("top2to1"); // 2 to 1 button
const midRowClick = document.querySelectorAll(".midRow"); //selects the Middle Row
const midClick = document.getElementById("mid2to1"); // 2 to 1 button
const botRowClick = document.querySelectorAll(".bottomRow"); //selects the Bottom Row
const botClick = document.getElementById("bot2to1"); // 2 to 1 button
//twelves
const fTwelve = document.querySelectorAll(".f12"); //selects first twelve
const fTwelveMouse = document.getElementById("1stTwelve");
const sTwelve = document.querySelectorAll(".s12"); //selects second twelve
const sTwelveMouse = document.getElementById("2ndTwelve");
const tTwelve = document.querySelectorAll(".t12"); //selects third twelve
const tTwelveMouse = document.getElementById("3rdTwelve");
//1to18
const oneToEselect = document.querySelectorAll(".ote");
const oneToEighteen = document.getElementById("oneTo18");
//19to36
const nineteenToTselect = document.querySelectorAll(".ntt");
const nineteenToThirtysix = document.getElementById("nineteenTo36");
//even
const evenNoSelect = document.querySelectorAll(".evenNo");
const evenNumbered = document.getElementById("evenBtn");
//odd
const oddNoSelect = document.querySelectorAll(".oddNo");
const oddNumbered = document.getElementById("oddBtn");
//red
const redSelect = document.querySelectorAll(".red");
const redNums = document.getElementById("redBtn");
//black
const blkSelect = document.querySelectorAll(".black");
const blkNums = document.getElementById("blkBtn");

//betClicks
var betChoice;
const betThree = document.getElementById("t3");
const betSix = document.getElementById("t6");
const betNine = document.getElementById("t9");
const betTwelve = document.getElementById("t12");
const betFifteen = document.getElementById("t15");
const betEighteen = document.getElementById("t28");


topClick.addEventListener("click", function(){
  console.log("YOU CLICKED ON TOP ROW!!");
  window.alert("YOU CLICKED ON TOP ROW!!");
  betChoice = topRowNum;
  console.log("your choice is " + betChoice);
});

midClick.addEventListener("click", function(){
  console.log("YOU CLICKED ON MID ROW!!");
  window.alert("YOU CLICKED ON MID ROW!!");
  betChoice = midRowNum;
  console.log("your choice is " + betChoice);
});

botClick.addEventListener("click", function(){
  console.log("YOU CLICKED ON BOTTOM ROW!!");
  window.alert("YOU CLICKED ON BOTTOM ROW!!");
  betChoice = botRowNum;
  console.log("your choice is " + betChoice);
});

fTwelveMouse.addEventListener("click", function(){
  console.log("YOU CLICKED ON FIRST TWELVES!!");
  window.alert("YOU CLICKED ON FIRST TWELVES!!");
  betChoice = first12Num;
  console.log("your choice is " + betChoice);
});

sTwelveMouse.addEventListener("click", function(){
  console.log("YOU CLICKED ON SECOND TWELVES!!");
  window.alert("YOU CLICKED ON SECOND TWELVES!!");
  betChoice = second12Num;
  console.log("your choice is " + betChoice);
});

tTwelveMouse.addEventListener("click", function(){
  console.log("YOU CLICKED ON THIRD TWELVES!!");
  window.alert("YOU CLICKED ON THIRD TWELVES!!");
  betChoice = third12Num;
  console.log("your choice is " + betChoice);
});

oneToEighteen.addEventListener("click", function(){
  console.log("YOU CLICKED ON 1 - 18!!");
  window.alert("YOU CLICKED ON 1 - 18!!");
  betChoice = oneTo18Num;
  console.log("your choice is " + betChoice);
});

redNums.addEventListener("click", function(){
  console.log("YOU CLICKED ON RED !!");
  window.alert("YOU CLICKED ON RED !!");
  betChoice = redNum;
  console.log("your choice is " + betChoice);
});

blkNums.addEventListener("click", function(){
  console.log("YOU CLICKED ON BLACK !!");
  window.alert("YOU CLICKED ON BLACK !!");
  betChoice = blkNum;
  console.log("your choice is " + betChoice);
});

betThree.addEventListener("click", function(){
  console.log("YOU CLICKED ON 3!!");
  window.alert("YOU CLICKED ON 3!!");
  betChoice = 3;
  console.log("your choice is " + betChoice);
});
//betClicks


//twelves
fTwelveMouse.addEventListener("mouseover", event => {
  fTwelve.forEach((e) => {
      e.style.filter = "brightness(200%)";
  });
});

fTwelveMouse.addEventListener("mouseout", event => {
  fTwelve.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

sTwelveMouse.addEventListener("mouseover", event => {
  sTwelve.forEach((e) => {
      e.style.filter = "brightness(200%)";
  });
});

sTwelveMouse.addEventListener("mouseout", event => {
  sTwelve.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

tTwelveMouse.addEventListener("mouseover", event => {
  tTwelve.forEach((e) => {
      e.style.filter = "brightness(200%)";
  });
});

tTwelveMouse.addEventListener("mouseout", event => {
  tTwelve.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});
//--

//1to18
oneToEighteen.addEventListener("mouseover", event => {
  oneToEselect.forEach((e) => {
      e.style.filter = "brightness(200%)";
  });
});

oneToEighteen.addEventListener("mouseout", event => {
  oneToEselect.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//19to36
nineteenToThirtysix.addEventListener("mouseover", event => {
  nineteenToTselect.forEach((e) => {
      e.style.filter = "brightness(200%)";
  });
});

nineteenToThirtysix.addEventListener("mouseout", event => {
  nineteenToTselect.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//even
evenNumbered.addEventListener("mouseover", event => {
  evenNoSelect.forEach((e) => {
      e.style.filter = "brightness(450%)";
  });
});

evenNumbered.addEventListener("mouseout", event => {
  evenNoSelect.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//odd
oddNumbered.addEventListener("mouseover", event => {
  oddNoSelect.forEach((e) => {
      e.style.filter = "brightness(450%)";
  });
});

oddNumbered.addEventListener("mouseout", event => {
  oddNoSelect.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//red
redNums.addEventListener("mouseover", event => {
  redSelect.forEach((e) => {
      e.style.filter = "brightness(450%)";
  });
});

redNums.addEventListener("mouseout", event => {
  redSelect.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//black
blkNums.addEventListener("mouseover", event => {
  blkSelect.forEach((e) => {
      e.style.filter = "brightness(450%)";
  });
});

blkNums.addEventListener("mouseout", event => {
  blkSelect.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//top row styles

topClick.addEventListener("mouseover", event => {
  topRowClick.forEach((e) => {  
      e.style.filter = "brightness(200%)";
      
  });
});

topClick.addEventListener("mouseout", event => {
  topRowClick.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//middle row styles
midClick.addEventListener("mouseover", event => {
  midRowClick.forEach((e) => {
      e.style.filter = "brightness(200%)";    
  });
});

midClick.addEventListener("mouseout", event => {
  midRowClick.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});

//bottom row styles
botClick.addEventListener("mouseover", event => {
  botRowClick.forEach((e) => {
      e.style.filter = "brightness(200%)";    
  });
});

botClick.addEventListener("mouseout", event => {
  botRowClick.forEach((e) => {
      e.style.filter = "brightness(100%)";
  });
});
//--




//observer
class SafeObserver {
  constructor(destination) {
    this.destination = destination;
  }

  next(value) {
    // only try to next if you're subscribed have a handler
    if (!this.isUnsubscribed && this.destination.next) {
      try {
        this.destination.next(value);
      } catch (err) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe();
        throw err;
      }
    }
  }

  error(err) {
    // only try to emit error if you're subscribed and have a handler
    if (!this.isUnsubscribed && this.destination.error) {
      try {
        this.destination.error(err);
      } catch (e2) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe();
        throw e2;
      }
      this.unsubscribe();
    }
  }

  complete() {
    // only try to emit completion if you're subscribed and have a handler
    if (!this.isUnsubscribed && this.destination.complete) {
      try {
        this.destination.complete();
      } catch (err) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe();
        throw err;
      }
      this.unsubscribe();
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;
    if (this.unsub) {
      this.unsub();
    }
  }
}

class Observable {
  constructor(_subscribe) {
    this._subscribe = _subscribe;
  }

  subscribe(observer) {
    const safeObserver = new SafeObserver(observer);
    safeObserver.unsub = this._subscribe(safeObserver);
    return safeObserver.unsubscribe.bind(safeObserver);
  }
}

const map = project => source =>
  new Observable(observer =>
    source.subscribe({
      next: x => observer.next(project(x)),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  );

const filter = f => source =>
  new Observable(observer =>
    source.subscribe({
      next: x => (f(x) ? observer.next(x) : void 8),
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  );

const take = limit => source =>
  new Observable(observer => {
    var i = 0;
    return source.subscribe({
      next: x => {
        i++;
        observer.next(x);
        if (i == limit) {
          observer.complete();
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });

const act = f =>
  map(x => {
    f(x);
    return x;
  });

const startWith = init => source =>
  new Observable(observer => {
    observer.next(init);
    return source.subscribe(observer);
  });

const scan = f => source =>
  new Observable(observer => {
    var last = null;
    var has_last = false;
    const mapObserver = {
      next: x => {
        last = has_last ? f(last, x) : x;
        has_last = true;
        return observer.next(last);
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    return source.subscribe(mapObserver);
  });

const withLatestFrom = right => source =>
  new Observable(observer => {
    var right_val = null;
    const sourceObserver = {
      next: x => observer.next([x, right_val]),
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    const rightObserver = {
      next: x => {
        right_val = x;
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    const source_unsub = source.subscribe(sourceObserver);
    const right_unsub = right.subscribe(rightObserver);
    const unsub = () => {
      source_unsub();
      right_unsub();
    };
    return unsub;
  });

const timer = (interval, limit = Infinity) =>
  new Observable(observer => {
    var i = 0;
    const t = setInterval(() => {
      observer.next(i++);
      if (i == limit) {
        observer.complete();
        clearInterval(t);
      }
    }, interval);
    return () => clearInterval(t);
  });

const fromEvent = (element, eventname) =>
  new Observable(observer => {
    const callback = e => observer.next(e);
    element.addEventListener(eventname, callback);
    return () => element.removeEventListener(eventname, callback);
  });

function pipe(initialValue, ...fns) {
  return fns.reduce((state, fn) => fn(state), initialValue);
}

const takeUntil = notifier => source =>
  new Observable(observer => {
    const source_unsub = source.subscribe({
      next: x => observer.next(x),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
    const notifier_unsub = notifier.subscribe({
      next: _x => {
        observer.complete();
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
    const unsub = () => {
      source_unsub();
      notifier_unsub();
    };
    return unsub;
  });

const zip = left => right =>
  new Observable(observer => {
    var left_queue = [];
    var right_queue = [];
    const leftObserver = {
      next: x => {
        left_queue.push(x);
        const r = right_queue.shift();
        if (typeof r != "undefined") {
          const l = left_queue.shift();
          observer.next([l, r]);
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    const rightObserver = {
      next: x => {
        right_queue.push(x);
        const l = left_queue.shift();
        if (typeof l != "undefined") {
          const r = right_queue.shift();
          observer.next([l, r]);
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    };
    const left_unsub = left.subscribe(leftObserver);
    const right_unsub = right.subscribe(rightObserver);
    const unsub = () => {
      left_unsub();
      right_unsub();
    };
    return unsub;
  });
//observer

//Roulette
var currentBallRotation = 0;
var currentWheelRotation = 0;
var currentWheelIndex = 0;
var isRotating = false;
var zero = [ 0 ];
var blkNum = [ 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 29, 28, 31, 33, 35 ];
var redNum = [ 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 ];
var topRowNum = [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36 ];
var midRowNum = [ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35 ];
var botRowNum = [ 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34 ];
var first12Num = [ 3, 6, 9, 12, 2, 5, 8, 11, 14, 1, 4, 7, 10,];
var second12Num = [ 15, 18, 21, 24, 14, 17, 20, 23, 13, 16, 19, 22 ];
var third12Num = [ 27, 30, 33, 36, 26, 29, 32, 35, 25, 28, 31, 34 ];
var oneTo18Num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ];
const rouletteWheelNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26 ];

const getRouletteWheelNumber = index =>
  rouletteWheelNumbers[index >= 0 ? index % 37 : 37 - Math.abs(index % 37)];

const getRouletteWheelColor = index => {
  const i = index >= 0 ? index % 37 : 37 - Math.abs(index % 37);
  return i === 0 ? "green" : i % 2 == 0 ? "black" : "red";
};

window.rouletteWheelNumbers = rouletteWheelNumbers;

function addFlipper() { //Result Card Function
  const mkDiv = className => {
    const d = document.createElement("div");
    d.classList.add(...className.split(" ")); 
    return d;
  };
  const flipper = mkDiv("flipper");
  const front = mkDiv("front-face");
  const back = mkDiv("back-face");
  flipper.appendChild(front);
  flipper.appendChild(back);
  document.querySelector(".resultNum").appendChild(flipper);
  return (number, color) => {
    if (number == null){
      number = 0;
      color = "green";
    }
    flipper.classList.add("flip", color);
    setTimeout(() => {
      flipper.style.display = "none"; //removes flipper card after Nsecs
    }, 10000);
    back.innerText = number;    
  };
}
//--

function startRotation(speed) {
  if (isRotating) {
    return;
  }

  isRotating = true;

  const writeResult = addFlipper();

  const bezier = [0.165, 0.84, 0.44, 1.005];

  const newWheelIndex = currentWheelIndex - speed;
  const result = getRouletteWheelNumber(newWheelIndex);
  const resultColor = getRouletteWheelColor(newWheelIndex);
  (() => {
    const newRotation = currentWheelRotation + (360 / 37) * speed;
    console.log(getRouletteWheelNumber(currentWheelIndex), "---> ");
    var myAnimation = anime({
      targets: [".layer-2", ".layer-4"],
      rotate: function() {
        return newRotation;
      },
      duration: function() {
        return 5000;
      },
      loop: 1,
      easing: "cubicBezier(0.010, 0.990, 0.855, 1.010)",
      easing: `cubicBezier(${bezier.join(",")})`,
      easing: "cubicBezier(0.000, 1.175, 0.980, 0.990)",
      complete: (...args) => {
        currentWheelRotation = newRotation;
        currentWheelIndex = newWheelIndex;
      }
    });
  })();

  (() => {
    const newRotation = -4 * 360 + currentBallRotation;
    console.log("newRotation", newRotation);
    var myAnimation1 = anime({
      targets: ".ball-container",
      translateY: [
        { value: 0, duration: 2000 },
        { value: 20, duration: 1000 },
        { value: 25, duration: 900 },
        { value: 50, duration: 1000 }
      ],
      rotate: [{ value: newRotation, duration: 4000 }],
      duration: function() {
        return 4000; // anime.random(800, 1400);
      },
      loop: 1,
      easing: `cubicBezier(${bezier.join(",")})`,
      complete: () => {
        currentBallRotation = newRotation;
        writeResult(result, resultColor);
        isRotating = false;
      }
    });
  })();

  //Betting
  function betEngine() {

    setTimeout(() =>{
      console.log("this is the Betting portion.");
      console.log(result);

      if (betChoice == null){
        console.log("YOU DIDN'T CHOOSE A NUMBER")
        window.alert("YOU DIDN'T CHOOSE A NUMBER")
      }

      else if (!betChoice.includes(result)){
        console.log("TRY AGAIN")
        window.alert("TRY AGAIN")
      }

      else if (blkNum.includes(result) && betChoice.includes(result)){

        console.log("YOU'RE IN CHECKING");
        console.log("YOU WON " + result);
        window.alert("YOU WON " + result);
      }
      
      else if (redNum.includes(result) && betChoice.includes(result)){
        console.log("YOU'RE IN CHECKING");
        console.log("YOU WON " + result);
        window.alert("YOU WON " + result);
        
      }


    }, 5000);
  }
  //Betting

betEngine();
}



function offsetEl(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    width: rect.width,
    height: rect.height
  };
}

function isInBoundaryEl(el, x, y) {
  const o = offsetEl(el);
  return (
    x >= o.left && x <= o.left + o.width && y >= o.top && y <= o.top + o.height
  );
}

function isInRadiusEl(el, x, y) {
  const o = offsetEl(el);
  const cx = o.left + o.width / 2;
  const cy = o.top + o.height / 2;
  const dx = x - cx;
  const dy = y - cy;
  const r = o.width / 2;
  return Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(r, 2);
}

const documentEvent = eventName =>
  pipe(
    fromEvent(document, eventName),
    map(e =>
      e.type == "touchstart" || e.type == "touchmove"
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : { x: e.clientX, y: e.clientY }
    )
  );

const tryRotate = ([p0, p1]) => {
  const w = document.querySelector(".layer-2.wheel");
  if (isInRadiusEl(w, p0.x, p0.y)) {
    const d = Math.round(
      Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2)) / 4
    );
    if (Math.abs(d) > 3) {
      window.startRotation(d);
    }
  }
};


zip(documentEvent("mousedown"))(documentEvent("mouseup")).subscribe({
  next: tryRotate
});

zip(documentEvent("touchstart"))(
  pipe(
    withLatestFrom(documentEvent("touchmove"))(fromEvent(document, "touchend")),
    map(([_, r]) => r)
  )
).subscribe({
  next: tryRotate
});

pipe(
  withLatestFrom(documentEvent("touchmove"))(fromEvent(document, "touchend")),
  map(([_, r]) => r)
).subscribe({
  next: e => console.log(e)
});

document.querySelector(".roulette-wheel").addEventListener(
  "touchmove",
  e => {
    e.preventDefault();
  },
  { passive: false }
);

window.startRotation = startRotation;
//Roulette

//Buttons
const three = document.getElementById("t3"); //top 3 button
//Buttons

