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
  if (!document.referrer) {
    return;
  }
  let article = document.querySelector( 'div[data-testid="primaryColumn"] article[role="article"]' );
  if (!article) {
    return;
  }
  let articles = article.parentElement.parentElement.parentElement.parentElement;
  if (!articles || !articles.children) {
    return;
  }

  for (let i = 0; i < articles.children.length; ++i) {
    let div = articles.children[i];
    if (div.querySelector( 'h2[role="heading"]' )) {
      div.style.height = '2000px';
      break;
    }
  }
}

setTimeout(function() { warnTopTweetsFirst(); }, 500);
setTimeout(function() { hideMoreTweets(); }, 3000);
