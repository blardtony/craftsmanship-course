const { fizzbuzz } = require('./fizbuzz');

describe('fizz buzz kata', function(){

    it('should be defined', function(){
        expect(fizzbuzz).toBeInstanceOf(Function);
    });

    it('should return fizz when input is multiple of 3', function() {
        const input  = 3;
        let result = fizzbuzz(input);
        expect(result).toBe("fizz");
    });
    
    it('should return buzz when input is multiple of 5', function() {
        const input  = 5;
        let result = fizzbuzz(input);
        expect(result).toBe("buzz");
    });    

    it('should return buzz when input is multiple of 3 and 5', function() {
        const input  = 15;
        let result = fizzbuzz(input);
        expect(result).toBe("fizzbuzz");
    });

    it('should return buzz when input is multiple of 3 and 5', function() {
        const input  = 2;
        let result = fizzbuzz(input);
        expect(result).toBe("2");
    });

});

