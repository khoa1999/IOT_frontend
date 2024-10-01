import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Blankpage',
    Board: () => {return <PagewithNavigation/>},
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#b82c2c',
    },
});
