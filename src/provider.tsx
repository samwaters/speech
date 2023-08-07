import { createContext, PropsWithChildren, useContext, useState } from "react"

const VoiceContext = createContext<{
	setVoices: (voices: SpeechSynthesisVoice[]) => void
	voices: SpeechSynthesisVoice[]
}>({
	setVoices: () => {},
	voices: []
})

export const VoiceProvider = ({ children }: PropsWithChildren) => {
	const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

	window.speechSynthesis.onvoiceschanged = () => {
		setVoices(window.speechSynthesis.getVoices())
	}

	return <VoiceContext.Provider value={{
		setVoices,
		voices
	}}>
		{children}
	</VoiceContext.Provider>
}

export const useVoiceProvider = () => useContext(VoiceContext)
