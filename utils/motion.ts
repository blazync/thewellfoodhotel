export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

export function slideInFromBottom(delay: number) {
    return {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}


export function fadeIn(delay: number) {
    return {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function zoomIn(delay: number) {
    return {
        hidden: { scale: 0.85, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}


export function rotateIn(delay: number) {
    return {
        hidden: { rotate: -180, opacity: 0 },
        visible: {
            rotate: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}


export function swingIn(delay: number) {
    return {
        hidden: { rotateX: 90, opacity: 0 },
        visible: {
            rotateX: 0,
            opacity: 1,
            transition: {
                delay: delay,
                type: "spring",
                stiffness: 120,
            },
        },
    };
}
