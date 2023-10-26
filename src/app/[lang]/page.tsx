import HomePage from '@/components/shared/HomePage';
import Link from '@/components/core/link';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import PageTitle from '@shared/PageTitle';
import { UserButton } from '@clerk/nextjs';
import LevelLink from '@/components/core/levelLink/LevelLink';
import LevelsLinksContainer from '@/components/core/levelsLinksContainer';
import NotesCircle from '@/components/core/notesCircle/NotesCircle';
import GameLink from '@/components/shared/gameLink/GameLink';

const Home = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { page } = dict.app;

	return (
		<div
			style={{
				height: '100%',
			}}
			className='border-4 flex flex-row justify-center items-center gap-20'
		>
			<GameLink href='memo-the-melo' colorType='peach' label='Memo the Melo' />
			<GameLink href='pitch-catch' colorType='peach' label='Pitch Catch' />
		</div>
	);
};

export default Home;
