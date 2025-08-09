import React,{useState,useEffect} from 'react'
import BlankInput from "./BlankInput";
import API from "./API";
import AddModal from "./AddModal";
 import UpdateModal from "./UpdateModal";

function Main() {
  const [user, setUser] = useState([]);
  const [latestUser, setLatestUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);


  const handledAddUser = (newUser) => {
    newUser.id = user.length +1;
    setUser((prev)=>[...prev,newUser])
    setLatestUser(newUser);

  }

   const handledUpdateUser = (updatedUser) => {
     const updatedUsers = user.map((item) =>
  item.id === updatedUser.id ? updatedUser : item
);

      setUser(updatedUsers);
      setLatestUser(updatedUser);
    }


   

    



  return (
    <div className='p-6 max-auto space-y-6'>
      
      <div className='flex justify-center'>
        <button className='btn btn-danger ' onClick={()=> setShowModal(true)}>
           ADD dddd
        </button>
      </div>

      <API 
      users={user}
      onUpdate={(user)=>{
        setSelectedUser(user);
        setShowUpdateModal(true)
      }}
      />

      <BlankInput user={latestUser} />


      {showModal && (
        <AddModal 
         onClose={() => setShowModal(false)}
        onSubmit={(newUser)=>{
          handledAddUser(newUser)
          setShowModal(false)
        }}
        />
      )}

    {showUpdateModal && selectedUser && (
      <UpdateModal
      user={selectedUser}
      onclose={() => setShowUpdateModal(false)}
      onSubmit={(updatedUser) => {
        handledUpdateUser(updatedUser);
        setShowUpdateModal(false);

       } }
      
      />

    )}
  
      
      
    </div>
  )
}


export default Main










