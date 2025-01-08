import TicTacToe from "../components/ticTacToe"

const TicTocToePage = () => {
    return (
        <div className="flex justify-center">
            <TicTacToe n={3} playWithComputer = {true}/>
        </div> 
    )
}

export default TicTocToePage