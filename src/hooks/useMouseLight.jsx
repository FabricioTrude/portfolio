import { useEffect } from "react";

function useMouseLight() {
    useEffect(() => {

        const updateCSS = (x, y) => {
            document.documentElement.style.setProperty('--mouse-x', x + 'px');
            document.documentElement.style.setProperty('--mouse-y', y + 'px');
        };

        const mouseMove = (e) => {
            updateCSS(e.clientX, e.clientY);
        };

        const touchMove = (e) => {
            const touch = e.touches[0];
            if (!touch) return;

            updateCSS(touch.clientX, touch.clientY);
        };

        const down = () => {
            document.body.classList.add('grabbing');
        };

        const up = () => {
            document.body.classList.remove('grabbing');
        };

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('touchmove', touchMove, { passive: true });

        document.addEventListener('mousedown', down);
        document.addEventListener('mouseup', up);
        document.addEventListener('touchstart', down);
        document.addEventListener('touchend', up);

        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('touchmove', touchMove);
            document.removeEventListener('mousedown', down);
            document.removeEventListener('mouseup', up);
            document.removeEventListener('touchstart', down);
            document.removeEventListener('touchend', up);
        };
    }, []);
}

export default useMouseLight;