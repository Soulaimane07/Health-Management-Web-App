import Header from '../../Components/Header/Header'
import './Users.css'
import Table from '../../Components/Table/Table'
import { GetData } from '../../Components/Functions/CRUD'

function Users() {
    document.title = "Health Manager - Users"


    let users = GetData("/users")
    console.log("==> ", users);

    let userKeys = ['id', 'email', 'first name', 'last name', 'password']

  return (
    <div className='Users PageBox'>
      <Header title="Users" button="Create User" number={users?.length} />

      <div className='PageBody'>
        <Table header={userKeys} data={users} />

        <div className='video'>
          {users.length === 0 && 
            <video src='./assets/videos/notFound.mp4' style={{width: "100%", height: "100%", backgroundColor: "none"}} controls={false} muted autoPlay />
          }
        </div>
      </div>
    </div>
  )
}

export default Users