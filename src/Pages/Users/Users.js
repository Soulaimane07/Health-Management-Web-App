import Header from '../../Components/Header/Header'
import './Users.css'
import Table from '../../Components/Table/Table'
import { GetData } from '../../Components/Functions/CRUD'

function Users(props) {
    const lang = props.lang
    document.title = `Health Manager - ${lang.title}`

    let users = GetData("/users")
    console.log("==> ", users);

    let userKeys = [lang.create.email, lang.create.fname, lang.create.lname, lang.create.pass]

  return (
    <div className='Users PageBox'>
      <Header title={lang.title} button={lang.create.title} number={users?.length} />

      <div className='PageBody'>
        <Table header={userKeys} data={users} />
      </div>
    </div>
  )
}

export default Users