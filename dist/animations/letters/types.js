import { lettero1In, lettero1Out, lettero2In, lettero2Out, lettero3In, lettero3Out, lettero4In, lettero4Out, lettero5In, lettero5Out } from "./keyframes";
var animationTypes = {
  lettero1: function lettero1(index, delay) {
    return {
      in: {
        func: lettero1In,
        easing: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        delay: delay + 20 * index,
        time: 300
      },
      out: {
        func: lettero1Out,
        easing: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        delay: delay / 2 + 20 * index,
        time: 200
      }
    };
  },
  lettero2: function lettero2(index) {
    return {
      in: {
        func: lettero2In,
        easing: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        delay: 40 * index,
        time: 300
      },
      out: {
        func: lettero2Out,
        easing: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        delay: 30 * index,
        time: 200
      }
    };
  },
  lettero3: function lettero3(index) {
    return {
      in: {
        func: lettero3In,
        easing: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
        delay: 30 * index,
        time: 300
      },
      out: {
        func: lettero3Out,
        easing: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
        delay: 30 * index,
        time: 200
      }
    };
  },
  lettero4: function lettero4(index, delay) {
    return {
      in: {
        func: lettero4In,
        easing: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        delay: delay ? delay + 100 + index * 50 : 0,
        time: 300
      },
      out: {
        func: lettero4Out,
        easing: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        delay: delay ? delay + 50 + index * 50 : 0,
        time: 300
      }
    };
  },
  lettero5: function lettero5(index, delay) {
    return {
      in: {
        func: lettero5In,
        easing: "cubic-bezier(0.19, 1, 0.22, 1)",
        delay: delay + 200 + index * 20,
        time: 400
      },
      out: {
        func: lettero5Out,
        easing: "cubic-bezier(0.19, 1, 0.22, 1)",
        delay: index * 20,
        time: 400
      }
    };
  }
};
export default animationTypes;