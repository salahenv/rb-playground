import { useEffect } from "react";
import { useStore } from "../Store";

function StoreDemo() {
    const {state, setState} = useStore();

    useEffect(() => {
        setState({
            name: 'Salah'
        })
    }, [])

    return (
        <div>Store Demo {state.name}</div>
    )
}

export default StoreDemo;