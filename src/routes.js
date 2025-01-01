import Chart from "./pages/FileExp";
import FileExplorer from "./pages/FileExp";
import TicTocToePage from "./pages/TicTacToe";
const routes = [
    {
        link: '/chart',
        name: 'chart',
        comp: <Chart />
    },
    {
        link: '/file-explore',
        name: 'File Explore',
        comp: <FileExplorer />
    },
    {
        link: '/tic-tac-toe',
        name: 'Tic Tac Toe',
        comp: <TicTocToePage />
    },
]

export {
    routes
}