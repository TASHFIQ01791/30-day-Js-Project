const initialTranslateLTR = -100;
const initialTranslateRTL = 30;

function setupIntersectionObserver(element, isLTR, speed) {
  // Callback for IntersectionObserver
  const intersectionCallback = (entries) => {
    const entry = entries[0];
    // console.log(entries);
    if (entry.isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX - initialTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;

  }

  const observer = new IntersectionObserver(intersectionCallback);
  observer.observe(element);
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
    
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
