/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Yard} from "../../../../../src/Units/Length/US/Yard";

describe("US: Length", () => {
  it("should convert between US Customary units and back", () => {
    const yards = new Yard(44.58);

    expect(yards.to).to.respondTo("Inch");
    expect(yards.to).to.respondTo("Foot");
    expect(yards.to).to.respondTo("Mile");

    expect(yards.to.Inch().value.toFixed(13)).to.equal("1604.8799999999999");
    expect(yards.to.Foot().value.toFixed(13)).to.equal("133.7400000000000");
    expect(yards.to.Mile().value.toFixed(15)).to.equal("0.025329545454545");

    expect(yards.to.Inch().to).to.respondTo("Yard");
    expect(yards.to.Foot().to).to.respondTo("Yard");
    expect(yards.to.Mile().to).to.respondTo("Yard");

    expect(yards.to.Inch().to.Yard().value.toFixed(13)).to.equal("44.5800000000000");
    expect(yards.to.Foot().to.Yard().value.toFixed(13)).to.equal("44.5800000000000");
    expect(yards.to.Mile().to.Yard().value.toFixed(13)).to.equal("44.5800000000000");
  });
});
