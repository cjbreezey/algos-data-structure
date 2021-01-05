// TinyURL is a URL shortening service where you enter a URL such as 
// https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.
// Design the encode and decode methods for the TinyURL service.There is no 
// restriction on how your encode / decode algorithm should work.You just need 
// to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

const hash = {};
function encode(longUrl) {
    let test = Math.random().toString().slice(2, 8) // 094264
    while(hash[test]) {
        test = Math.random().toString().slice(2, 8)
    }
    hash[test] = longUrl
    return test
}

function decode(shortURL) {
    let test = shortURL.slice(-6)
    if (hash[test]) {
        return hash[test]
    }
}