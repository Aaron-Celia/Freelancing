import { useEffect, useState } from "react";

export default function NoSSR({ children }) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return <div id='modal-root'>{children}</div>
}
