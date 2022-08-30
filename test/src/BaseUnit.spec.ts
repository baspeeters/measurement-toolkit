/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from 'chai';
import {Kilogram} from '../../src/Units/Mass/SI/Kilogram';
import {SimpleBaseUnit} from '../../src/Units/SimpleBaseUnit';
import {SimpleDerivedUnit} from '../../src/Units/SimpleDerivedUnit';

describe('BaseUnit', () => {
    it('should be of the proper type', () => {
        const unit = new Kilogram(34.328);

        expect(unit).to.be.an.instanceOf(SimpleBaseUnit);
        expect(unit).to.have.property('to');
        expect(unit).to.have.property('derivedUnits');
    });

    it('should implement conversions to its derived units', () => {
        const unit = new Kilogram(9.2312);

        expect(unit).to.be.an.instanceOf(SimpleBaseUnit);
        expect(unit.to).to.respondTo('Gram');
        expect(unit.to.Gram()).to.be.an.instanceOf(SimpleDerivedUnit);
        expect(unit.to.Gram().value.toFixed(10)).to.equal('9231.2000000000');
    });

    it('should implement converters to other base units', () => {
        const unit = new Kilogram(342);

        expect(unit.to).to.respondTo('Pound');
        expect(unit.to.Pound()).to.be.an.instanceOf(SimpleBaseUnit);
        expect(unit.to.Pound().value.toFixed(10)).to.equal('753.9809366723');
    });

    it('should implement converters to derived units of other base units', () => {
        const unit = new Kilogram(32871);

        expect(unit.to).to.respondTo('Ounce');
        expect(unit.to.Ounce()).to.be.an.instanceOf(SimpleDerivedUnit);
        expect(unit.to.Ounce().value.toFixed(6)).to.equal('1159490.403245');
    });
});
