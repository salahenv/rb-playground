import Chart from "./pages/FileExp";
import FileExplorer from "./pages/FileExp";
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
]

export {
    routes
}