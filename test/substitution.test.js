const expect = require('chai').expect;
const substitution = require("../src/substitution");

describe("substitution function", () => {
    it("should return the encoded value", () => {
    const input = "this is cool";
    const expected = "g89y 9y 3ffc";
    const actual = substitution(input, "123456789abcdefpolyghqmkws");
    expect(actual).to.equal(expected);
    });

    
    it("should return the decoded value", () => {
    const input = "mfm dw e1d5 9y m9cc91d 1e4 g89y 6he3g9fe mflby";
    const expected = "wow my name is william and this function works";
    const actual = substitution(input, "123456789abcdefpolyghqmkws", false);
    expect(actual).to.equal(expected);
    });
    
    it("should return the encoded value, ignoring capital letters", () => {
    const input = "WOW this is COOL";
    const expected = "mfm g89y 9y 3ffc";
    const actual = substitution(input, "123456789abcdefpolyghqmkws");
    expect(actual).to.equal(expected);
    });

    it("should return the decoded value, treating special characters the same", () => {
    const input = "g$&y &y 3ffc";
    const expected = "this is cool";
    const actual = substitution(input, "123456!$&abcdefpolyghqmkws", false);
    expect(actual).to.equal(expected);
        });
});