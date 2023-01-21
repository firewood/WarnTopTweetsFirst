function warnTopTweetsFirst() {
  var h2 = document.getElementsByTagName('h2');
  for (let i = 0; i < h2.length; ++i) {
    var span = h2[i].getElementsByTagName('span')[0];
    if (!span) continue;
    if (['Home', 'ホーム'].includes(span.textContent)) {
      span.style.fontSize = '30pt';
      span.style.color = 'red';
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
var check_timer = setInterval(check, 500);

function check() {
  warnTopTweetsFirst();
  hideMoreTweets();

  if (++count >= 50) {
    clearInterval(check_timer);
  }
}

