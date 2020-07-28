// import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import InputPlateNumber from "../../packages/input-plate-number";

describe("InputPlateNumber.vue", () => {
  it("renders props.msg when passed", () => {
    const defaultPlateNumber = "浙A";
    const wrapper = shallowMount(InputPlateNumber, {
      propsData: { defaultPlateNumber }
    });
    console.log(wrapper.text());

    // expect(wrapper.text()).to.include(defaultPlateNumber);
  });
});
