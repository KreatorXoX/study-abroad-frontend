import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUsersByRole, useRemoveUser } from "../../api/usersApi";
import Button from "../../shared/components/Form-Elements/Button";
import Card from "../../shared/components/UI-Elements/Card";
import LoadingSpinner from "../../shared/components/UI-Elements/LoadingSpinner";
import SearchBar from "../../shared/components/UI-Elements/SearchBar";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import styles from "./UserList.module.css";
const EmployeesList = () => {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const {
    data: emps,
    isLoading,
    isFetching,
    isFetched,
  } = useUsersByRole("employee");
  const { mutate: removeEmployee, isLoading: isMutating } = useRemoveUser();

  let content;

  if (isLoading || isFetching || isMutating) {
    content = <LoadingSpinner asOverlay />;
  }
  if (isFetched) {
    content = (
      <div className={styles.listPage}>
        {showForm && (
          <div
            style={{ width: "100%", display: "flex", placeContent: "center" }}
          >
            <EmployeeForm setShowForm={setShowForm} />
          </div>
        )}
        {!showForm && (
          <>
            <div className={styles.searchBar}>
              <SearchBar />
            </div>
            <div className={styles.addEmp}>
              <Button
                onClick={() => {
                  setShowForm(true);
                }}
                mid
                success
              >
                Add Employee
              </Button>
            </div>

            <div className={styles.list}>
              {emps?.length > 0 ? (
                emps.map((emp) => (
                  <Link to={`/profile/${emp._id}`} key={emp._id + 1}>
                    <Card
                      name={emp.username}
                      image={
                        "https://img.freepik.com/free-photo/studio-portrait-bearded-man-posing-beige-background-looking-into-camera-with-broad-smile-his-face_295783-16582.jpg?w=1380&t=st=1668962600~exp=1668963200~hmac=1d23c2110f4ae876f45c91e50b56163a351f03060a154d846db3639ed676e04c"
                      }
                      actions={
                        <>
                          <Button
                            onClick={() => {
                              history.push(`/cms/employees/${emp._id}`);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => {
                              removeEmployee({ id: emp._id, role: emp.role });
                            }}
                            danger
                          >
                            Del
                          </Button>
                        </>
                      }
                    />
                  </Link>
                ))
              ) : (
                <div className={styles.noUser}>No employee present</div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
  return content;
};

export default EmployeesList;
