import transition from "styled-transition-group";

const appearDuration = 600;
const leaveDuration = 1000;

export const Fade = transition.div`
	&:enter, &:appear {
			opacity: 0.01;
	}

	&:enter-active, &:appear-active  {
		opacity: 1;
		transition: opacity ${appearDuration}ms ease-out;
    transition-delay: ${({ delay = 0 }) => `${delay}ms;`}
	}

	&:exit {
		opacity: 1;
	}

	&:exit-active {
		opacity: 0.01;
		transition: opacity ${leaveDuration}ms ease-out;
	}
`;
