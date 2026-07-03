import { RefObject, useEffect, useState } from "react";

export function useSectionFade(
    scrollRef: RefObject<HTMLDivElement | null>,
    sectionRef: RefObject<HTMLDivElement | null>
) {

    const fadeRate = 3;

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const wrapper = scrollRef.current;
        const section = sectionRef.current;
        if (!wrapper || !section) return;

        const onScroll = () => {
            const viewportCenter = wrapper.clientHeight / 2;

            const sectionCenter =
                section.offsetTop -
                wrapper.scrollTop +
                section.offsetHeight / 2;

            const distance = Math.abs(sectionCenter - viewportCenter);

            const maxDistance =
                wrapper.clientHeight / 2 + section.offsetHeight / 2;

            const t = Math.max(0, 1 - distance / maxDistance);

            setOpacity(Math.pow(t, fadeRate));
        };

        onScroll();

        wrapper.addEventListener("scroll", onScroll);
        return () => wrapper.removeEventListener("scroll", onScroll);
    }, [scrollRef, sectionRef]);

    return opacity;
}