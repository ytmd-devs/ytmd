/** biome-ignore-all lint/complexity/noUselessThisAlias: Idk why people want to do this */
/** biome-ignore-all lint/correctness/noUndeclaredVariables: ScrollReveal is declared in a script in index.html*/
/** biome-ignore-all lint/suspicious/noAssignInExpressions: Ignore this one */

// Constants
const element = document.documentElement;
const { body } = document;
const revealOnScroll = (window.sr = ScrollReveal({ mobile: false }));

// Load animations
element.classList.remove('no-js');
element.classList.add('js');
window.addEventListener('load', () => {
  body.classList.add('is-loaded');
});

if (body.classList.contains('has-animations')) {
  window.addEventListener('load', () => {
    revealOnScroll.reveal('.feature-extended .device-mockup', {
      duration: 600,
      distance: '100px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'bottom',
      viewFactor: 0.6,
    });
    revealOnScroll.reveal('.feature-extended .feature-extended-body', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'top',
      viewFactor: 0.6,
    });
  });
}

// Bubble canvas
const bubbleCanvas = function (t) {
  const e = this;
  e.parentNode = t;
  e.setCanvasSize();
  window.addEventListener('resize', () => {
    e.setCanvasSize();
  });
  e.mouseX = 0;
  e.mouseY = 0;
  window.addEventListener('mousemove', (t) => {
    e.mouseX = t.clientX;
    e.mouseY = t.clientY;
  });
  e.randomise();
};

bubbleCanvas.prototype.setCanvasSize = function () {
  this.canvasWidth = this.parentNode.clientWidth;
  this.canvasHeight = this.parentNode.clientHeight;
};

bubbleCanvas.prototype.generateDecimalBetween = function (start, end) {
  return (Math.random() * (start - end) + end).toFixed(2);
};

bubbleCanvas.prototype.update = function () {
  const t = this;
  t.translateX -= t.movementX;
  t.translateY -= t.movementY;
  t.posX += (t.mouseX / (t.staticity / t.magnetism) - t.posX) / t.smoothFactor;
  t.posY += (t.mouseY / (t.staticity / t.magnetism) - t.posY) / t.smoothFactor;
  if (
    t.translateY + t.posY < 0 ||
    t.translateX + t.posX < 0 ||
    t.translateX + t.posX > t.canvasWidth
  ) {
    t.randomise();
    t.translateY = t.canvasHeight;
  }
};

bubbleCanvas.prototype.randomise = function () {
  this.colors = ['195,53,46', '172,54,46'];

  this.velocity = 20;
  this.smoothFactor = 50;
  this.staticity = 30;
  this.magnetism = 0.1 + 4 * Math.random();
  this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  this.alpha = this.generateDecimalBetween(5, 10) / 10;
  this.size = this.generateDecimalBetween(1, 4);
  this.posX = 0;
  this.posY = 0;
  this.movementX = this.generateDecimalBetween(-2, 2) / this.velocity;
  this.movementY = this.generateDecimalBetween(1, 20) / this.velocity;
  this.translateX = this.generateDecimalBetween(0, this.canvasWidth);
  this.translateY = this.generateDecimalBetween(0, this.canvasHeight);
};

const drawBubbleCanvas = function (t) {
  this.canvas = document.getElementById(t);
  this.ctx = this.canvas.getContext('2d');
  this.dpr = window.devicePixelRatio;
};

drawBubbleCanvas.prototype.start = function (bubbleDensity) {
  const t = this;
  t.bubbleDensity = bubbleDensity;
  t.setCanvasSize();
  window.addEventListener('resize', () => {
    t.setCanvasSize();
  });
  t.bubblesList = [];
  t.generateBubbles();
  t.animate();
};

drawBubbleCanvas.prototype.setCanvasSize = function () {
  this.container = this.canvas.parentNode;
  this.w = this.container.offsetWidth;
  this.h = this.container.offsetHeight;
  this.wdpi = this.w * this.dpr;
  this.hdpi = this.h * this.dpr;
  this.canvas.width = this.wdpi;
  this.canvas.height = this.hdpi;
  this.canvas.style.width = this.w + 'px';
  this.canvas.style.height = this.h + 'px';
  this.ctx.scale(this.dpr, this.dpr);
};

drawBubbleCanvas.prototype.animate = function () {
  const t = this;
  t.ctx.clearRect(0, 0, t.canvas.clientWidth, t.canvas.clientHeight);
  for (const e of t.bubblesList) {
    e.update();
    t.ctx.translate(e.translateX, e.translateY);
    t.ctx.beginPath();
    t.ctx.arc(e.posX, e.posY, e.size, 0, 2 * Math.PI);
    t.ctx.fillStyle = 'rgba(' + e.color + ',' + e.alpha + ')';
    t.ctx.fill();
    t.ctx.setTransform(t.dpr, 0, 0, t.dpr, 0, 0);
  }

  requestAnimationFrame(this.animate.bind(this));
};

drawBubbleCanvas.prototype.addBubble = function (t) {
  return this.bubblesList.push(t);
};

drawBubbleCanvas.prototype.generateBubbles = function () {
  const t = this;
  for (let e = 0; e < t.bubbleDensity; e++) {
    t.addBubble(new bubbleCanvas(t.canvas.parentNode));
  }
};

// Night sky with stars canvas
const starCanvas = function (t) {
  this.canvas = document.getElementById(t);
  this.ctx = this.canvas.getContext('2d');
  this.dpr = window.devicePixelRatio;
};

starCanvas.prototype.start = function () {
  let w;
  let h;

  const setCanvasExtents = () => {
    w = this.canvas.parentNode.clientWidth;
    h = this.canvas.parentNode.clientHeight;
    this.canvas.width = w;
    this.canvas.height = h;
  };

  setCanvasExtents();

  window.addEventListener('resize', () => {
    setCanvasExtents();
  });

  const makeStars = (count) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const s = {
        x: Math.random() * w - w / 2,
        y: Math.random() * h - h / 2,
        z: Math.random() * 1000,
      };
      out.push(s);
    }

    return out;
  };

  const stars = makeStars(10_000);

  const clear = () => {
    this.ctx.fillStyle = '#212121';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  const putPixel = (x, y, brightness) => {
    const intensity = brightness * 255;
    const rgb = 'rgb(' + intensity + ',' + intensity + ',' + intensity + ')';
    this.ctx.beginPath();
    this.ctx.arc(x, y, 0.9, 0, 2 * Math.PI);
    this.ctx.fillStyle = rgb;
    this.ctx.fill();
  };

  const moveStars = (distance) => {
    const count = stars.length;
    for (let i = 0; i < count; i++) {
      const s = stars[i];
      s.z -= distance;
      while (s.z <= 1) {
        s.z += 1000;
      }
    }
  };

  let previousTime;
  const init = (time) => {
    previousTime = time;
    requestAnimationFrame(tick);
  };

  const tick = (time) => {
    const elapsed = time - previousTime;
    previousTime = time;

    moveStars(elapsed * 0.1);

    clear();

    const cx = w / 2;
    const cy = h / 2;

    const count = stars.length;
    for (let i = 0; i < count; i++) {
      const star = stars[i];

      const x = cx + star.x / (star.z * 0.001);
      const y = cy + star.y / (star.z * 0.001);

      if (x < 0 || x >= w || y < 0 || y >= h) {
        continue;
      }

      const d = star.z / 1000;
      const b = 1 - d * d;

      putPixel(x, y, b);
    }

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(init);
};

// Start canvas animations
window.addEventListener('load', () => {
  // Stars
  const headCanvas = new starCanvas('hero-particles');
  // Bubbles
  const footerCanvas = new drawBubbleCanvas('footer-particles');
  const mainCanvas = new drawBubbleCanvas('main-particles');

  headCanvas.start();
  footerCanvas.start(30);
  mainCanvas.start(200);
});
