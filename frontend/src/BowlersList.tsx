import { useEffect, useState } from "react";
import {bowler} from "./types/bowlers"


function FoodList() {

    const [bowlers, setBowlers] = useState<bowler[]>([]);


    useEffect(() => {
        
        const fetchFood = async () => {
            const response = await fetch("https://localhost:5000/api/BowlersList")
            const data = await response.json();
            setBowlers(data);
        }

        fetchFood()
    }, [])


    return (
    <>
        <h1>Marriot Food</h1>
        <table>
            <thead>
                <tr>
                    <th>Bowler Name</th>
                    <th>Team Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    bowlers.map((b) => (
                        <tr key={b.bowlerId}>
                            <td>{b.bowlerId}</td>
                            <td>{b.bowlerId}</td>
                            <td>{b.bowlerId}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
        
    )
}

export default FoodList;