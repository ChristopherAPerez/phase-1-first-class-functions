function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction(name) {
    return name = function() {};
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}

