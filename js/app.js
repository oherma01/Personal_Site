
var mq = window.matchMedia('(min-width: 1200px)');
if(mq.matches) {
    $('#face').attr('src','img/portrait.jpg')
} else {
    $('#face').attr('src','img/portrait.jpg')
}

mq.addListener(function(changed) {
    if(changed.matches) {
        $('#face').attr('src','img/portrait.jpg')
    } else {
        $('#face').attr('src','img/portrait.jpg')
    }
});

var mq2 = window.matchMedia('(min-width: 768px) && (max-width: 979px)');
if(mq2.matches) {
    $('#face').attr('src','img/portrait.jpg')
} else {
    $('#face').attr('src','img/portraitmediumer.jpg')
}

mq2.addListener(function(changed) {
    if(changed.matches) {
        $('#face').attr('src','img/portrait.jpg')
    } else {
        $('#face').attr('src','img/portraitmediumer.jpg')
    }
});


var mq3 = window.matchMedia('(min-width: 767px)');
if(mq3.matches) {
    $('#face').attr('src','img/portrait.jpg')
} else {
    $('#face').attr('src','img/portraitmediumer.jpg')
}

mq3.addListener(function(changed) {
    if(changed.matches) {
        $('#face').attr('src','img/portrait.jpg')
    } else {
        $('#face').attr('src','img/portraitmediumer.jpg')
    }
});

var mq4 = window.matchMedia('(min-width: 480px)');
if(mq4.matches) {
    $('#face').attr('src','img/portrait.jpg')
} else {
    $('#face').attr('src','img/portraitsmall.jpg')
}

mq4.addListener(function(changed) {
    if(changed.matches) {
        $('#face').attr('src','img/portrait.jpg')
    } else {
        $('#face').attr('src','img/portraitsmall.jpg')
    }
});

var mq5 = window.matchMedia('(min-width: 980px) and (max-width: 1200px)');
if(mq5.matches) {
    $('#face').attr('src','img/portrait.jpg')
} else {
    $('#face').attr('src','img/portraitmedium.jpg')
}
mq5.addListener(function(changed) {
    if(changed.matches) {
        $('#face').attr('src','img/portrait.jpg')
    } else {
        $('#face').attr('src','img/portraitmedium.jpg')
    }
});
    