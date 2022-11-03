/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from 'chai';
import {Meter} from '../../../../../src/index';
import {Yard} from '../../../../../src/index';

describe('Meter', () => {
    it('should convert meter to kilometers and back', () => {
        const unit = new Meter(1337);

        expect(unit.to).to.respondTo('Kilometer');
        expect(unit.to.Kilometer().value).to.equal(1.337);
        expect(unit.to.Kilometer().to.Meter().value).to.equal(1337);
    });

    it('should convert to yard and back', () => {
        const meter = new Meter(7);

        expect(meter.to).to.respondTo('Yard');
        expect(meter.to.Yard()).to.be.an.instanceOf(Yard);
        expect(meter.to.Yard().value.toPrecision(10)).to.equal('7.655293088');

        expect(meter.to.Yard().to.Meter()).to.be.an.instanceOf(Meter);
        expect(meter.to.Yard().to.Meter().value.toPrecision(10)).to.equal('7.000000000');
    });
});
