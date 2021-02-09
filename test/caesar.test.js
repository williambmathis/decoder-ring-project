const expect = require('chai').expect;
const caesar = require("../src/caesar");


describe("caesar function", () => {
    it("should return false if no input is given", () => {
    const input = "";
    const expected = false;
    const actual = caesar(input, 3);
    expect(actual).to.equal(expected);
    });



    it("should return false if no shift value is given or if it equals zero" , () => {
        const input = "The dog ran fast";
        const expected = false;
        const actual = caesar(input, 0);
        expect(actual).to.equal(expected);
    });



    it("should return false if shift value is less than -25" , () => {
        const input = "The dog ran fast";
        const expected = false;
        const actual = caesar(input, -27);
        expect(actual).to.equal(expected);
    });




    it("should return false if shift value is greater than 25" , () => {
        const input = "The dog ran fast";
        const expected = false;
        const actual = caesar(input, 30);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value" , () => {
        const input = "the dog ran fast";
        const expected = "wkh grj udq idvw";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value" , () => {
        const input = "the dog ran fast";
        const expected = "aol kvn yhu mhza";
        const actual = caesar(input, 7);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring capital letters" , () => {
        const input = "My name is William";
        const expected = "pb qdph lv zlooldp";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });



    it("should return the decoded value" , () => {
        const expected = "my name is william";
        const input = "pb qdph lv zlooldp";
        const actual = caesar(input, -3);
        expect(actual).to.equal(expected);
    });



    it("should return the decoded value" , () => {
        const expected = "hello there general kenobi";
        const input = "mjqqt ymjwj ljsjwfq pjstgn";
        const actual = caesar(input, 5, false);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring special characters" , () => {
        const input = "why hello there, how are you?";
        const expected = "bmd mjqqt ymjwj, mtb fwj dtz?";
        const actual = caesar(input, 5);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring special characters, with a negative shift value" , () => {
        const input = "why hello there, how are you";
        const expected = "rct czggj oczmz, cjr vmz tjp";
        const actual = caesar(input, -5);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring special characters, with a negative shift value and false encode param" , () => {
        const input = "why hello there, how are you";
        const expected = "bmd mjqqt ymjwj, mtb fwj dtz";
        const actual = caesar(input, -5, false);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring special characters, with a negative shift value and false encode param" , () => {
        const input = "thinkful";
        const expected = "wklqnixo";
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });



    it("should return the encoded value, ignoring special characters, with a negative shift value and false encode param" , () => {
        const input = "wklqnixo";
        const expected = "thinkful";
        const actual = caesar(input, 3, false);
        expect(actual).to.equal(expected);
    });
});