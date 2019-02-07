const getDocHeight = () => {
  const doc = document;
  return Math.max(
    doc.body.scrollHeight, doc.documentElement.scrollHeight,
    doc.body.offsetHeight, doc.documentElement.offsetHeight,
    doc.body.clientHeight, doc.documentElement.clientHeight
  );
}
const getWinHeight = () => {
  const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
  return winHeight;
}
const getScrollTop = () => {
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  return scrollTop;
}
const getScrolledPercentage = () => {
  const pctScrolled = Math.floor(getScrollTop() / (getDocHeight() - getWinHeight()) * 100);
  return pctScrolled;
};

export default getScrolledPercentage;
