anime({
    targets: 'div',
    backgroundColor:'#303030',
    easing:'linear',
    direction:'alternate',
    duration:750,
    translateY:200,
    delay:function(el,i,l){
        return i*1000;
    },

});