function pipe() {
    var fs = [].slice.apply(arguments);
    return function () { 
        return fs.reduce(function (args,f) {
            return [f.apply(this,args)];
        }.bind(this), [].slice.apply(arguments))[0];
    }.bind(this);
}

function addOne(x){
    return x+1;
}

pipe(addOne(addOne(1)));