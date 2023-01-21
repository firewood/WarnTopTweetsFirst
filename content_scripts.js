function chooseChronologicalOrder() {
  const tabs = document.querySelectorAll('div[role="tablist"] a');
  if (tabs.length == 2) {
    const tab = tabs[1];
    if (tab.ariaSelected === 'false') {
      tab.click();
    }
  }
}

function hideMoreTweets() {
  document.querySelectorAll('h2[role="heading"]').forEach((element, index) => {
    if (element.textContent == 'その他のツイート' || element.textContent == '関連ツイート') {
      element.textContent = ' ';
      element.style.height = '2000px';
    }
  });
}

var count = 0;
setTimeout(check, 500);

function check() {
  chooseChronologicalOrder();
  hideMoreTweets();

  if (++count < 50) {
    setTimeout(check, 500);
  }
}
