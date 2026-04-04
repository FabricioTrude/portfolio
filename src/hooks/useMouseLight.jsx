import {useEffect} from "react";

function useMouseLight() {
    useEffect(() => {
        const move = (e) => {
            document.body.style.setProperty('--mouse-x', e.clientX + 'px');
            document.body.style.setProperty('--mouse-y', e.clientY + 'px');
        }
        document.addEventListener('mousemove', move);
        return () => document.removeEventListener('mousemove', move);
    }, []);
}

export default useMouseLight;