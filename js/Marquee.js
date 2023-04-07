const pTag1 = document.querySelector(".lady-ape-club");
const pTag2 = document.querySelector(".aurora-cats");
const pTag3 = document.querySelector(".career-shiba-inu");
const pTag4 = document.querySelector(".baby-ape");
const pTag5 = document.querySelector(".alien-planet");
const pTag6 = document.querySelector(".devcat");

const textArr1 =
  "LADY-APE-CLUB  LADY-APE-CLUB  LADY-APE-CLUB  LADY-APE-CLUB  LADY-APE-CLUB  LADY-APE-CLUB  LADY-APE-CLUB".split(
    " "
  );
const textArr2 =
  "AURORA-CATS  AURORA-CATS  AURORA-CATS  AURORA-CATS  AURORA-CATS  AURORA-CATS  AURORA-CATS".split(
    " "
  );
const textArr3 =
  "CAREER-SHIBA-INU  CAREER-SHIBA-INU  CAREER-SHIBA-INU  CAREER-SHIBA-INU  CAREER-SHIBA-INU  CAREER-SHIBA-INU  CAREER-SHIBA-INU".split(
    " "
  );
const textArr4 =
  "BABY-APE  BABY-APE  BABY-APE  BABY-APE  BABY-APE  BABY-APE  BABY-APE".split(
    " "
  );
const textArr5 =
  "ALIEN-PLANET  ALIEN-PLANET  ALIEN-PLANET   ALIEN-PLANET   ALIEN-PLANET   ALIEN-PLANET   ALIEN-PLANET".split(
    " "
  );
const textArr6 =
  "DEVCATS  DEVCATS   DEVCATS   DEVCATS   DEVCATS   DEVCATS   DEVCATS".split(
    " "
  );

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);
initTexts(pTag3, textArr3);
initTexts(pTag4, textArr4);
initTexts(pTag5, textArr5);
initTexts(pTag6, textArr6);

function initTexts(element, textArray) {
  textArray.push(...textArray);
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`;
    count = 0;
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

  return count;
}

function animate() {
  count1++;
  count2++;
  count3++;
  count4++;
  count5++;
  count6++;

  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);
  count3 = marqueeText(count3, pTag3, -1);
  count4 = marqueeText(count4, pTag4, 1);
  count5 = marqueeText(count5, pTag5, -1);
  count6 = marqueeText(count6, pTag6, 1);

  window.requestAnimationFrame(animate);
}

function scrollHandler() {
  count1 += 10;
  count2 += 10;
  count3 += 10;
  count4 += 10;
  count5 += 10;
  count6 += 10;
}

window.addEventListener("scroll", scrollHandler);
animate();
