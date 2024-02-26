import { RefObject, useEffect, useMemo, useState } from "react";

export function useIsInViewport(ref: RefObject<HTMLElement>, trigger: any[] = []) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(
		() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)),
		[]
	);

	useEffect(() => {
		observer.observe(ref.current as Element);
		return () => {
			observer.disconnect();
		};
	}, [ref, observer, ...trigger]);

	return isIntersecting;
}
