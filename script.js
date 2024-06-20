function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.1,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `/src/assets/scene00001.png
/src/assets/scene00002.png
/src/assets/scene00003.png
/src/assets/scene00004.png
/src/assets/scene00005.png
/src/assets/scene00006.png
/src/assets/scene00007.png
/src/assets/scene00008.png
/src/assets/scene00009.png
/src/assets/scene00010.png
/src/assets/scene00011.png
/src/assets/scene00012.png
/src/assets/scene00013.png
/src/assets/scene00014.png
/src/assets/scene00015.png
/src/assets/scene00016.png
/src/assets/scene00017.png
/src/assets/scene00018.png
/src/assets/scene00019.png
/src/assets/scene00020.png
/src/assets/scene00021.png
/src/assets/scene00022.png
/src/assets/scene00023.png
/src/assets/scene00024.png
/src/assets/scene00025.png
/src/assets/scene00026.png
/src/assets/scene00027.png
/src/assets/scene00028.png
/src/assets/scene00029.png
/src/assets/scene00030.png
/src/assets/scene00031.png
/src/assets/scene00032.png
/src/assets/scene00033.png
/src/assets/scene00034.png
/src/assets/scene00035.png
/src/assets/scene00036.png
/src/assets/scene00037.png
/src/assets/scene00038.png
/src/assets/scene00039.png
/src/assets/scene00040.png
/src/assets/scene00041.png
/src/assets/scene00042.png
/src/assets/scene00043.png
/src/assets/scene00044.png
/src/assets/scene00045.png
/src/assets/scene00046.png
/src/assets/scene00047.png
/src/assets/scene00048.png
/src/assets/scene00049.png
/src/assets/scene00050.png
/src/assets/scene00051.png
/src/assets/scene00052.png
/src/assets/scene00053.png
/src/assets/scene00054.png
/src/assets/scene00055.png
/src/assets/scene00056.png
/src/assets/scene00057.png
/src/assets/scene00058.png
/src/assets/scene00059.png
/src/assets/scene00060.png
/src/assets/scene00061.png
/src/assets/scene00062.png
/src/assets/scene00063.png
/src/assets/scene00064.png
/src/assets/scene00065.png
/src/assets/scene00066.png
/src/assets/scene00067.png
/src/assets/scene00068.png
/src/assets/scene00069.png
/src/assets/scene00070.png
/src/assets/scene00071.png
/src/assets/scene00072.png
/src/assets/scene00073.png
/src/assets/scene00074.png
/src/assets/scene00075.png
/src/assets/scene00076.png
/src/assets/scene00077.png
/src/assets/scene00078.png
/src/assets/scene00079.png
/src/assets/scene00080.png
/src/assets/scene00081.png
/src/assets/scene00082.png
/src/assets/scene00083.png
/src/assets/scene00084.png
/src/assets/scene00085.png
/src/assets/scene00086.png
/src/assets/scene00087.png
/src/assets/scene00088.png
/src/assets/scene00089.png
/src/assets/scene00090.png
/src/assets/scene00091.png
/src/assets/scene00092.png
/src/assets/scene00093.png
/src/assets/scene00094.png
/src/assets/scene00095.png
/src/assets/scene00096.png
/src/assets/scene00097.png
/src/assets/scene00098.png
/src/assets/scene00099.png
/src/assets/scene00100.png
/src/assets/scene00101.png
/src/assets/scene00102.png
/src/assets/scene00103.png
/src/assets/scene00104.png
/src/assets/scene00105.png
/src/assets/scene00106.png
/src/assets/scene00107.png
/src/assets/scene00108.png
/src/assets/scene00109.png
/src/assets/scene00110.png
/src/assets/scene00111.png
/src/assets/scene00112.png
/src/assets/scene00113.png
/src/assets/scene00114.png
/src/assets/scene00115.png
/src/assets/scene00116.png
/src/assets/scene00117.png
/src/assets/scene00118.png
/src/assets/scene00119.png
/src/assets/scene00120.png
/src/assets/scene00121.png
/src/assets/scene00122.png
/src/assets/scene00123.png
/src/assets/scene00124.png
/src/assets/scene00125.png
/src/assets/scene00126.png
/src/assets/scene00127.png
/src/assets/scene00128.png
/src/assets/scene00129.png
/src/assets/scene00130.png
/src/assets/scene00131.png
/src/assets/scene00132.png
/src/assets/scene00133.png
/src/assets/scene00134.png
/src/assets/scene00135.png
/src/assets/scene00136.png
/src/assets/scene00137.png
/src/assets/scene00138.png
/src/assets/scene00139.png
/src/assets/scene00140.png
/src/assets/scene00141.png
/src/assets/scene00142.png
/src/assets/scene00143.png
/src/assets/scene00144.png
/src/assets/scene00145.png
/src/assets/scene00146.png
/src/assets/scene00147.png
/src/assets/scene00148.png
/src/assets/scene00149.png
/src/assets/scene00150.png
/src/assets/scene00151.png
/src/assets/scene00152.png
/src/assets/scene00153.png
/src/assets/scene00154.png
/src/assets/scene00155.png
/src/assets/scene00156.png
/src/assets/scene00157.png
/src/assets/scene00158.png
/src/assets/scene00159.png
/src/assets/scene00160.png
/src/assets/scene00161.png
/src/assets/scene00162.png
/src/assets/scene00163.png
/src/assets/scene00164.png
/src/assets/scene00165.png
/src/assets/scene00166.png
/src/assets/scene00167.png
/src/assets/scene00168.png
/src/assets/scene00169.png
/src/assets/scene00170.png
/src/assets/scene00171.png
/src/assets/scene00172.png
/src/assets/scene00173.png
/src/assets/scene00174.png
/src/assets/scene00175.png
/src/assets/scene00176.png
/src/assets/scene00177.png
/src/assets/scene00178.png
/src/assets/scene00179.png
/src/assets/scene00180.png
/src/assets/scene00181.png
/src/assets/scene00182.png
/src/assets/scene00183.png
/src/assets/scene00184.png
/src/assets/scene00185.png
/src/assets/scene00186.png
/src/assets/scene00187.png
/src/assets/scene00188.png
/src/assets/scene00189.png
/src/assets/scene00190.png
/src/assets/scene00191.png
/src/assets/scene00192.png
/src/assets/scene00193.png
/src/assets/scene00194.png
/src/assets/scene00195.png
/src/assets/scene00196.png
/src/assets/scene00197.png
/src/assets/scene00198.png
/src/assets/scene00199.png
/src/assets/scene00200.png
/src/assets/scene00201.png
/src/assets/scene00202.png
/src/assets/scene00203.png
/src/assets/scene00204.png
/src/assets/scene00205.png
/src/assets/scene00206.png
/src/assets/scene00207.png
/src/assets/scene00208.png
/src/assets/scene00209.png
/src/assets/scene00210.png
/src/assets/scene00211.png
/src/assets/scene00212.png`;
  return data.split("\n")[index];
}

const frameCount = 212;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.5,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `500% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
