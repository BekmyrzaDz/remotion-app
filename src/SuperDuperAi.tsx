import { zColor } from '@remotion/zod-types'
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion'
import { z } from 'zod'
import { BasicTransition } from './SuperDuperAi/SlideTransitons'
import { Title } from './SuperDuperAi/Title'

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
})

export const SuperDuperAi: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	const frame = useCurrentFrame()
	const { durationInFrames } = useVideoConfig()

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	)

	return (
		<AbsoluteFill style={{ backgroundColor: 'white' }}>
			<AbsoluteFill style={{ opacity }}>
				<BasicTransition />
				<Sequence from={10}>
					<Title titleText={propOne} titleColor={propTwo} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	)
}
