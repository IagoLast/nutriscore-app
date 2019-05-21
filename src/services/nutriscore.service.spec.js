import nutriscoreService from './nutriscore.service';

describe('nutriscore.service', () => {
    describe('computeScore()', () => {
        it('Bebida de avena', () => {
            const data = {
                "energy": 186,
                "saturatedFat": 0.2,
                "sugar": 5,
                "protein": 1.3,
                "fibre": 0.4,
                "salt": 0.4,
                "vegetableFruitNuts": 0
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(2);
        });

        it('Pimiento piquillo', () => {
            const data = {
                "energy": 129,
                "saturatedFat": 0,
                "sugar": 4.5,
                "protein": 1.5,
                "fibre": 1.4,
                "salt": 0.4,
                "vegetableFruitNuts": 100
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(-5);
        })

        it('Salmon ahumado', () => {
            const data = {
                "energy": 954,
                "saturatedFat": 2.7,
                "sugar": 0.5,
                "protein": 22.3,
                "fibre": 0,
                "salt": 3.2,
                "vegetableFruitNuts": 0
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(14);
        })

        it('Mantequilla', () => {
            const data = {
                "energy": 3105,
                "saturatedFat": 55,
                "sugar": 0.4,
                "protein": 0.6,
                "fibre": 0,
                "salt": 0.03,
                "vegetableFruitNuts": 0
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(19);
        });

        it('very bad thing', () => {
            const data = {
                "energy": 4000,
                "saturatedFat": 55,
                "sugar": 50,
                "protein": 0.6,
                "fibre": 0,
                "salt": 1,
                "vegetableFruitNuts": 0
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(34);
        })

        it('Lentejas hacendado', () => {
            const data = {
                "energy": 552,
                "saturatedFat": 3.1,
                "sugar": 0.5,
                "protein": 5.1,
                "fibre": 0,
                "salt": 0.8,
                "vegetableFruitNuts": 0
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(4);
        })

        it('Light Thing', () => {
            const data = {
                "energy": 100,
                "saturatedFat": 0,
                "sugar": 0.1,
                "protein": 10,
                "fibre": 20,
                "salt": 0.02,
                "vegetableFruitNuts": 100
            };
            const actual = nutriscoreService.computeScore(data);

            expect(actual).toBe(-15);
        })
    });
});