const { add } = require('./calculator');

describe('string calculator', function(){

    describe('add method', function(){

        it('should be defined', function(){
            expect(add).toBeInstanceOf(Function);
        });

        it('should return 3 when input is "1,2"', function() {
            const input  = "1,2";
            let result = add(input);
            expect(result).toBe(3);
        });

        it('should return 4 when input is "1,3"', function() {
            const input  = "1,3";
            let result = add(input);
            expect(result).toBe(4);
        });
        
        it('should return 0 when input is ""', function() {
            const input  = "";
            let result = add(input);
            expect(result).toBe(0);
        }); 

        it('should return 11 when input is "1,2,3,5"', function() {
            const input  = "1,2,3,5";
            let result = add(input);
            expect(result).toBe(11);
        });

        it('should return 11 when input is "1\n2"', function() {
            const input  = "1\n2";
            let result = add(input);
            expect(result).toBe(3);
        });

        it('should return 3 when input is "//:)\n1:)2"', function() {
            const input  = "//:)\n1:)2";
            let result = add(input);
            expect(result).toBe(3);
        });

        it('should return exception negative numbers not supported: -1 when input is "-1,2"', function() {
            const input  = "-1,2";
            expect(()=> add(input)).toThrow("negative numbers not supported: -1");
            // expect(result).toThrow("negative numbers not supported: -1");
        });
        
        it('should return exception negative numbers not supported: -1 -2 when input is "-1, -2 ,2"', function() {
            const input  = "-1,-2,2";
            expect(()=> add(input)).toThrow("negative numbers not supported: -1 -2");
            // expect(result).toThrow("negative numbers not supported: -1");
        });
        

    });


});