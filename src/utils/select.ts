export const selectTextInNode = (node: Node, start: number, end: number) => {
	const selection = window.getSelection()!
	selection.removeAllRanges()
	const range = document.createRange()
	range.setStart(node, start)
	range.setEnd(node, end)
	selection.addRange(range)
}

export const clearSelection = () => {
	const selection = window.getSelection()!
	selection.removeAllRanges()
}
