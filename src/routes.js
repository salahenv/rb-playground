import Chart from "./pages/Chart";
import FileExplorer from "./pages/FileExp";
import KanbanPage from "./pages/Kanban";
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
    {
        link: '/kanban',
        name: 'Kanban',
        comp: <KanbanPage />
    },
]

export {
    routes
}