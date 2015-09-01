console.log('Running SPAMFILTER');

function test (text) {
    console.log(text);
    var newlines = text.split('<br>').length;
    return text.length > 10 && newlines < 10;
}

function filter () {
    var $comments = $('.Comment');

    $comments.each(function () {
        var $comment = $(this);
        var text = $comment.find('.Content').html();
        if (text && !test(text)) {
            console.log('HIDING SPAM COMMENT', text, $comment);
            $comment.hide();
        }
    });
}

var observer = new MutationObserver(filter);

observer.observe(document.getElementById('Posts'), { childList: true });

$(filter);