import Chart from "./pages/Chart";
import FileExplorer from "./pages/FileExp";
import KanbanPage from "./pages/Kanban";
import TicTocToePage from "./pages/TicTacToe";
import FeatureFlagPage from "./pages/FeatureFlag";
import SnakeGamePage from "./pages/SnakeGame";
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
    {
        link: '/feature-flag',
        name: 'Feature Flag',
        comp: <FeatureFlagPage />
    },
    {
        link: '/snake-game',
        name: 'Snake Game',
        comp: <SnakeGamePage />
    },
]

export {
    routes
}