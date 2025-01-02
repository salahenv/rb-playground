import Chart from "./pages/Chart";
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