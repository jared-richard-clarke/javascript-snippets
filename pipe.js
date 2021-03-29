function pipe( ...actions ) {
    return function ( input ) {
        return actions.reduce(
            ( memo, action ) => action( memo ), 
            input
        );
    };
}
