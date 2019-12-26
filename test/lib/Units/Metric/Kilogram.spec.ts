/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Kilogram} from "../../../../lib/Units/Mass/Metric/Kilogram";

describe("Kilogram", () => {
    it("should convert kilogram to grams and back", () => {
        const unit = new Kilogram(20);

        expect(unit.to.Gram().value).to.equal(20000);
        expect(unit.to.Gram().to.Kilogram().value).to.equal(20);
    });
});
