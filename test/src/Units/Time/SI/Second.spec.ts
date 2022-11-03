/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from 'chai';
import {Second} from '../../../../../src/index';

describe('Second', () => {
    it('should convert second to kiloseconds and back', () => {
        const unit = new Second(1337);

        expect(unit.to).to.respondTo('Kilosecond');
        expect(unit.to.Kilosecond().value).to.equal(1.337);
        expect(unit.to.Kilosecond().to.Second().value).to.equal(1337);
    });
});
