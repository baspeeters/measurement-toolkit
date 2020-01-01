/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Gram} from "../../../../../lib/Units/Mass/SI/Gram";

describe("Gram", () => {
    it("should convert grams to kilograms and back", () => {
        const unit = new Gram(127);

        expect(unit.to.Pound().value.toFixed(11)).to.equal("0.27998707297");
        expect(unit.to).to.respondTo("Kilogram");
        expect(unit.to.Kilogram().value).to.equal(0.127);
        expect(unit.to.Kilogram().to).to.respondTo("Gram");
        expect(unit.to.Kilogram().to.Gram().value).to.equal(127);
    });

    it("should convert grams to pounds through kilograms", () => {
        const unit = new Gram(2);

        expect(unit.value).to.equal(2);
        expect(unit.to).respondTo("Pound");
        expect(unit.to.Pound().value.toFixed(15)).to.equal("0.004409245243698");
    });
});
