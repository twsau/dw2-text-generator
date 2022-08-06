import { hello } from "./hello";
import { expect } from "chai";
import "mocha";

describe("Hello world", () => {
  it("should return hello world", () =>
    expect(hello()).to.equal("Hello world!"));
});
