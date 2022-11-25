const { leapYear } = require('./leapyear');

describe('leap year kata', function(){

    it('should be defined', function(){
        expect(leapYear).toBeInstanceOf(Function);
    });

    it('should be return false when input is 1997', function(){
        expect(leapYear(1997)).toBe(false);
    });

    it('should be return false when input is 1996', function(){
        expect(leapYear(1996)).toBe(true);
    });
    
    it('should be return false when input is 1600', function(){
        expect(leapYear(1600)).toBe(true);
    });
    it('should be return false when input is 1800', function(){
        expect(leapYear(1800)).toBe(false);
    });

});