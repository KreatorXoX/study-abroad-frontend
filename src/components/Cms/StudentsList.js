import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UI-Elements/Card";
import SearchBar from "../../shared/components/UI-Elements/SearchBar";
import { students } from "../../dummyData/students";
import styles from "./UserList.module.css";
const StudentsList = () => {
  /* depeding on who is signed in, we gonna fetch different type of students */
  return (
    <div className={styles.listPage}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.list}>
        {students.map((std) => (
          <Link to={`/profile/${std.id}`} key={std.id}>
            <Card
              name={std.name}
              image={
                "https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?w=1380&t=st=1668962251~exp=1668962851~hmac=eee7dcdd664a4791bffd308575b3d4f4e2f7314b213c2f47b679bb063511e0ac"
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
