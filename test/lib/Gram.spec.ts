/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Gram} from "../../lib/Units/Metric/Gram";

describe("Gram", () => {
    it("should convert grams to kilograms and back", () => {
        const unit = new Gram(127);

        expect(unit.value).to.equal(127);
        expect(unit.to.Kilogram().value).to.equal(0.127);
        expect(unit.to.Kilogram().to.Gram().value).to.equal(127);
    });
});
