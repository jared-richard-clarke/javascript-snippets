// --- functions ---
function trim_outer( text ) {
    return text.replace(/^\s+|\s+$/gm, "");
}
function trim_inner( text ) {
    return text.replace(/\s+/g, " ");
}
function type_check( type, action ) {
    return function ( value ) {
        return typeof value !== type ? value : action( value );
    }
}
function pipe( ...actions ) {
    return function ( input ) {
        return actions.reduce(
            ( memo, action ) => action( memo ), 
            input
        );
    };
}
// --- composite functions ---
const composite_function = pipe( trim_outer, trim_inner );
const trim_whitespace = type_check( "string", composite_function );
// --- action ---
trim_whitespace( { animal: "dog" } ); // { animal: "dog" }
trim_whitespace("  a  heck'n    doggo!  "); // "a heck'n doggo!"
