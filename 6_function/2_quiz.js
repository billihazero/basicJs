function test() {
    let result = "";
    if (a) {
        if (!b) {
            result = "c";
        }
    } else {
        result = "a";
    }
    result += "b";
    return result;
}

function answer() {
    let res = "";
    if (!a) {
        res = "a";
        result += "b";
        return result;
    }
    if (!b) {
        res = "c";
    }
    result += "b";
    return result;
}
