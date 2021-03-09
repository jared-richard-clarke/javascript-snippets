// replace_utilize() replaces variations of "utilize"
// with variations of "use" within string literals.
const replace_utilize = (function () {
    // dictionary kept in memory through closure.
    const dictionary = {
        utilize: "use",
        utilise: "use",
        Utilize: "Use",
        Utilise: "Use",
        utilizes: "uses",
        utilises: "uses",
        utilized: "used",
        utilised: "used",
        utilizing: "using",
        utilising: "using",
        Utilizing: "Using",
        Utilising: "Using"
    };
    // Immediately invoked function expression returns a function. 
    // All function instances refer to a single instance of dictionary.
    return function (text) {
        // Guard safely returns non-strings without crashing the program.
        if (typeof text !== "string") {
            return text;
        }
        // Function body refers to dictionary for pattern matching.
        return text.replace(/[uU]tili([zs]e|[zs]ed|[zs]ing)/g, function (match) {
            return dictionary[match];
        });
    };
}());
