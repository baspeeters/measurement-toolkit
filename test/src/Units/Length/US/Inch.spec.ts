/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Meter} from "../../../../../src/Units/Length/SI/Meter";
import {Millimeter} from "../../../../../src/Units/Length/SI/Millimeter";
import {Inch} from "../../../../../src/Units/Length/US/Inch";

describe("Inch", () => {
  it("should convert to metric and back", () => {
    const inch = new Inch(635);

    expect(inch).to.be.an.instanceOf(Inch);

    expect(inch.to).to.respondTo("Meter");
    expect(inch.to.Meter()).to.be.an.instanceOf(Meter);
    expect(inch.to.Meter().value.toPrecision(10)).to.equal("16.12900000");

    expect(inch.to).to.respondTo("Millimeter");
    expect(inch.to.Millimeter()).to.be.an.instanceOf(Millimeter);
    expect(inch.to.Millimeter().value.toPrecision(10)).to.equal("16129.00000");

    const kilometer = inch.to.Kilometer();
    expect(kilometer.to.Inch()).to.be.an.instanceOf(Inch);
    expect(kilometer.to.Inch().value.toPrecision(10)).to.equal("635.0000000");
  });
});
