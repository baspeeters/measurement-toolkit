/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from 'chai';
import {AvoirdupoisTon} from '../../../../../../src/index';
import {Dram} from '../../../../../../src/index';
import {Grain} from '../../../../../../src/index';
import {Hundredweight} from '../../../../../../src/index';
import {Ounce} from '../../../../../../src/index';
import {Pound} from '../../../../../../src/index';
import {Quarter} from '../../../../../../src/index';
import {UsDerivedUnit} from '../../../../../../src/index';

describe('US Customary System for Mass (Avoirdupois)', () => {
    [
        [new Grain(1), 'Milligram', '64.7989100000000'],
        [new Dram(1), 'Gram', '1.7718451953125'],
        [new Ounce(1), 'Gram', '28.3495231250000'],
        [new Quarter(1), 'Kilogram', '11.3398092500000'],
        [new Hundredweight(1), 'Kilogram', '45.3592370000000'],
        [new AvoirdupoisTon(1), 'Kilogram', '907.1847400000000'],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ].map((data: any) => {
        it(`should implement ${data[0].constructor.name}`, () => {
            const fromUnit = data[0];
            const toClass = data[1];
            const toValue = data[2];

            expect(fromUnit).to.be.an.instanceOf(UsDerivedUnit);
            expect(fromUnit.to).to.respondTo(toClass);

            [
                'Dram',
                'Grain',
                'Hundredweight',
                'Ounce',
                'Pound',
                'Quarter',
                'AvoirdupoisTon',
            ].map((otherUnit: string) => {
                expect(fromUnit.to).to.respondTo(otherUnit);
            });

            const conversion = fromUnit.to[toClass]();

            expect(conversion.constructor.name).to.equal(toClass);
            expect(conversion.value.toFixed(13)).to.equal(conversion.value.toFixed(13));
            expect(conversion.value.toFixed(13)).to.equal(toValue);

            expect(conversion.to[fromUnit.constructor.name]().value.toFixed(13)).to.equal('1.0000000000000');
        });
    });

    it('Should have symbols', () => {
        const dram = new Dram(6);
        expect(dram.toString()).to.equal('6 dr');

        const grain = new Grain(4);
        expect(grain.toString()).to.equal('4 gr');

        const hundredweight = new Hundredweight(2);
        expect(hundredweight.toString()).to.equal('2 cwt');

        const ounce = new Ounce(18);
        expect(ounce.toString()).to.equal('18 oz');

        const pound = new Pound(1);
        expect(pound.toString()).to.equal('1 lb');

        const quarter = new Quarter(3);
        expect(quarter.toString()).to.equal('3 qr');

        const avoirdupoisTon = new AvoirdupoisTon(5);
        expect(avoirdupoisTon.toString()).to.equal('5 t');
    });
});
