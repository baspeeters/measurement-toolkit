/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {TroyPound} from "../../../../../../src/Units/Mass/US/Troy/TroyPound";

describe("Pound (Troy)", () => {
    it("should convert pound to ounces and back", () => {
        const unit = new TroyPound(746.19);

        expect(unit.to).to.respondTo("TroyOunce");
        expect(unit.to.TroyOunce().value.toPrecision(12)).to.equal("8954.28000000");
        expect(unit.to.TroyOunce().to).to.respondTo("TroyPound");
        expect(unit.to.TroyOunce().to.TroyPound().value.toPrecision(12)).to.equal("746.190000000");
    });
});
