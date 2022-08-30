/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from 'chai';
import {Grain} from '../../../../../../src/Units/Mass/US/Avoirdupois/Grain';

describe('Grain (Avoirdupois)', () => {
    it('should convert Grain to Troy Pound and back', () => {
        const unit = new Grain(62.982);

        expect(unit.to).to.respondTo('TroyPound');
        expect(unit.to.TroyPound().value.toFixed(10)).to.equal('0.0109343750');
        expect(unit.to.TroyPound().to).to.respondTo('Pound');
        expect(unit.to.TroyPound().to.Grain().value.toFixed(4)).to.equal('62.9820');
    });

    it('should be a base unit to Troy Pound', () => {
        const unit = new Grain(62.982);

        expect(unit.derivedUnits).to.respondTo('TroyPound');
        expect(unit.derivedUnits.TroyPound().value.toFixed(10)).to.equal('0.0109343750');
        expect(unit.derivedUnits.TroyPound().to).to.respondTo('Pound');
        expect(unit.derivedUnits.TroyPound().to.Grain().value.toFixed(4)).to.equal('62.9820');
    });
});
