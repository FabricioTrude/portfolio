import { useEffect, useRef } from "react";

const useCardScroll = () => {
    const listRef = useRef(null);
    const thumbRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        const thumb = thumbRef.current;

        if (!list || !thumb) return;

        let isDragging = false;
        let isThumbDrag = false;
        let startX = 0;
        let startScroll = 0;

        // ---------------------------
        // ATUALIZA THUMB
        // ---------------------------
        const updateThumb = () => {
            const maxScroll = list.scrollWidth - list.clientWidth || 1;

            const ratio = list.clientWidth / list.scrollWidth;
            const thumbWidth = list.clientWidth * ratio;

            thumb.style.width = `${thumbWidth}px`;

            const maxThumbMove = list.clientWidth - thumbWidth;
            const scrollRatio = list.scrollLeft / maxScroll;

            thumb.style.transform = `translateX(${scrollRatio * maxThumbMove}px)`;
        };

        // ---------------------------
        // START DRAG
        // ---------------------------
        const startDrag = (clientX, thumbDrag) => {
            isDragging = true;
            isThumbDrag = thumbDrag;
            startX = clientX;
            startScroll = list.scrollLeft;

            document.body.classList.add("grabbing");
        };

        // ---------------------------
        // MOVE
        // ---------------------------
        const moveDrag = (clientX, isTouch) => {
            if (!isDragging) return;

            const dx = clientX - startX;

            const maxScroll = list.scrollWidth - list.clientWidth;
            const maxThumbMove = list.clientWidth - thumb.offsetWidth;
            const ratio = maxScroll / maxThumbMove;

            if (isThumbDrag) {
                // thumb (sempre padrão)
                list.scrollLeft = startScroll + dx * ratio;
            } else if (isTouch) {
                // lista no mobile (invertido natural)
                list.scrollLeft = startScroll - dx;
            }
        };

        // ---------------------------
        // END
        // ---------------------------
        const endDrag = (e) => {
            isDragging = false;
            isThumbDrag = false;

            document.body.classList.remove("grabbing");

            thumb.releasePointerCapture?.(e.pointerId);
        };

        // ---------------------------
        // POINTER EVENTS
        // ---------------------------
        const onPointerDown = (e) => {
            const isTouch = e.pointerType === "touch";

            // thumb sempre arrastável
            if (e.target === thumb) {
                startDrag(e.clientX, true);
                thumb.setPointerCapture(e.pointerId);
                return;
            }

            // lista só no mobile
            if (isTouch) {
                startDrag(e.clientX, false);
            }
        };

        const onPointerMove = (e) => {
            moveDrag(e.clientX, e.pointerType === "touch");
        };

        const onPointerUp = (e) => {
            endDrag(e);
        };

        // ---------------------------
        // EVENTOS
        // ---------------------------
        list.addEventListener("scroll", updateThumb);

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);

        list.addEventListener("pointerdown", onPointerDown);
        thumb.addEventListener("pointerdown", onPointerDown);

        window.addEventListener("resize", updateThumb);

        updateThumb();

        return () => {
            list.removeEventListener("scroll", updateThumb);

            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);

            list.removeEventListener("pointerdown", onPointerDown);
            thumb.removeEventListener("pointerdown", onPointerDown);

            window.removeEventListener("resize", updateThumb);
        };
    }, []);

    return { listRef, thumbRef };
};

export default useCardScroll;