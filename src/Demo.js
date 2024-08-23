import {useEffct, useState} from "react";
import {io} from "socket.io-client";

function Demo() {
    const name ="mike";
    const [count, setCount] = useState(0);

    useEffct(() => {
        console.log("useEffect hook called");
        const socket = io("ws://localhost:3002");
        socket.on("server-data", (data) =>{
            console.log(data);
        });
        //unmounting
        return () => {
            //unload logic here
            socket.off("server-data");
        };
    }, [
        count,
    ]);
    return (
        <div>
            <h1>Demo Component</h1>
            <p>Some more content</p>
            <p>{name}</p>
            <p>{NamedNodeMap.toUpperCase()}</p>
            <p>{8*9}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    );
}
