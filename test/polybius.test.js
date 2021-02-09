const expect = require('chai').expect;
const polybius = require("../src/polybius");


describe("polybius function", () => {
    it("should return the encoded value", () => {
    const input = "this is cool";
    const expected = "44324234 4234 31434313";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
    });



    it("should return the encoded value", () => {
    const input = "wow polybius is a cool name";
    const expected = "254325 5343134521425434 4234 11 31434313 33112351";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring the capital letters", () => {
    const input = "This is a fun function to write";
    const expected = "44324234 4234 11 125433 1254333144424333 4443 2524424451";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
    });


    it("should return the decoded value", () =>{
    const input = "44324234 4234 31434313";
    const expected = "th(i/j)s (i/j)s cool";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);  
    });
    
    it("should return the decoded value", () =>{
    const input = "254325 5343134521425434 4234 11 31434313 33112351";
    const expected = "wow polyb(i/j)us (i/j)s a cool name";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);  
    });

    it("should return the decoded value", () =>{
    const input = "44324234 4234 11 125433 1254333144424333 4443 2524424451";
    const expected = "th(i/j)s (i/j)s a fun funct(i/j)on to wr(i/j)te";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);  
    });
});