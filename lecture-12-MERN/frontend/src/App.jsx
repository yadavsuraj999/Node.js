import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "./api/api";

const App = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStudents = async () => {
            try {
                const response = await axios.get(BASE_URL);
                setStudents(response.data.data); // Access your API data
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getStudents();
    }, []);
    console.log(students);
    

    if (loading) {
        return <h2>Loading...</h2>; // Show something while loading
    }

    return (
        <div>
            <h1>Students List</h1>
            {students.length === 0 ? (
                <p>No students found</p>
            ) : (
                students.map((student) => (
                    <p key={student._id}>{student.name}</p>
                ))
            )}
        </div>
    );
};

export default App;
