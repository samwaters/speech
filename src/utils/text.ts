export const getTextNodesWithContent = (under: Node) => {
	const walker = document.createTreeWalker(under, NodeFilter.SHOW_TEXT)
	const allNodes: Node[] = []
	let n: Node
	// eslint-disable-next-line no-cond-assign
	while(n = walker.nextNode()!) {
		allNodes.push(n)
	}
	return allNodes.filter(node => /[A-Za-z0-9]/.test(node.textContent!))
}
