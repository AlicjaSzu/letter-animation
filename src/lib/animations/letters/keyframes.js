import { keyframes } from "styled-components";

export const lettero1In = () => {
  const inAnim = keyframes`
		0% {
			opacity: 0;
		};
		100% {
			opacity: 1
		}
	`;
  return inAnim;
};

export const lettero1Out = () => {
  const outAnim = keyframes`
		0% {
			opacity: 1;
		};
		100% {
			opacity: 0
		}
	`;
  return outAnim;
};

export const lettero2In = index => {
  const inAnim = keyframes`
		0% {
			opacity: 0;
			transform: translateX(${50 + index * 10}px);
		};
		70% {
			opacity: 1;
		}
		100% {
			transform:translateX(0);
			opacity: 1
		}
	`;
  return inAnim;
};

export const lettero2Out = index => {
  const outAnim = keyframes`
		0% {
			opacity: 1;
			transform:translateX(0);

		};
		80% {
			opacity: 0;
		}
		100% {
			transform: translateX(${50 + index * 10}px);
			opacity: 0
		}
	`;
  return outAnim;
};

export const lettero3In = index => {
  const anim = keyframes`
		0% {
			opacity: 0;
			transform: translateY(${index % 2 === 0 ? "-80%" : "80%"});
		};
		40% {
			opacity: 1;
		}
		100% {
			transform: translateY(0);
			opacity: 1
		}
	`;
  return anim;
};

export const lettero3Out = index => {
  const anim = keyframes`
		0% {
			transform: translateY(0);
			opacity: 1
		}
		40% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(${index % 2 === 0 ? "-80%" : "80%"});
		};
	`;
  return anim;
};

export const lettero4In = () => {
  const anim = keyframes`
		0% {
			perspective: 1000;
			opacity: 0;
			transform: translateY(150%) rotateY(180deg);
		};
		40% {
			opacity: 1;
		}
		100% {
			transform: translateY(0) rotateY(0);
			opacity: 1
		}
	`;
  return anim;
};

export const lettero4Out = () => {
  const anim = keyframes`
		0% {
			opacity: 1;
			transform: translateY(0) rotateY(0);
		};
		40% {
			opacity: .5;
		}
		100% {
			perspective: 1000;
			transform: translateY(150%) rotateY(180deg);
			opacity: 0
		}
	`;
  return anim;
};

export const lettero5In = index => {
  const anim = keyframes`
		0% {
			perspective: 1000;
			transform-origin: 50% 100%,
			opacity: 0;
			transform: rotateY(-90deg);
		};
		40% {
			opacity: 1;
		}
		100%{
			transform: rotateY(0);
			opacity: 1
		}
	`;
  return anim;
};

export const lettero5Out = index => {
  const anim = keyframes`
		0% {
			opacity: 1;
			transform: rotateY(0);
		};
		100% {
			transform: rotateY(90deg);
			opacity: 0
		}
	`;
  return anim;
};

// 'fx9' : {
// 	perspective: 1000,
// 	origin: '50% 100%',
// 	in: {
// 		duration: 400,
// 		delay: function(el, index) { return index*50; },
// 		easing: 'easeOutSine',
// 		opacity: 1,
// 		rotateY: [-90,0]
// 	},
// 	out: {
// 		duration: 200,
// 		delay: function(el, index) { return index*50; },
// 		easing: 'easeOutSine',
// 		opacity: 0,
// 		rotateY: 45
// 	}
// },
