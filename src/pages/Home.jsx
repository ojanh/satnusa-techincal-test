import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppService from "services/app.service";



export default function Home() {
    const dispatcher = useDispatch()
    const userLength = useSelector(state => state.app.filterUsers?.length)

    function filterUser(val, type) {
        dispatcher(AppService.filterUser(val, type))
    }
    useEffect(() => {
        dispatcher(AppService.getUser())
    }, [])

    return (
    <div className='container'>
        <div className="container-search">
            <input type="text" className="search-input" placeholder="Name"
                onInput={e => filterUser(e.target.value, 'name') }
            />
            <input type="text" className="search-input" placeholder="Email"
                onInput={e => filterUser(e.target.value, 'email') }
                style={{marginLeft: '.4rem'}}
            />
        </div>
        {userLength > 0 ? <UserData /> : <NoData />}
    </div>)
}

function UserData() {
    const users = useSelector(state => state.app.filterUsers)

    return (
    <table className='table'>
        <thead>
            <tr>
                <th className="cells">Name</th>
                <th className="cells">Username</th>
                <th className="cells">Email</th>
                <th className="cells">Address</th>
                <th className="cells">Phone</th>
            </tr>
        </thead>
        <tbody>
            {users.map((e) => (
                <tr key={e?.id}>
                    <td className="column-text">{e?.name}</td>
                    <td className="column-text">{e?.username}</td>
                    <td className="column-text">{e?.email}</td>
                    <td className="column-text" >
                        {e?.address?.suite}, {e?.address?.street}, {e?.address?.city}, {e?.address?.zipcode}
                    </td>
                    <td>
                        <a href={`tel:${e?.phone}`}>
                            {e?.phone}
                        </a>
                    </td>
                </tr>))}
        </tbody>
    </table> )
}

const NoData = () => (
    <div className="no-data">
        <h1>No Data</h1>
    </div>
)