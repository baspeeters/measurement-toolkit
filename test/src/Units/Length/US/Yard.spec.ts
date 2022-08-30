/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from 'chai';
import {Meter} from '../../../../../src/Units/Length/SI/Meter';
import {Millimeter} from '../../../../../src/Units/Length/SI/Millimeter';
import {Yard} from '../../../../../src/Units/Length/US/Yard';

describe('Yard', () => {
    it('should convert to metric and back', () => {
        const yard = new Yard(6);

        expect(yard).to.be.an.instanceOf(Yard);

        expect(yard.to).to.respondTo('Meter');
        expect(yard.to.Meter()).to.be.an.instanceOf(Meter);
        expect(yard.to.Meter().value.toPrecision(10)).to.equal('5.486400000');

        expect(yard.to).to.respondTo('Millimeter');
        expect(yard.to.Millimeter()).to.be.an.instanceOf(Millimeter);
        expect(yard.to.Millimeter().value.toPrecision(10)).to.equal('5486.400000');

        expect(yard.to.Kilometer().to.Yard()).to.be.an.instanceOf(Yard);
        expect(yard.to.Kilometer().to.Yard().value.toPrecision(10)).to.equal('6.000000000');
    });
});
