/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Pound} from "../../../../../../src/Units/Mass/US/Avoirdupois/Pound";

describe("Pound (Avoirdupois)", () => {
    it("should convert pound to ounces and back", () => {
        const unit = new Pound(163.123);

        expect(unit.to).to.respondTo("Ounce");
        expect(unit.to.Ounce().value.toFixed(3)).to.equal("2609.968");
        expect(unit.to.Ounce().to).to.respondTo("Pound");
        expect(unit.to.Ounce().to.Pound().value.toFixed(3)).to.equal("163.123");
    });
});
