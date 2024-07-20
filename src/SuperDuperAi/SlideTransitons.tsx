import { linearTiming, TransitionSeries } from '@remotion/transitions'
import { fade } from '@remotion/transitions/fade'
import { Img, staticFile } from 'remotion'
const photo1 = staticFile('/photo1.jpg')
const photo2 = staticFile('/photo2.jpg')
const photo3 = staticFile('/photo3.jpg')

export const BasicTransition = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={60}>
				<Img src={photo1} alt='photo1' />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={fade()}
				timing={linearTiming({ durationInFrames: 30 })}
			/>
			<TransitionSeries.Sequence durationInFrames={60}>
				<Img src={photo2} alt='photo2' />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={fade()}
				timing={linearTiming({ durationInFrames: 30 })}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<Img src={photo3} alt='photo3' />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	)
}
