import { getTextNodesWithContent } from "./text.ts";
import { clearSelection, selectTextInNode } from "./select.ts";

let NodeIndex = 0
let NodeList: Node[] = []
export const Synthesis = window.speechSynthesis
export const Utterance = new SpeechSynthesisUtterance()

Utterance.onboundary = (ev: SpeechSynthesisEvent) => {
	selectTextInNode(NodeList[NodeIndex], ev.charIndex, ev.charIndex + ev.charLength)
}

Utterance.onend = () => {
	NodeIndex++
	if(NodeList[NodeIndex]) {
		readNode(NodeList[NodeIndex])
	} else {
		clearSelection()
	}
}

Utterance.onerror = (err: SpeechSynthesisErrorEvent) => {
	console.log("Oh no", err.error)
}

Utterance.onstart = (ev: SpeechSynthesisEvent) => {
	selectTextInNode(NodeList[NodeIndex], ev.charIndex, ev.charIndex + ev.charLength)
}

export const startReading = (node: Node, pitch: number, rate: number, voice: SpeechSynthesisVoice) => {
	Utterance.pitch = pitch
	Utterance.rate = rate
	Utterance.voice = voice
	NodeIndex = 0
	NodeList = getTextNodesWithContent(node)
	readNode(NodeList[0])
}

const readNode = (node: Node) => {
	node.parentElement!.scrollIntoView({ behavior: "smooth", block: "center"})
	Utterance.text = node.textContent!
	Synthesis.speak(Utterance)
}
